import Component from '.';

export default {
  title: 'Simple Components/Loading',
  component: Component,
  args: {},
  argTypes: {},
  parameters: {
    docs: {
      description: { component: 'Componente Visual de Loading' },
    },
  },
};

export const Loading = (args: never) => (
  <div style={{ height: '200px' }}>
    <Component {...args} />
  </div>
);
