import { Input } from "@/components/Elements";

const meta = {
  title: "Components/Elements/Input",
  component: Input,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (props) => <Input {...props} />;

export const Regular = Template.bind({});
Regular.args = {
  label: "Input",
  name: "email",
  placeholder: "Placeholder",
  disabled: false,
  type: "text",
};
export const Placeholder = Template.bind({});
Placeholder.args = { placeholder: "Enter text here" };

export const Label = Template.bind({});
Label.args = { label: "Name" };

export const Error = Template.bind({});
Error.args = { label: "Username", error: "Invalid username!" };

export const Disabled = Template.bind({});
Disabled.args = { lable: "Email", disabled: true };

export const Size = Template.bind({});
Size.args = { size: "lg", type: "search" };

export const Border = Template.bind({});
Border.args = { size: "lg", type: "text", border: "dashed" };
