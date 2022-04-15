import Component, { iComponent } from '.';

export default {
  title: 'Templates/Posts',
  component: Component,
  args: {
    github_feed: [
      {
        title: 'Flavio Alexandre fez um novo commit',
        content: 'feat: implemented modal component',
        user: 'hekxagonal',
        type: 'commit',
        profile_photo:
          'https://images.pexels.com/photos/8930337/pexels-photo-8930337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        createdAt: '13/04/2022 12:25:50',
      },
      {
        title: 'Emily criou um novo issue',
        content: 'modal not working',
        user: 'emii_cat',
        type: 'team_alert',
        profile_photo:
          'https://images.pexels.com/photos/8930337/pexels-photo-8930337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        createdAt: '16/04/2022 12:25:50',
      },
      {
        title: 'Caio criou uma nova branch!',
        content: 'project name/ feature:main-page',
        user: 'someone',
        type: 'article',
        profile_photo:
          'https://images.pexels.com/photos/11719116/pexels-photo-11719116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        createdAt: '16/12/2002 12:25:50',
      },
      {
        title: 'Você completou uma Task!',
        content: 'project name/ create_main_page',
        user: 'me124',
        type: 'video',
        profile_photo:
          'https://images.pexels.com/photos/8930337/pexels-photo-8930337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        createdAt: '16/12/1999 12:25:50',
      },
      {
        title: 'Flavio Alexandre fez um novo commit',
        content: 'feat: implemented modal component',
        user: 'hekxagonal',
        type: 'commit',
        profile_photo:
          'https://images.pexels.com/photos/8930337/pexels-photo-8930337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        createdAt: '13/04/2022 12:25:50',
      },
    ],
    feed: [
      {
        title: 'Caio entrou na sua equipe!',
        content: 'back end developer/ Project Name',
        user: 'someone',
        type: 'article',
        profile_photo:
          'https://images.pexels.com/photos/11719116/pexels-photo-11719116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        createdAt: '16/12/2002 12:25:50',
      },
      {
        title: 'Flavio Alexandre finalizou um projeto!',
        content: 'back end/ telegram_bot',
        user: 'hekxagonal',
        type: 'article',
        profile_photo:
          'https://images.pexels.com/photos/8930337/pexels-photo-8930337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        createdAt: '16/04/2022 12:25:50',
      },
      {
        title: 'Gabriela agora é nível prata!',
        content: '',
        user: 'user_1072',
        type: 'article',
        profile_photo:
          'https://images.pexels.com/photos/11719116/pexels-photo-11719116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        createdAt: '16/12/2002 12:25:50',
      },
      {
        title: 'João agora é líder de uma equipe',
        content: 'project_python_blog',
        user: 'jp1043',
        type: 'video',
        profile_photo:
          'https://images.pexels.com/photos/8930337/pexels-photo-8930337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        createdAt: '16/12/1999 12:25:50',
      },
      {
        title: 'Caio entrou na sua equipe!',
        content: 'back end developer/ Project Name',
        user: 'someone',
        type: 'article',
        profile_photo:
          'https://images.pexels.com/photos/11719116/pexels-photo-11719116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        createdAt: '16/12/2002 12:25:50',
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
