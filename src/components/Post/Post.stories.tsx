import Component, { PostTypes } from '.';

export default {
  title: 'Simple Components/Post',
  component: Component,
  args: {
    type: 'commit',
    title: 'Flavio Alexandre fez commit no repositório',
    content: 'feat: implemented modal component',
    profile_photo: undefined,
    createdAt: '12/12/2002 12:12:12',
  },
  argTypes: {
    type: {
      type: 'string',
      control: 'radio',
      options: ['commit', 'issue', 'team_alert', 'team_add'],
      default: 'article',
      description:
        'É o tipo do Post, deve ser recebido da API, e determina como o componente se comporta, pode ter os seguintes valores:',
    },
    title: {
      description: 'Subtitulo curto sobre o conteúdo do Post',
    },
    profile_photo: {
      description: 'Perfil do Usuário, pode ser undefined',
    },
    createdAt: {
      type: 'string',
      description:
        'É a data que cujo o conteúdo foi adicionado na database, deve ter o formato (DD/MM/YY HH:mm:ss)',
    },
  },
};

export const Commit = (args: PostTypes) => <Component {...args} />;

export const Issue = (args: PostTypes) => <Component {...args} />;

Issue.args = {
  type: 'issue',
  title: 'Flavio Alexandre criou um novo issue',
  user: 'hekxagonal',
  content: 'issue: modal not working',
  createdAt: '12/12/2022 12:12:12',
  profile_photo:
    'https://images.pexels.com/photos/2239914/pexels-photo-2239914.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
};

export const TeamAdd = (args: PostTypes) => <Component {...args} />;

TeamAdd.args = {
  type: 'team_add',
  title: 'Flavio Alexandre entrou para a equipe!',
  content: 'front end developer',
  user: 'hekxagonal',
  createdAt: '12/04/2022 12:12:12',
  profile_photo:
    'https://images.pexels.com/photos/2156883/pexels-photo-2156883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
};

export const TeamAlert = (args: PostTypes) => <Component {...args} />;

TeamAlert.args = {
  type: 'team_alert',
  user: 'hekxagonal',
  title: 'Flavio Alexandre não concluiu sua task a tempo!',
  content: '',
  createdAt: '15/04/2022 12:12:12',
  profile_photo:
    'https://images.pexels.com/photos/2156883/pexels-photo-2156883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
};
