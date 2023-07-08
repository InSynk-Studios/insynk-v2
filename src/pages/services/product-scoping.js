import Image from "next/image";
import { Breadcrumb, Timeline } from "@/components/Elements";
import ProductScopingSvg from "@/assets/illustration/servicesPage/product_scoping.svg";
import ProductScopingIllustration from "@/sections/servicesPage/product-scoping/assets/product_scoping_illustration.svg";
import { productScopingData } from "@/sections/servicesPage/product-scoping/productScopingData";

const paragraphStyles = "font-dmsans-400 text-lg tracking-[-0.27px] space-y-6";

export default function ProductScoping() {
  return (
    <div className="flex flex-col w-full mt-36 sm:mt-[155px] justify-center items-center mb-24 sm:mb-16 lg:mb-0">
      <Breadcrumb />
      <div className="mt-16 flex flex-col items-center justify-center mx-5 sm:mx-0 max-w-[500px] lg:max-w-[1000px] 2xl:max-w-[950px]">
        <Image src={ProductScopingSvg} alt="" />
        <Image src={ProductScopingIllustration} className="mb-8 mt-16" alt="" />
        <div className={`mx-16 ${paragraphStyles}`}>
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
        <div className="grid grid-cols-3 gap-12">
          <div className="text-[40px] text-brand-secondary-100 font-tanker-400">
            <h3>Why is</h3>
            <h3>product scoping</h3>
            <h3>SO Essential?</h3>
          </div>
          <div className={`col-span-2 ${paragraphStyles}`}>
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
