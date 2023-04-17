import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import ManWithCape from "@/assets/illustration/man_with_cape.svg";

export const Footer = () => {
  return (
    <footer className="flex justify-center bg-brand-background-200 h-[543px] items-center">
      <div className="grid grid-cols-1 place-content-between pt-40 -mt-2 lg:mt-0 sm:pt-0 px-5 sm:grid-cols-2 3xl:gap-x-40">
        <div className="flex order-last sm:order-first mb-5 sm:mb-0 flex-col gap-6 justify-center">
          <span className="flex justify-center sm:hidden">
            <p className="font-caveat-400 leading-5 text-xl w-9/12">
              Bringing out the best possible solutions in the most creative way
            </p>
          </span>
          <Image src={Logo} alt="" width={94} height={40} />
          <h1 className="font-recoleta-500 text-5xl md:text-[64px] w-5/6 xl:w-4/6 hidden sm:block">
            build great products
          </h1>
          <p className="font-dmsans-400 text-xs">
            GETINSYNK TECH PRIVATE LIMITED
            <br /> SOLUS Building, Office No. 1913Thane 400607, Maharashtra{" "}
            <br />
            CIN: U72900MH2022PTC37695
          </p>
        </div>
        <h1 className="font-recoleta-500 text-[32px] flex justify-center md:text-[64px] sm:hidden">
          build great products
        </h1>
        <div className="flex items-start justify-end">
          <Image src={ManWithCape} alt="" />
          <p className="font-caveat-400 leading-5 text-sm md:text-xl -ml-32 sm:-ml-36 w-36 sm:w-44 hidden sm:block">
            Bringing out the best possible solutions in the most creative way
          </p>
        </div>
      </div>
    </footer>
  );
};
