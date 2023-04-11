import React from "react";
import Image from "next/image";
import * as z from "zod";

import { Button, Input, Textarea } from "@/components/Elements";
import { Form } from "@/components/Form/Form";

import FormBulb from "@/assets/illustration/form_bulb.svg";
import PaperPlane from "@/assets/icons/paper_plane.svg";

const schema = z.object({
  name: z.string().min(1, "Required"),
  email: z.string().min(1, "Required"),
  description: z.string().min(1, "Required"),
});

const formStyles =
  "absolute flex justify-start items-start text-left font-caveat-700 text-2xl left-11 md:left-32";

export const Contact = ({ hideSubmit = false }) => {
  const confirmHandler = (values) => {
    fetch("https://formsubmit.co/ajax/support@insynkstudios.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.description,
      }),
    }).then((response) => {});
  };

  return (
    <section
      id="ContactForm"
      className="flex relative justify-start items-center gap-12 text-center -mb-14 xl:-mb-40 3xl:-mb-36 4xl:-mb-24 w-11/12 h-screen"
    >
      <Form
        onSubmit={async (values) => {
          confirmHandler(values);
        }}
        schema={schema}
      >
        {({ register, formState }) => (
          <>
            <div className="flex justify-between items-start text-left left-11 md:left-32 top-0 absolute w-5/6">
              <h1 className="text-base md:text-xl font-caveat-700 text-brand-primary-600 mt-12">
                Looking for a passionate team to work with?
                <br />
                <span className="text-3xl md:text-5xl">
                  Write to us your craziest ideas!
                </span>
              </h1>
              <span className="flex flex-col justify-center items-center mt-20">
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
                className="bg-transparent mt-0.5 h-7 w-52 p-0"
                placeholder="Name"
                error={formState.errors["name"]}
                registration={register("name")}
              />
              {","}
            </span>
            <span className={`${formStyles} flex-col gap-2 mt-1 top-72 w-4/5`}>
              <p>
                and I have this insane idea that I want to work upon. Here’s the
                gist of the idea
              </p>
              <Textarea
                placeholder="About what you’re building in brief"
                wrapperClassName="w-full"
                rows={3}
                className="w-full overflow-hidden border-none underline decoration-dashed resize-none bg-transparent underline-offset-8"
                error={formState.errors["description"]}
                registration={register("description")}
              />
            </span>
            <span className={`${formStyles} gap-2 bottom-44 w-2/4`}>
              <p className="w-40">Contact me at</p>
              <Input
                border="dashed"
                size="full"
                wrapperClassName="w-full"
                type="email"
                className="bg-transparent h-7 p-0"
                placeholder="Email"
                error={formState.errors["email"]}
                registration={register("email")}
              />
              {"."}
            </span>
            <span className={`${formStyles} bottom-36 -mb-1`}>
              <p>Let’s build it out to perfection!</p>
            </span>

            {!hideSubmit && (
              <div className={`${formStyles} bottom-16 mt-12`}>
                <Button
                  type="submit"
                  variant="none"
                  isSketch={true}
                  size="md"
                  sketchFrontColor="bg-brand-primary-200"
                  className="uppercase"
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
