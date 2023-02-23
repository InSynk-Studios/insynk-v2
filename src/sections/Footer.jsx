import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import ManWithCape from "@/assets/illustration/man_with_cape.svg";

export const Footer = () => {
  return (
    <section className="flex justify-between items-center px-40">
      <div className="flex flex-col gap-6">
        <Image src={Logo} alt="" />
        <h1 className="font-tanker-400 text-6xl w-2/3">build great products</h1>
        <p className="font-dmsans-400 text-xs w-2/3">
          GETINSYNK TECH PRIVATE LIMITED
          <br /> SOLUS Building, Office No. 1913Thane 400607, Maharashtra CIN:
          U72900MH2022PTC37695
        </p>
      </div>
      <div className="flex items-start">
        <Image src={ManWithCape} alt="" />
        <p className="font-caveat-400 text-xl -ml-20 w-44">
          Bringing out the best possible solutions in the most creative way
        </p>
      </div>
    </section>
  );
};
