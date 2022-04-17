import Component, { iComponent } from '.';

export default {
  title: 'Simple Components/Info Modal',
  component: Component,
  args: {
    content: {
      name: 'Flavio Alexandre',
      last_name: 'Rodrigues Gomes',
      title: 'Front End Developer | React | TypeScript',
      level: 'Junior',
      linkedIn: 'flavioalexandre556',
      github: 'hekxagonal',
      open_to_work: true,
      codeSplit_team: null,
    },
  },
  argTypes: {
    content: { type: 'object' },
  },
};

export const InfoModal = (args: iComponent) => <Component {...args} />;
