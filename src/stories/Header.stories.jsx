import React from "react";

import { Header } from "../features/Header";

const meta = {
  title: "Components/Elements/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};
export default meta;

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
