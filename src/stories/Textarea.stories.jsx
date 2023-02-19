import { Textarea } from "@/components/Elements";

const meta = {
  title: "Components/Elements/Textarea",
  component: Textarea,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (props) => <Textarea {...props} />;

export const Regular = Template.bind({});
Regular.args = {
  label: "Description",
  rows: 4,
  placeholder: "Placeholder",
  error: "",
  disabled: false,
  defaultValue: "Hello world",
};

export const Placeholder = Template.bind({});
Placeholder.args = { placeholder: "Enter text here" };

export const Label = Template.bind({});
Label.args = { label: "Description" };

export const Rows = Template.bind({});
Rows.args = { label: "Description", rows: 8 };

export const Error = Template.bind({});
Error.args = {
  label: "Tell us something about yourself",
  error: "Invalid Description!",
};

export const Border = Template.bind({});
Border.args = { type: "text", border: "dashed" };

export const Disabled = Template.bind({});
Disabled.args = { lable: "Description", disabled: true };
