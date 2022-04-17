import Component, { iComponent } from '.';

export default {
  title: 'Simple Components/Button',
  component: Component,
  args: {
    children: 'Button Component',
    color: '',
    fontColor: '',
  },
  argTypes: {
    children: { type: 'string' },
    color: { type: 'string', control: 'color' },
    fontColor: { type: 'string', control: 'color' },
  },
};

export const Button = (args: iComponent) => <Component {...args} />;
