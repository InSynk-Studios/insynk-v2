import * as React from "react";
import { CarouselRow } from "@/components/Carousel";

const MyCarousel = () => {
  return <CarouselRow />;
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
