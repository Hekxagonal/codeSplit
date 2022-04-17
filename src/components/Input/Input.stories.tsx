import Component, { iComponent } from '.';

export default {
  title: 'Simple Components/Input',
  component: Component,
  args: {
    placeholder: 'Search here',
    label: 'Input Component',
  },
  argTypes: {
    placeholder: { type: 'string' },
  },
};

export const Input = (args: iComponent) => <Component {...args} />;
