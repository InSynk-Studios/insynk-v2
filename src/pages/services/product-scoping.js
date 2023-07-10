import Image from "next/image";
import { Breadcrumb, Timeline } from "@/components/Elements";
import ProductScopingSvg from "@/sections/servicesPage/product-scoping/assets/product_scoping.svg";
import ProductScopingIllustration from "@/sections/servicesPage/product-scoping/assets/product_scoping_illustration.svg";
import { productScopingData } from "@/sections/servicesPage";

const paragraphStyles =
  "text-xs sm:text-lg font-dmsans-400 tracking-[-0.27px] space-y-4 lg:space-y-6 leading-5 sm:leading-[27px]";

export default function ProductScoping() {
  return (
    <div className="flex flex-col w-full mt-36 sm:mt-[155px] justify-center items-center mb-11 sm:mb-16 lg:mb-32">
      <Breadcrumb />
      <div className="mt-16 flex flex-col items-center justify-center mx-5 sm:mx-9 lg:mx-0 max-w-full lg:max-w-[1000px] 2xl:max-w-[1250px]">
        <Image src={ProductScopingSvg} className="w-64 sm:w-72" alt="" />
        <Image
          src={ProductScopingIllustration}
          className="mb-8 mt-16 h-52 sm:h-full"
          alt=""
        />
        <div className={`sm:mx-16 ${paragraphStyles}`}>
          <p>
            As a team of engineers and creative designers, we know the
            importance of planning and preparation. Just like you wouldn&apos;t
            build a house without a blueprint, you shouldn&apos;t launch a
            software product without a solid product scope.
          </p>
          <p>
            We believe that product scoping is a critical part of the
            development process, and it&apos;s an area where we excel because of
            our prior experience of working with tech startups.
          </p>
          <p>
            Product scoping is the process of defining the features,
            requirements, and goals of your software product. It&apos;s a
            crucial step in the product development process as it lays the
            foundation for everything that comes after.
          </p>
          <p>
            At InSynk Studios, we take a comprehensive approach to product
            scoping to ensure that every aspect of your product is defined in
            detail.
          </p>
        </div>
        <Timeline data={productScopingData} />
        <div className="grid grid-rows-1 lg:grid-cols-3 lg:gap-12 sm:mt-20">
          <h3 className="text-[40px] text-brand-secondary-100 font-tanker-400 hidden lg:flex leading-[50px]">
            Why is
            <br />
            product scoping
            <br />
            SO Essential?
          </h3>
          <h3 className="text-xl sm:text-[40px] text-brand-secondary-100 font-tanker-400 mb-6 lg:hidden flex sm:leading-[50px]">
            Why is product scoping SO Essential?
          </h3>
          <div className={`lg:col-span-2 ${paragraphStyles}`}>
            <p>
              As a team of engineers and creative designers, we know the
              importance of planning and preparation. Just like you
              wouldn&apos;t build a house without a blueprint, you
              shouldn&apos;t launch a software product without a solid product
              scope.
            </p>
            <p>
              We believe that product scoping is a critical part of the
              development process, and it&apos;s an area where we excel because
              of our prior experience of working with tech startups.
            </p>
            <p>
              Product scoping is the process of defining the features,
              requirements, and goals of your software product. It&apos;s a
              crucial step in the product development process as it lays the
              foundation for everything that comes after.
            </p>
            <p>
              At InSynk Studios, we take a comprehensive approach to product
              scoping to ensure that every aspect of your product is defined in
              detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
