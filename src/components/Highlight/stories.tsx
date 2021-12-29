import { Story, Meta } from '@storybook/react'
import Highlight from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead is back!',
    subtitle: 'Come see John’s new adventures',
    buttonLink: '/games/rdr2',
    buttonLabel: 'Buy now',
    backgroundImage: '/img/red-dead-img.png'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
