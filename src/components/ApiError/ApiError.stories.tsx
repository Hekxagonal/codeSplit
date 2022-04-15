import Component from '.';

export default {
  title: 'Simple Components/Api Error',
  component: Component,
  args: {},
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component:
          'Componente Visual que indica erro na API. Pode ser adaptado para cobrir mais erros',
      },
    },
  },
};

export const ApiError = (args: never) => <Component {...args} />;
