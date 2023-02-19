import { Button } from "@/components/Elements";
import Image from "next/image";
import PaperPlane from "@/assets/paper_plane.svg";

const meta = {
  title: "Components/Elements/Button",
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (props) => <Button {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  variant: "primary",
};

export const Inverse = Template.bind({});
Inverse.args = {
  children: "Inverse Button",
  variant: "inverse",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger Button",
  variant: "danger",
};

export const Sketch = Template.bind({});
Sketch.args = {
  children: "Sketch Button",
  isSketch: true,
  variant: "sketch",
};

export const Loading = Template.bind({});
Loading.args = {
  children: "Loading Button",
  variant: "inverse",
  isLoading: true,
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  children: "Start Icon Button",
  variant: "primary",
  // startIcon: <PaperPlane />,
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  children: "End Icon Button",
  variant: "sketch",
  isSketch: true,
  endIcon: (
    <Image priority src={PaperPlane} height={25} width={25} alt="plane" />
  ),
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  variant: "primary",
  endIcon: (
    <Image priority src={PaperPlane} height={25} width={25} alt="plane" />
  ),
  disabled: true,
};
