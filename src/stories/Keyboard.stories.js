// @ts-nocheck
// test-storybook-skip

import { fn } from '@storybook/test'
import { Keyboard } from '../components/keyboard/Keyboard'

const ActionData = {
  onDigit: fn(), 
  onDot: fn(), 
  onClear: fn(), 
  onOperation: fn(), 
  onEquals: fn()
}

export default {
  title: 'Keyboard',
  component: Keyboard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {...ActionData},
}

export const Default = {
    args: {

    }
}