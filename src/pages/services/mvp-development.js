import Image from "next/image";
import { Breadcrumb, Timeline } from "@/components/Elements";
import MvpPageIllustration from "@/sections/servicesPage/mvp-development/assets/mvpPageIllustration.svg";
import MvpPageTitle from "@/sections/servicesPage/mvp-development/assets/mvpPageTitle.svg";
import { mvpDevelopmentPageData } from "@/sections/servicesPage";

const titleStyles =
  "text-4xl lg:text-5xl text-brand-secondary-100 font-tanker-400";

const paragraphStyles =
  "font-dmsans-400 font-normal text-base lg:text-lg tracking-[-0.27px] space-y-4 lg:space-y-6 leading-[27px]";

export default function MvpDevelopment() {
  return (
    <div className="flex flex-col w-full mt-36 sm:mt-[155px] justify-center items-center">
      <Breadcrumb />
      <div className="mt-16 flex flex-col items-center justify-center mx-5 sm:mx-9 lg:mx-0 max-w-full lg:max-w-[1150px] 2xl:max-w-[1250px]">
        <Image src={MvpPageTitle} className="w-60 sm:w-72" alt="" />
        <Image
          src={MvpPageIllustration}
          className="mb-8 mt-16 h-52 sm:h-full"
          alt=""
        />
        <div className={`${paragraphStyles} sm:mx-10 lg:mx-32`}>
          <p>
            Hey, today, people want to try out products quickly, so, why not
            your products should be developed quickly, efficiently, and most
            importantly, effectively.
          </p>
          <p>
            At InSynk Studios, we understand the importance of building an MVP
            for your product, and we take great pride in helping our clients
            successfully develop their products using the approach mentioned
            below.
          </p>
          <p>
            Let’s take a closer look at our MVP development process and see why
            it has become such an integral part of our software development
            process.
          </p>
        </div>

        <div className="space-y-[120px] mt-[115px]">
          <div className="grid grid-rows-1 sm:grid-cols-3 gap-5 sm:gap-12">
            <h2 className={`${titleStyles} text-center sm:text-left`}>
              WHAT IS an mvp?
            </h2>
            <div
              className={`sm:col-span-2 sm:w-[97%] sm:place-self-end ${paragraphStyles}`}
            >
              <p>
                An MVP is a product that has just enough features to satisfy its
                initial users and gather valuable feedback for future
                development.
              </p>
              <p>
                The idea behind MVP is to create a product that can be built and
                launched quickly, with minimal investment, while still being
                able to solve a real-world problem.
              </p>
              <p>
                Obviously an MVP is not a final product but it’s a starting
                point for development that can be continually improved and
                enhanced over time.
              </p>
            </div>
          </div>
          <div className="grid grid-rows-1 sm:grid-cols-3 gap-5 sm:gap-0">
            <h2 className={`${titleStyles} text-center sm:text-left`}>
              Why to build an MVP?
            </h2>
            <div
              className={`sm:col-span-2 sm:w-[97%] sm:place-self-end ${paragraphStyles}`}
            >
              <p>
                Building an MVP offers several benefits. Firstly, it helps to
                reduce the risk of product failure. By testing the MVP with real
                users, you can obtain feedback, identify potential issues, and
                make informed decisions about the product&apos;s development.
              </p>
              <p>
                This feedback is invaluable as it allows you to make informed
                decisions about the product&apos;s future direction, avoiding
                costly mistakes down the line.
              </p>
              <p>
                Secondly, MVPs can be built quickly and with minimal investment.
                This approach is particularly useful for startups or businesses
                with limited resources looking to validate their ideas before
                investing in a fully-featured product.
              </p>
              <p>
                Lastly, MVPs can help businesses to gain a competitive edge by
                getting their product to market faster than their competitors.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center mt-36 text-center">
          <h2 className={titleStyles}>
            Now let’s have a look at how we develop an MVP
          </h2>
          <p className={`${paragraphStyles} w-11/12 lg:w-3/5`}>
            At InSynk Studios, we believe that successful MVP development
            requires careful planning and execution. Our process is based on the
            following simple steps:
          </p>
        </div>
        <Timeline data={mvpDevelopmentPageData} />
      </div>
    </div>
  );
}
