import React from "react";
import Image from "next/image";
import * as z from "zod";
import { useInputFields } from "@/hooks/useInputFields";

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
  "absolute flex justify-start items-start text-left font-caveat-700 text-2xl left-11 md:left-32";

export const Contact = ({ hideSubmit = false }) => {
  const { handleChange, showInput } = useInputFields();

  return (
    <section
      id="ContactForm"
      className="flex relative justify-start items-center gap-12 text-center mt-32 -mb-16 xl:-mb-36 3xl:-mb-32 4xl:-mb-20 w-11/12 h-screen"
    >
      <Form
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
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
              <Input
                name="input-1"
                onChange={handleChange}
                border="dashed"
                maxLength={110}
                size="full"
                wrapperClassName="w-full"
                type="text"
                className="bg-transparent h-7 p-0"
                placeholder="About what you’re building in brief"
                // error={formState.errors["description1"]}
                // registration={register("description1")}
              />
              {showInput && (
                <>
                  <Input
                    name="input-2"
                    onChange={handleChange}
                    border="dashed"
                    maxLength={110}
                    size="full"
                    wrapperClassName="w-full"
                    type="text"
                    className="bg-transparent -mb-1 h-7 p-0"
                    placeholder=""
                    // error={formState.errors["description1"]}
                    // registration={register("description1")}
                  />
                  <Input
                    name="input-3"
                    onChange={handleChange}
                    border="dashed"
                    maxLength={110}
                    size="full"
                    wrapperClassName="w-full"
                    type="text"
                    className="bg-transparent mt-1 h-7 p-0"
                    placeholder=""
                    // error={formState.errors["description1"]}
                    // registration={register("description1")}
                  />
                </>
              )}
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
                  variant="sketch"
                  isSketch={true}
                  size="lg"
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
