import Component from '.';

export default {
  title: 'Dummy Component',
  component: Component,
  args: {
    children: 'Text',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Dummy = (args: any) => <Component {...args} />;
