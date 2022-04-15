import Component, { iComponent } from './';

export default {
  title: 'Simple Components/Navbar',
  component: Component,
  args: {
    logo: 'Python',
  },
  argTypes: {
    logo: {
      type: 'string',
      description:
        'Logo Atualmente é so um texto, precisa ser adaptado para suportar imagens',
    },
    user: {
      description: 'Nome de usuario (Funcionalidade ainda não implementada!)',
    },
  },
};

export const Navbar = (args: iComponent) => <Component {...args} />;
