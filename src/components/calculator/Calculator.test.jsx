/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/vitest'
import { Calculator } from './Calculator'

describe('Calculator', () => {
  it('should render correctly', () => {
    render(<Calculator />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should handle addition (2 + 3 = 5)', async () => {
    const user = userEvent.setup()

    await user.click(screen.getByText('2'))
    await user.click(screen.getByText('+'))
    await user.click(screen.getByText('3'))
    await user.click(screen.getByText('='))

    expect(screen.getByDisplayValue('5')).toBeInTheDocument()
    await user.click(screen.getByText('C'))
  })

  it('should handle subtraction (9 - 4 = 5)', async () => {
    const user = userEvent.setup()

    await user.click(screen.getByText('9'))
    await user.click(screen.getByText('-'))
    await user.click(screen.getByText('4'))
    await user.click(screen.getByText('='))

    expect(screen.getByDisplayValue('5')).toBeInTheDocument()
    await user.click(screen.getByText('C'))
  })

  it('should handle multiplication (6 × 7 = 42)', async () => {
    const user = userEvent.setup()

    await user.click(screen.getByText('6'))
    await user.click(screen.getByText('×'))
    await user.click(screen.getByText('7'))
    await user.click(screen.getByText('='))

    expect(screen.getByDisplayValue('42')).toBeInTheDocument()
    await user.click(screen.getByText('C'))
  })

  it('should handle division (8 ÷ 2 = 4)', async () => {
    const user = userEvent.setup()

    await user.click(screen.getByText('8'))
    await user.click(screen.getByText('÷'))
    await user.click(screen.getByText('2'))
    await user.click(screen.getByText('='))

    expect(screen.getByDisplayValue('4')).toBeInTheDocument()
    await user.click(screen.getByText('C'))
  })

  it('should show ERROR when dividing by zero', async () => {
    const user = userEvent.setup()

    await user.click(screen.getByText('8'))
    await user.click(screen.getByText('÷'))
    await user.click(screen.getByText('0'))
    await user.click(screen.getByText('='))

    expect(screen.getByDisplayValue('ERROR')).toBeInTheDocument()
    await user.click(screen.getByText('C'))
  })

  it('should allow decimal input (0.5)', async () => {
    const user = userEvent.setup()

    await user.click(screen.getByText('0'))
    await user.click(screen.getByText('.'))
    await user.click(screen.getByText('5'))

    expect(screen.getByDisplayValue('0.5')).toBeInTheDocument()
    await user.click(screen.getByText('C'))
  })

  it('should toggle sign (5 → -5)', async () => {
    const user = userEvent.setup()

    await user.click(screen.getByText('5'))
    await user.click(screen.getByText('+/-'))

    expect(screen.getByDisplayValue('-5')).toBeInTheDocument()
  })

  it('should reset display after clear (C)', async () => {
    const user = userEvent.setup()

    await user.click(screen.getByText('7'))
    await user.click(screen.getByText('C'))

    expect(screen.getByDisplayValue('0')).toBeInTheDocument()
  })

  it('should not allow multiple dots', async () => {
    const user = userEvent.setup()

    await user.click(screen.getByText('1'))
    await user.click(screen.getByText('.'))
    await user.click(screen.getByText('2'))
    await user.click(screen.getByText('.'))
    await user.click(screen.getByText('3'))

    expect(screen.getByDisplayValue('1.23')).toBeInTheDocument()
  })
})
