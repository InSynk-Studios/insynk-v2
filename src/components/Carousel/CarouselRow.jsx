import React from "react";
import { Card } from "../Elements";

const CarouselData = [
  {
    id: 1,
    name: "be flexible to changes",
    cardColor: "bg-brand-primary-200",
    description:
      "User behaviors can change rapidly while building a new product. New insights are found out everyday. It is crucial that we adapt to these changes quickly.",
  },
  {
    id: 2,
    name: "some",
    description:
      "User behaviors can change rapidly while building a new product. New insights are found out everyday. It is crucial that we adapt to these changes quickly.",
  },
  {
    id: 3,
    name: "some",
    description:
      "User behaviors can change rapidly while building a new product. New insights are found out everyday. It is crucial that we adapt to these changes quickly.",
  },
  {
    id: 4,
    name: "some",
    description:
      "User behaviors can change rapidly while building a new product. New insights are found out everyday. It is crucial that we adapt to these changes quickly.",
  },
  {
    id: 5,
    name: "some",
    description:
      "User behaviors can change rapidly while building a new product. New insights are found out everyday. It is crucial that we adapt to these changes quickly.",
  },
  {
    id: 6,
    name: "some",
    description:
      "User behaviors can change rapidly while building a new product. New insights are found out everyday. It is crucial that we adapt to these changes quickly.",
  },
  {
    id: 7,
    name: "some",
    description:
      "User behaviors can change rapidly while building a new product. New insights are found out everyday. It is crucial that we adapt to these changes quickly.",
  },
];

export const CarouselRow = () => {
  return (
    <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-4">
      {CarouselData?.map((item, index) => (
        <Card
          key={item.id}
          title={item.name}
          cardTitleClass="border-b-2 border-black px-2 pt-3"
          cardFrontClass={item.cardColor}
          className="w-96 h-96"
        >
          <p>{item.description}</p>
        </Card>
      ))}
    </div>
  );
};
