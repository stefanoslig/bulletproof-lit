import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { BplButton } from './button.js';

const defaultArgs: Partial<BplButton> = {
  variant: 'primary',
  label: 'Get started',
};

const render = ({ variant, label }: BplButton) =>
  html` <bpl-button .variant=${variant} .label=${label}>
    Get started
  </bpl-button>`;

const meta: Meta<BplButton> = {
  title: 'UI/Button',
  component: 'bpl-button',
};

type Story = StoryObj<BplButton>;

export const PrimaryButton: Story = {
  args: defaultArgs,
  render,
};

export const PrimaryButtonIcon: Story = {
  args: defaultArgs,
  render: ({ variant, label }) =>
    html` <bpl-button .variant=${variant} .label=${label}>
      <span name="icon">👌</span>
      Get started
    </bpl-button>`,
};

export const SecondaryButton: Story = {
  args: {
    ...defaultArgs,
    variant: 'secondary',
  },
  render,
};

export const OutlineButton: Story = {
  args: {
    ...defaultArgs,
    variant: 'outline',
  },
  render,
};

export default meta;
