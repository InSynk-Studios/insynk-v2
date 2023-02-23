import React from "react";
import Image from "next/image";
import CurlyLine from "@/assets/illustration/curly_line.svg";
import TeamTopLines from "@/assets/illustration/team_top_lines.svg";
import CurvedLine from "@/assets/illustration/curved_line_team.svg";
import Aman from "@/assets/illustration/team/aman_picture.svg";

export const team = [
  {
    id: 1,
    image: Aman,
    name: "Sneham pal, product designer",
    quote:
      "“I believe in building non-stop. Helping solve problems which have an impact ”",
    about:
      "User behaviors can change rapidly while building a new product. New insights are found out everyday. It is crucial that we adapt to these changes quickly.",
    signature: "",
  },
  {
    id: 2,
    image: Aman,
    name: "Manish jangir, front-end dev",
    quote:
      "“I believe in building non-stop. Helping solve problems which have an impact ”",
    about:
      "We are fast executioners who believe that having an bias for action goes a long way when building out new products which have to be changed quickly in each iteration.",
    signature: "",
  },
  {
    id: 3,
    image: Aman,
    name: "Sirjit modal, full-stack dev",
    quote:
      "“I believe in building non-stop. Helping solve problems which have an impact ”",
    about:
      "We tend to go the extra mile and build relationships which we believe in. Much more than just a transaction.",
    signature: "",
  },
  {
    id: 4,
    image: Aman,
    name: "Aman sharma, co-founder",
    quote:
      "“I believe in building non-stop. Helping solve problems which have an impact ”",
    about:
      "Last but not the least, we are the most fun folks to work with. We simply enjoy building something cool with cool people!  ",
    signature: "",
  },
  {
    id: 5,
    image: Aman,
    name: "Vishnu malviya, co-founder",
    quote:
      "“I believe in building non-stop. Helping solve problems which have an impact ”",
    about:
      "We like to be extremely detail-oriented with whatever we build. Chasing perfection is something we always do at InSynk. ",
    signature: "",
  },
];

export const Teams = () => {
  return (
    <section className="flex flex-col justify-start items-center gap-12 text-center mt-32 w-full">
      <Image priority src={CurvedLine} className="w-full" alt="" />
      <div className="flex flex-col items-center">
        <h1 className="flex items-start justify-center w-full font-tanker-400 font-normal text-4xl text-brand-primary-400">
          the team
          <Image priority src={TeamTopLines} alt="" />
        </h1>
        <Image priority src={CurlyLine} alt="" />
        <p className="font-dmsans-400 font-normal text-xl leading-7 tracking-tight text-brand-primary-400">
          Working tirelessly to bring visions into reality
        </p>
      </div>
      <div className="grid grid-rows-1 sm:grid-cols-3 gap-5 w-5/6">
        {team.map((member) => (
          <div key={member.name} className="space-y-2">
            <Image priority src={member.image} alt="" />
            <h2 className="font-dmsans-400 text-xs leading-4 inline-block tracking-widest">
              {member.name}
            </h2>
            <h2 className="font-caveat-400 text-xl leading-5 mx-5">
              {member.quote}
            </h2>
            <p className="font-dmsans-400 text-xs leading-4 mx-5 tracking-widest">
              {member.about}
            </p>
            <Image priority src={member.signature} alt="" />
          </div>
        ))}
      </div>
      <span className="font-caveat-700 text-xl">
        And 5 more hard working people...
      </span>
    </section>
  );
};
