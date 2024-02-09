import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs']

}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Button'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.CLEAR
  }
}
export const Outline: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE
  }
}
export const OutlineDark: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE
  }
}
OutlineDark.decorators = [
  ThemeDecorator(Theme.DARK)
]
