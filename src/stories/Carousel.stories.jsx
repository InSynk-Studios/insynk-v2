import * as React from "react";
import { Carousel } from "@/components/Elements/Carousel";

const MyCarousel = () => {
  return <Carousel />;
};

const meta = {
  title: "Components/Carousel",
  component: MyCarousel,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = () => <MyCarousel />;

export const Default = Template.bind({});
Default.args = {};
