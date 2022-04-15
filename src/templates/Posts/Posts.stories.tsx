import Component, { iComponent } from '.';

export default {
  title: 'Templates/Posts',
  component: Component,
  args: {
    content: [
      {
        title: 'Python // Dicionario do Programador',
        short_description: 'Video ;)',
        type: 'video',
        link: 'https://www.youtube.com/embed/uOgDa1rlqjE',
        createdAt: '13/04/2022 12:25:50',
      },
      {
        title: 'Lorem Ipsum',
        short_description: 'A Little Text',
        type: 'article',
        link: 'https://images.pexels.com/photos/8930337/pexels-photo-8930337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        createdAt: '16/04/2022 12:25:50',
      },
      {
        title: 'Lorem Ipsum',
        short_description: 'A Little Text',
        type: 'article',
        link: 'https://images.pexels.com/photos/11719116/pexels-photo-11719116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        createdAt: '16/12/2002 12:25:50',
      },
      {
        title: 'A video Post',
        short_description: 'You can watch!',
        type: 'video',
        link: 'https://www.youtube.com/embed/LT-iNSrGoP8',
        createdAt: '16/12/1999 12:25:50',
      },
    ],
  },
  argTypes: {
    content: {
      type: 'array',
      description: 'É uma lista de Objetos que contem os dados de cada post',
    },
  },
};

export const Posts = (args: iComponent) => <Component {...args} />;
