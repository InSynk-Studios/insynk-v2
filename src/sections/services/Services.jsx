import React from "react";
import { Button, Card } from "@/components/Elements";
import Image from "next/image";
import ProductScoping from "@/assets/illustration/product_scoping.svg";

const service = [
  {
    id: 1,
    title: "product scoping",
    color: "bg-brand-background-300",
    image: ProductScoping,
    description:
      "While building a great product, its crucial to understand the root cause of a problem. We help teams understand these user stories at a fundamental level and discover opportunities to solve problems and scope out features which achieve the goal. ",
  },
  {
    id: 2,
    title: "hello",
    color: "bg-brand-background-400",
    // image: "bg-brand-background-400",
    description:
      "While building a great product, its crucial to understand the root cause of a problem. We help teams understand these user stories at a fundamental level and discover opportunities to solve problems and scope out features which achieve the goal. ",
  },
  {
    id: 3,
    title: "hello",
    color: "bg-brand-background-300",
    // image: "bg-brand-background-300",
    description:
      "While building a great product, its crucial to understand the root cause of a problem. We help teams understand these user stories at a fundamental level and discover opportunities to solve problems and scope out features which achieve the goal. ",
  },
  {
    id: 4,
    title: "hello",
    color: "bg-brand-background-400",
    // image: "bg-brand-background-400",
    description:
      "While building a great product, its crucial to understand the root cause of a problem. We help teams understand these user stories at a fundamental level and discover opportunities to solve problems and scope out features which achieve the goal. ",
  },
];

export const Services = () => {
  return (
    <section className="flex flex-col justify-start items-center gap-12 text-center mt-32 w-full bg-brand-background-200">
      <div className="mt-10">
        <h1 className="font-tanker-400 font-normal text-4xl text-brand-primary-400">
          How we help
        </h1>
        <p className="font-dmsans-400 font-normal text-xl leading-7 tracking-tight text-brand-primary-400">
          Our list of services
        </p>
      </div>
      <div className="w-2/3">
        {service.map((item, index) => (
          <Card
            key={index}
            cardBgColor={item.color}
            className="w-full h-96 mb-12 service-card-background"
          >
            <div className="flex items-center justify-between p-12">
              <Image priority src={item.image} alt="" />
              <div className="text-left w-2/3">
                <h1 className="font-tanker-400 font-normal text-5xl">
                  {item.title}
                </h1>
                <p className="h-fit my-5 font-dmsans-500 font-medium">
                  {item.description}
                </p>
                <Button
                  variant="sketch"
                  isSketch={true}
                  className="font-clashgrotesk-500"
                >
                  View more
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
