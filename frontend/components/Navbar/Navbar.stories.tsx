import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavBar from './';

export default {
  title: 'Layout/Navbar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
