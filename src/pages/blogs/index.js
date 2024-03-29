import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/Elements";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ManReadingNewspaper from "@/assets/illustration/man_reading_newspaper.svg";

const tabs = [
  { id: 1, label: "Product" },
  { id: 2, label: "Design" },
  { id: 3, label: "Scoping" },
  { id: 4, label: "MVP" },
  { id: 5, label: "Developement" },
];

export default function Blogs({ posts }) {
  const [activeTab, setActiveTab] = useState(1);

  const nonFeaturedPosts = posts.filter((post) => !post.frontMatter.featured);

  const filteredContents =
    activeTab === 1
      ? nonFeaturedPosts
      : nonFeaturedPosts.filter((post) =>
          post.frontMatter.tag.find((tag) => tag === tabs[activeTab - 1].label)
        );

  const featuredPost = posts.filter(
    (post) => post.frontMatter.featured === true
  );

  return (
    <main className="flex flex-col mt-32 sm:mt-[185px] mb-32 justify-center items-center">
      <div className="flex flex-col sm:flex-row gap-8 lg:gap-0 justify-between items-center mx-5 lg:mx-0 lg:w-4/6">
        <span className="flex flex-col gap-2">
          <h1 className="text-4xl lg:text-5xl text-center sm:text-left font-recoleta-500 leading-[65px] text-brand-secondary-200">
            InSynk Blogs
          </h1>
          <p className="font-dmsans-400 text-center sm:text-left text-base leading-6 tracking-[-0.015em] sm:w-4/5">
            Insights, stories, guides and experiences in building from the
            InSynk team
          </p>
        </span>
        <Image src={ManReadingNewspaper} alt="" />
      </div>

      <div className="mx-5 lg:mx-0 lg:w-4/5">
        <div className="3xl:w-11/12 4xl:w-5/6 mx-auto">
          {/* Filter */}
          <div className="flex flex-col gap-4 justify-start mt-20 mb-10">
            <h2 className="font-dmsans-700 text-base leading-6 tracking-[-0.015em]">
              Categories
            </h2>
            <div className="flex flex-wrap justify-start gap-2 sm:gap-1">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-fit h-[26px] py-1 px-[10px] text-xs font-dmsans-500 font-medium tracking-[-0.015em] leading-[18px] rounded ${
                    activeTab === tab.id
                      ? "bg-brand-primary-200 text-brand-primary-300"
                      : "bg-brand-background-700 text-brand-secondary-500"
                  }`}
                >
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {activeTab === 1 &&
            featuredPost.map((post, index) => (
              <Link
                href={"/blogs/" + post.slug}
                passHref
                key={index}
                className="hover:cursor-pointer"
              >
                <div className="relative flex flex-col sm:flex-row hover:cursor-pointer gap-3 w-full h-[450px] xl:w-3/4 sm:h-[250px] md:h-[280px]">
                  <div className="relative w-full h-full">
                    <Image src={post.frontMatter.image} fill alt="" />
                  </div>

                  <div className="sm:w-11/12 relative">
                    <div className="flex flex-row gap-1">
                      {post.frontMatter.tag.map((tagName, index) => (
                        <h3
                          key={index}
                          className="font-dmsans-500 mb-1 text-brand-secondary-400 text-xs leading-[18px] tracking-[-0.015em]"
                        >
                          {index < 2 && tagName} {index <= 0 ? "●" : null}
                        </h3>
                      ))}
                    </div>
                    <h1 className="font-dmsans-700 text-lg mb-3 leading-[22px] tracking-[-0.015em]">
                      {post.frontMatter.title}
                    </h1>
                    <p className="font-dmsans-400 text-sm leading-[21px] tracking-[-0.015em]">
                      {post.frontMatter.description}
                    </p>
                    <div className="sm:absolute bottom-0 mt-3 sm:mt-0 flex flex-row w-full gap-3 lg:h-16">
                      <span className="relative w-12">
                        <Image src={post.frontMatter.authorImage} fill alt="" />
                      </span>
                      <span className="flex flex-col">
                        <p className="font-dmsans-500 text-brand-secondary-200 text-sm sm:text-base leading-6 tracking-[-0.015em]">
                          {post.frontMatter.author},
                        </p>
                        <p className="font-dmsans-400 text-brand-primary-600 text-sm sm:text-base leading-6 tracking-[-0.015em]">
                          {post.frontMatter.position}
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>

        <hr class="h-px my-20 bg-brand-primary-400 mx-auto border-0 3xl:w-11/12 4xl:w-5/6" />

        <div className="grid gap-x-8 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:w-11/12 4xl:w-5/6 mx-auto">
          {filteredContents.map((post, index) => (
            <Link
              href={"/blogs/" + post.slug}
              passHref
              key={index}
              className="hover:cursor-pointer h-5/6"
            >
              <div className="relative inline-block hover:cursor-pointer mb-20 gap-3 w-full h-[350px] lg:h-[480px]">
                <div className="relative w-full h-5/6 lg:h-[225px] lg:mb-3">
                  <Image
                    src={post.frontMatter.image}
                    className="hover:cursor-pointer"
                    fill
                    alt=""
                  />
                </div>
                <div className="flex flex-row gap-1 hover:cursor-pointer">
                  {post.frontMatter.tag.map((tagName, key) => (
                    <h3
                      key={key}
                      className="font-dmsans-500 mb-1 text-brand-secondary-400 text-xs leading-[18px] tracking-[-0.015em] hover:cursor-pointer"
                    >
                      {key < 2 && tagName} {key <= 0 && "●"}
                    </h3>
                  ))}
                </div>
                <h1 className="font-dmsans-700 text-lg mb-2 leading-[22px] tracking-[-0.015em] hover:cursor-pointer">
                  {post.frontMatter.title}
                </h1>
                <p className="font-dmsans-400 text-sm lg:mb-[51px] leading-[21px] tracking-[-0.015em] hover:cursor-pointer">
                  {post.frontMatter.description}
                </p>
                <div className="lg:absolute bottom-0 mt-3 lg:mt-0 flex flex-row w-full gap-3 lg:h-16 hover:cursor-pointer">
                  <span className="relative w-10">
                    <Image src={post.frontMatter.authorImage} fill alt="" />
                  </span>
                  <span className="flex items-end">
                    <p className="font-dmsans-500 text-brand-secondary-200 text-base leading-6 tracking-[-0.015em] hover:cursor-pointer">
                      {post.frontMatter.author}
                    </p>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
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
