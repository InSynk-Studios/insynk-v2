import React from "react";
import { Carousel } from "@/components/Elements";
import GirlDoingYoga from "@/assets/illustration/carouselCard/girl_doing_yoga.svg";
import LadyRushing from "@/assets/illustration/carouselCard/lady_rushing.svg";
import TeamWork from "@/assets/illustration/carouselCard/team_work.svg";
import ConceptOfResearch from "@/assets/illustration/carouselCard/concept_of_research.svg";
import TeamBuilding from "@/assets/illustration/carouselCard/team_building.svg";

export const CarouselData = [
  {
    id: 1,
    name: "be flexible to changes",
    image: GirlDoingYoga,
    cardColor: "bg-brand-background-500",
    description:
      "User behaviors can change rapidly while building a new product. New insights are found out everyday. It is crucial that we adapt to these changes quickly.",
  },
  {
    id: 2,
    name: "bias for action",
    image: LadyRushing,
    cardColor: "bg-brand-background-600",
    description:
      "We are fast executioners who believe that having an bias for action goes a long way when building out new products which have to be changed quickly in each iteration.",
  },
  {
    id: 3,
    name: "being builders not business machines",
    image: TeamWork,
    cardColor: "bg-brand-background-700",
    description:
      "We tend to go the extra mile and build relationships which we believe in. Much more than just a transaction.",
  },
  {
    id: 4,
    name: "have fun while building",
    image: ConceptOfResearch,
    cardColor: "bg-brand-background-800",
    description:
      "Last but not the least, we are the most fun folks to work with. We simply enjoy building something cool with cool people!  ",
  },
  {
    id: 5,
    name: "Becoming obsessed with the craft",
    image: TeamBuilding,
    cardColor: "bg-brand-background-800",
    description:
      "We like to be extremely detail-oriented with whatever we build. Chasing perfection is something we always do at InSynk. ",
  },
];

export const Principles = () => {
  return (
    <section className="flex flex-col justify-start items-center mt-32 w-3/4">
      <div className="grid grid-rows-2 sm:grid-cols-2 w-2/3">
        <h1 className="font-tanker-400 text-4xl leading-10 tracking-tighter w-2/3">
          set of principles which we live by
        </h1>
        <p className="font-dmsans-400 font-normal">
          At InSynk, we follow a strong set of principles which guide us to who
          we are, what we aspire to do in the future and what{" "}
          <strong>makes working with us special.</strong>
        </p>
      </div>
      <Carousel CarouselData={CarouselData} />
    </section>
  );
};
