// @ts-nocheck
// test-storybook-skip
import { Display } from '../components/display/Display'
export default {
  title: 'Display',
  component: Display,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
}

export const Value = {
    args: {
    value: "0"
  },
}

export const Error = {
    args: {
    value: "ERROR"
  },
}

