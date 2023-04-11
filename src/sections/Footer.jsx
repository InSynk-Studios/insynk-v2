import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import ManWithCape from "@/assets/illustration/man_with_cape.svg";

export const Footer = () => {
  return (
    <footer className="flex justify-center bg-brand-background-200 sm:h-[543px] items-center">
      <div className="grid grid-cols-1 place-content-between mt-12 sm:mt-0 px-5 sm:px-0 sm:grid-cols-2 3xl:gap-x-40">
        <div className="flex flex-col gap-6 justify-center">
          <Image src={Logo} alt="" width={94} height={40} />
          <h1 className="font-recoleta-500 text-5xl md:text-[64px] w-5/6 xl:w-4/6">
            build great products
          </h1>
          <p className="font-dmsans-400 text-xs">
            GETINSYNK TECH PRIVATE LIMITED
            <br /> SOLUS Building, Office No. 1913Thane 400607, Maharashtra{" "}
            <br />
            CIN: U72900MH2022PTC37695
          </p>
        </div>
        <div className="flex items-start justify-end">
          <Image src={ManWithCape} alt="" />
          <p className="font-caveat-400 leading-5 text-sm md:text-xl -ml-32 sm:-ml-36 w-36 sm:w-44">
            Bringing out the best possible solutions in the most creative way
          </p>
        </div>
      </div>
    </footer>
  );
};
