import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { workData } from "./workData";
import ArrowBold from "@/assets/icons/arrow_bold.svg";

export default function Work({ posts }) {
  return (
    <main className="flex flex-col w-full mt-36 sm:mt-[185px] justify-center items-center mb-10 sm:mb-0">
      <div className="flex flex-col justify-between gap-9 w-full items-center">
        <span className="flex flex-col justify-center items-center text-center gap-2">
          <h1 className="text-5xl lg:text-[64px] font-recoleta-500 leading-[65px] text-brand-secondary-200">
            Case Studies
          </h1>
          <p className="font-dmsans-400 text-sm sm:text-base leading-6 tracking-[-0.015em] sm:w-3/5">
            We help founders and teams with the craziest world-changing vision
            to build out their ideas to disruptive products with our technical
            expertise.
          </p>
        </span>
        <div className="w-full overflow-x-hidden">
          <div className="-mx-12 sm:-mx-96 flex flex-row justify-center items-center gap-4 bg-white mb-[70px]">
            {workData?.map((item) => (
              <div key={item.id} className="inline-block h-full">
                <Image priority src={item.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {posts.map((post, index) => (
        <div key={index} className="w-full">
          <div
            className={`flex flex-col ${
              index === 1
                ? "bg-brand-background-500 sm:card-flip"
                : "sm:flex-row"
            } bg-brand-background-300 sm:gap-3 w-full h-full`}
          >
            <div className="grid grid-rows-2 gap-3 lg:gap-5 place-self-center sm:gap-3 w-full p-5 sm:py-[90px] sm:pr-[106px] sm:pl-16">
              <span className="w-fit">
                <Image
                  src={post.frontMatter.image}
                  priority
                  className=""
                  width={590}
                  height={200}
                  alt=""
                />
              </span>
              <div className="flex flex-row gap-3 lg:gap-5 h-fit">
                <span>
                  <Image
                    src={post.frontMatter.image3}
                    priority
                    width={260}
                    height={150}
                    alt=""
                  />
                </span>
                <span className="h-full">
                  <Image
                    src={post.frontMatter.image2}
                    priority
                    width={310}
                    height={800}
                    alt=""
                  />
                </span>
              </div>
            </div>

            <div
              className={`w-full ${
                index / 2 ? "sm:ml-12" : "sm:mr-12"
              } sm:my-[90px] px-5 sm:px-0 mb-5 sm:mb-0`}
            >
              <div className="flex flex-row items-center mb-3 gap-1">
                <span className="relative w-16 sm:w-20 h-8">
                  <Image src={post.frontMatter.logo} fill alt="" />
                </span>
                <h3 className="font-dmsans-500 text-xs leading-[21px] tracking-[-0.015em]">
                  {post.frontMatter.organizationDetail}
                </h3>
              </div>
              <h1 className="text-2xl sm:text-5xl font-recoleta-500 w-fit sm:w-4/5 mb-[34px] leading-9 sm:leading-[65px] tracking-[-0.015em]">
                {post.frontMatter.title}
              </h1>
              {post.frontMatter.about?.map((item) => (
                <p
                  key={item.id}
                  className="font-dmsans-400 text-sm mb-2 leading-[21px] w-4/5 tracking-[-0.015em]"
                >
                  ● {item}
                </p>
              ))}
              <div className="w-fit mt-10">
                <Link
                  href={"/work/" + post.slug}
                  className="relative work-card-button pb-2 overflow-hidden flex justify-start items-center gap-2 font-dmsans-700 text-brand-secondary-200 sm:text-xl leading-6 tracking-[-0.015em] hover:cursor-pointer h-fit"
                >
                  <span class="absolute inset-x-0 h-1 bottom-0 bg-brand-primary-400"></span>
                  {post.frontMatter.link}
                  <Image
                    src={ArrowBold}
                    className="hover:cursor-pointer"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("work"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("work", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};
