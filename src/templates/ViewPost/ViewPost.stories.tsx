import Component, { iComponent } from '.';

export default {
  title: 'Templates/View Post',
  component: Component,
  args: {
    title: 'Testando o Interpretador de Markdown',
    type: 'article',
    short_description: 'Um Artigo escrito em Markdown',
    content:
      '# This is a Title Level 1\n## This is a Title Level 2\n### This is a Title Level 3\n#### This is a Title Level 4\n\nSuspendisse purus sem, fermentum eu neque id, suscipit ultricies mauris. Vivamus faucibus lobortis varius. Nam interdum elit ut pharetra varius. Cras vitae gravida quam. Quisque sagittis, arcu ut rhoncus luctus, neque lorem efficitur urna, eu interdum sem nibh id urna. Duis quis lacus at eros fringilla dapibus. Mauris in maximus ligula. Sed elementum placerat velit, sit amet tincidunt mauris eleifend id. Maecenas et nisi dictum, varius urna quis, sodales mi.\n\n**This is a Bold text**\n~~This is a sublimed text~~\n_This is a italic text_\n\n- This is a List Element1\n- This is a List Element2\n1. This is a Enumered List Element\n2. This is a Enumered List Element2',
    link: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    createdAt: '12/12/2002 12:12:12',
    author: {
      name: 'Flavio Alexandre',
      username: 'hekxagonal',
    },
  },
  argTypes: {
    title: { type: 'string' },
  },
};

export const ViewPost = (args: iComponent) => <Component {...args} />;
