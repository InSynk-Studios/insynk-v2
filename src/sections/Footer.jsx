import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import ManWithCape from "@/assets/illustration/man_with_cape.svg";

export const Footer = () => {
  return (
    <section className="grid grid-cols-1 place-content-between mt-16 sm:grid-cols-2 items-center px-12 lg:px-40 2xl:px-46">
      <div className="flex flex-col gap-6">
        <Image src={Logo} alt="" />
        <h1 className="font-tanker-400 text-5xl md:text-6xl w-5/6 2xl:w-2/4">
          build great products
        </h1>
        <p className="font-dmsans-400 text-xs">
          GETINSYNK TECH PRIVATE LIMITED
          <br /> SOLUS Building, Office No. 1913Thane 400607, Maharashtra <br />
          CIN: U72900MH2022PTC37695
        </p>
      </div>
      <div className="flex items-start justify-end">
        <Image src={ManWithCape} alt="" />
        <p className="font-caveat-400 leading-5 text-sm md:text-xl -ml-32 sm:-ml-36 w-36 sm:w-44">
          Bringing out the best possible solutions in the most creative way
        </p>
      </div>
    </section>
  );
};
