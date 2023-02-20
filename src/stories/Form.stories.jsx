import * as React from "react";

import { Button } from "@/components/Elements";

import { Form } from "@/components/Form/Form";
import { Input } from "@/components/Elements";
import { Textarea } from "@/components/Elements";

const MyForm = ({ hideSubmit = false }) => {
  return (
    <Form
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
      id="my-form"
    >
      {({ register, formState }) => (
        <>
          <Input
            border="dashed"
            className=" font-caveat-700 text-xl"
            error={formState.errors["title"]}
            registration={register("title")}
          />
          <Textarea
            border="dashed"
            rows={1}
            className=" font-caveat-700 text-xl w-1/2"
            error={formState.errors["description"]}
            registration={register("description")}
          />

          {!hideSubmit && (
            <div>
              <Button
                type="submit"
                variant="sketch"
                isSketch={true}
                size="sm"
                sketchFrontColor="bg-brand-primary-200"
              >
                Submit
              </Button>
            </div>
          )}
        </>
      )}
    </Form>
  );
};

const meta = {
  title: "Components/Form",
  component: MyForm,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = () => <MyForm />;

export const Default = Template.bind({});
Default.args = {};
