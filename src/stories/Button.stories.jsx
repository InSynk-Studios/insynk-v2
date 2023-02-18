import { Button } from "../components/Elements/Button/Button";

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
  // startIcon: <Plus />,
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  children: "End Icon Button",
  variant: "danger",
  // endIcon: <Plus />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  variant: "primary",
  // endIcon: <Plus />,
  disabled: true,
};
