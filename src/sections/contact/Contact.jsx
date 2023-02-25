import React from "react";
import Image from "next/image";
import * as z from "zod";

import { Button } from "@/components/Elements";
import { Form } from "@/components/Form/Form";
import { Input } from "@/components/Elements";

import FormBulb from "@/assets/illustration/form_bulb.svg";
import PaperPlane from "@/assets/icons/paper_plane.svg";

const schema = z.object({
  name: z.string().min(1, "Required"),
  email: z.string().min(1, "Required"),
  // description1: z.string().min(1, "Required"),
  description2: z.string().min(1, "Required"),
});

const formStyles =
  "absolute flex justify-start items-start text-left font-caveat-700 text-xl left-11 md:left-24";

export const Contact = ({ hideSubmit = false }) => {
  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  };
  const MyInput = (props) => {
    return (
      <Input
        onKeyDown={handleEnter}
        border="dashed"
        maxLength={170}
        size="full"
        wrapperClassName="w-full"
        type="text"
        className="bg-transparent h-5 p-0"
        placeholder={props.placeholder}
        error={props.formState.errors[props.description]}
        registration={props.register(props.description)}
      />
    );
  };
  return (
    <section
      id="ContactForm"
      className="flex relative justify-start items-center gap-12 text-center mt-32 w-11/12 xl:w-4/5 h-screen"
    >
      <Form
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        schema={schema}
      >
        {({ register, formState }) => (
          <>
            <div className="flex justify-between items-start text-left left-11 md:left-24 top-0 absolute w-5/6">
              <h1 className="text-base md:text-xl font-caveat-700 mt-4">
                Looking for a passionate team to work with?
                <br />
                <span className="text-3xl md:text-5xl">
                  Write to us your craziest ideas!
                </span>
              </h1>
              <span className="flex flex-col justify-center items-center mt-14">
                <Image src={FormBulb} width={55} height={55} alt="" />
                <p className="font-caveat-400 text-center leading-7 tracking-tight text-base md:text-xl w-3/4">
                  This is where great ideas are executed
                </p>
              </span>
            </div>
            <br />
            <h2 className="text font-caveat-700 text-left text-base md:text-xl">
              Hi Team InSynk,
            </h2>
            <br />
            <span className={`${formStyles} gap-2 top-56`}>
              <p>I am</p>
              <Input
                border="dashed"
                size="full"
                type="text"
                className="bg-transparent h-5 w-52 p-0"
                placeholder="Name"
                error={formState.errors["name"]}
                registration={register("name")}
              />
              {","}
            </span>
            <span className={`${formStyles} flex-col top-64 w-4/5`}>
              <p>
                and I have this insane idea that I want to work upon. Here’s the
                gist of the idea
              </p>
              <MyInput
                placeholder="About what you’re building in brief"
                formState={formState}
                register={register}
                description={"description1"}
              />
              <MyInput
                placeholder=""
                formState={formState}
                register={register}
                description={"description2"}
              />
            </span>
            <span className={`${formStyles} gap-2 mt-3 top-80 w-4/5`}>
              <p>Contact me at</p>
              <Input
                border="dashed"
                // size="xl"
                type="email"
                className="bg-transparent w-full h-5 p-0"
                placeholder="Email"
                error={formState.errors["email"]}
                registration={register("email")}
              />
              {"."}
            </span>
            <span className={`${formStyles} gap-2 mt-16 top-80 w-4/5`}>
              <p>Let’s build it out to perfection!</p>
            </span>

            {!hideSubmit && (
              <div className={`${formStyles} top-96 mt-12`}>
                <Button
                  type="submit"
                  variant="sketch"
                  isSketch={true}
                  size="sm"
                  sketchFrontColor="bg-brand-primary-200"
                  className="uppercase w-44 h-10 text-xs"
                  endIcon={
                    <Image
                      priority
                      src={PaperPlane}
                      height={25}
                      width={25}
                      alt="plane"
                    />
                  }
                >
                  Send message
                </Button>
              </div>
            )}
          </>
        )}
      </Form>
    </section>
  );
};
