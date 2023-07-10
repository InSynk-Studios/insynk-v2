import Image from "next/image";
import { Breadcrumb, Timeline } from "@/components/Elements";
import DesignPageIllustration from "@/sections/servicesPage/designs/assets/designPageIllustration.svg";
import DesignPageTitle from "@/sections/servicesPage/designs/assets/designPageTitle.svg";
import { designsPageData } from "@/sections/servicesPage";
import { twMerge } from "tailwind-merge";

const paragraphStyles =
  "text-xs sm:text-lg font-dmsans-400 tracking-[-0.27px] space-y-4 lg:space-y-6 leading-5 sm:leading-[27px]";

export default function Designs() {
  return (
    <div className="flex flex-col w-full mt-36 sm:mt-[155px] justify-center items-center">
      <Breadcrumb />
      <div className="mt-16 flex flex-col items-center justify-center mx-5 sm:mx-9 lg:mx-0 max-w-full lg:max-w-[1000px] 2xl:max-w-[1250px]">
        <Image src={DesignPageTitle} className="w-32 sm:w-48" alt="" />
        <Image
          src={DesignPageIllustration}
          className="mb-8 mt-16 h-52 sm:h-full"
          alt=""
        />
        <div
          className={twMerge(
            paragraphStyles,
            `sm:mx-16 lg:mx-32 space-y-0 lg:space-y-0`
          )}
        >
          <p>
            Hey, we value your curiosity to know our product design process, so
            let&apos;s get started :) We believe that a well-designed software
            product can differentiate itself in a crowded market, and it can be
            the key to success.
          </p>
          <p>
            So now, let&apos;s take a closer look at our product designing
            process.
          </p>
        </div>
        <Timeline data={designsPageData} contentWrapperClassName="mb-20 sm:mb-40" />
      </div>
    </div>
  );
}
