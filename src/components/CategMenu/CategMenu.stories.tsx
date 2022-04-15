import Component, { iComponent } from '.';

export default {
  title: 'Simple Components/Menu',
  component: Component,
  args: {
    types: ['video', 'article'],
    categories: ['programação', 'tutoriais', 'curiosidades'],
  },
  argTypes: {
    types: {
      description:
        'Deve ser uma lista de Strings que correspondem os tipos de Post, todo o front end está sendo feito pensando em escalabilidade',
    },
    categories: {
      description:
        'Deve ser uma Lista de Categorias Disponíveis no Banco de Dados',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'É um menu de pesquisa de posts por categoria e tipos, os dados vão ser obtidos da API',
      },
    },
  },
};

export const Menu = (args: iComponent) => (
  <div style={{ height: '500px' }}>
    <Component {...args} />
  </div>
);
