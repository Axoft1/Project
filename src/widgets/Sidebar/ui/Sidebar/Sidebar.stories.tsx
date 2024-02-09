import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import Sidebar from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'Widget/Sidebar',
  component: Sidebar,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Ligth: Story = {}

export const Dark: Story = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK)
]
