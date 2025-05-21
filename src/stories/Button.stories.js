// @ts-nocheck
// test-storybook-skip
import { fn } from '@storybook/test'

import { Button } from '../components/button/Button'

export default {
  title: 'CustomButton',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
}

export const Number = {
  args:{
    label:"0",
    className:"number"  
  },
}

export const Operation = {
  args: {
    label: "×",
    className: "operation",
  },
}

export const Clear = {
  args: {
    label: "C",
    className: "clear",
  },
}

export const Equals = {
  args: {
    label: "=",
    className: "equals",
  },
}
