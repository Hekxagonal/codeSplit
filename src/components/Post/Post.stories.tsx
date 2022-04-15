import Component, { PostTypes } from '.';

export default {
  title: 'Simple Components/Post',
  component: Component,
  args: {
    type: 'article',
    title: 'A evolução do Python',
    short_description:
      'Artigo sobre as principais conquistas no universo backend',
    link: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    createdAt: '12/12/2002 12:12:12',
  },
  argTypes: {
    type: {
      type: 'string',
      control: 'radio',
      options: ['article', 'video'],
      default: 'article',
      description:
        'É o tipo do Post, deve ser recebido da API, e determina como o componente se comporta, pode ter os seguintes valores:',
    },
    title: {
      description:
        'Titulo do Post, caso seja um video é recomendado que seja o nome do video',
    },
    short_description: {
      description: 'Subtitulo curto sobre o conteúdo do Post',
    },
    link: {
      description:
        'Caso seja um artigo, link será o src de uma imagem de fonte externa, caso seja um video link sera o src de um iframe ',
    },
    createdAt: {
      type: 'string',
      description:
        'É a data que cujo o conteúdo foi adicionado na database, deve ter o formato (DD/MM/YY HH:mm:ss)',
    },
  },
};

export const Article = (args: PostTypes) => <Component {...args} />;

export const Video = (args: PostTypes) => <Component {...args} />;

Video.args = {
  type: 'video',
  title: 'API // Dicionario do Programador',
  short_description: 'Canal Código Fonte TV',
  link: 'https://www.youtube.com/embed/vGuqKIRWosk',
};
