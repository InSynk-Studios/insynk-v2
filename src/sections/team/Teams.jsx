import React from "react";
import Image from "next/image";
import { TeamList, FounderList } from "./TeamData";
import CurlyLine from "@/assets/illustration/curly_line.svg";
import TeamTopLines from "@/assets/illustration/team_top_lines.svg";
import CurvedLine from "@/assets/illustration/curved_line_team.svg";

export const Teams = () => {
  return (
    <section className="relative flex flex-col justify-start items-center gap-12 text-center mt-44 w-full">
      <Image
        priority
        src={CurvedLine}
        className="w-full absolute top-0"
        alt=""
      />
      <div className="flex flex-col items-center mt-32">
        <h1 className="flex items-start justify-center w-full font-tanker-400 font-normal text-4xl text-brand-primary-400">
          the team
          <Image priority src={TeamTopLines} alt="" />
        </h1>
        <Image priority src={CurlyLine} alt="" />
        <p className="font-dmsans-400 font-normal text-xl leading-7 tracking-tight text-brand-primary-400">
          Working tirelessly to bring visions into reality
        </p>
      </div>
      <div className="grid grid-rows-1 mt-14 sm:grid-cols-3 w-5/6">
        {TeamList.map((member) => (
          <div
            key={member.name}
            className="space-y-5 flex flex-col items-center"
          >
            <Image priority src={member.image} alt="" />
            <h2 className="font-dmsans-400 text-xs leading-4 inline-block tracking-[0.185em]">
              {member.name}
            </h2>
            <h2 className="font-caveat-400 text-xl leading-5 mx-5 w-4/6">
              {member.quote}
            </h2>
            <p className="font-dmsans-400 text-left text-base leading-6 mx-5 w-4/6 tracking-[-0.015em]">
              {member.about}
            </p>
            <Image
              priority
              src={member.signature}
              className="place-self-start mx-12"
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="grid grid-rows-1 sm:grid-cols-2 gap-5 mt-28 w-5/6">
        {FounderList.map((founder) => (
          <div
            key={founder.name}
            className="space-y-5 flex flex-col items-center"
          >
            <Image priority src={founder.image} alt="" />
            <h2 className="font-dmsans-400 text-xs leading-4 inline-block tracking-[0.185em]">
              {founder.name}
            </h2>
            <h2 className="font-caveat-400 text-[22.351px] leading-[22px] mx-5 w-5/6">
              {founder.quote}
            </h2>
            <p className="font-dmsans-400 text-left text-base leading-6 mx-5 w-5/6 tracking-[-0.015em]">
              {founder.about}
            </p>
            <Image
              priority
              src={founder.signature}
              className="place-self-start mx-20"
              alt=""
            />
          </div>
        ))}
      </div>
      <span className="font-caveat-700 text-xl">
        And 5 more hard working people...
      </span>
    </section>
  );
};
