import Component, { iComponent } from '.';

export default {
  title: 'Simple Components/Menu',
  component: Component,
  args: {
    children: 'Text',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Menu = (args: iComponent) => <Component {...args} />;
