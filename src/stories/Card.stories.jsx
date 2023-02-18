import { Card } from "@/components/Elements/Card/Card";

const meta = {
  title: "Components/Elements/Card",
  component: Card,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (props) => <Card {...props}>Hello</Card>;

export const Regular = Template.bind({});
Regular.args = {};
