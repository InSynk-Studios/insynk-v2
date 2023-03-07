import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/Elements";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ManReadingNewspaper from "@/assets/illustration/man_reading_newspaper.svg";

const tabs = [
  { id: 1, label: "All" },
  { id: 2, label: "Design" },
  { id: 3, label: "Scoping" },
  { id: 4, label: "MVP" },
  { id: 5, label: "Developement" },
];

export default function Blogs({ posts }) {
  const [activeTab, setActiveTab] = useState(1);

  const filteredContents =
    activeTab === 1
      ? posts
      : posts.filter(
          (post) => post.frontMatter.tag === tabs[activeTab - 1].label
        );

  return (
    <main className="flex flex-col mt-[185px] mb-32 justify-center items-center">
      <div className="flex flex-row justify-between items-center w-4/6">
        <span className="flex flex-col gap-2">
          <h1 className="text-4xl lg:text-5xl font-tanker-400 leading-[65px] text-brand-secondary-200">
            InSynk blogs
          </h1>
          <p className="font-dmsans-400 text-base leading-6 tracking-[-0.015em] w-4/5">
            Insights, stories, guides and experiences in building from the
            InSynk team
          </p>
        </span>
        <Image src={ManReadingNewspaper} alt="" />
      </div>

      <div className="flex flex-col gap-4 justify-start w-4/6 mt-20 mb-10">
        <h2 className="font-dmsans-700 text-base leading-6 tracking-[-0.015em]">
          Categories
        </h2>
        <div className="flex justify-start gap-1">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-fit h-[26px] rounded ${
                activeTab === tab.id
                  ? "bg-brand-primary-200 text-brand-primary-300"
                  : "bg-brand-background-700 text-brand-secondary-500"
              } px-4 py-2 rounded-l-md rounded-r-md`}
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="w-2/3">
        <ul className="space-x-4">
          {filteredContents.map((post, index) => (
            <Link
              href={"/blogs/" + post.slug}
              passHref
              key={index}
              className="hover:cursor-pointer"
            >
              <div className="inline-block hover:cursor-pointer space-y-1 w-56 h-72 md:w-[319px] md:h-[484px]">
                <div className="relative w-full h-[225px]">
                  <Image src={post.frontMatter.image} fill alt="" />
                </div>
                <h3 className="font-dmsans-500 text-brand-secondary-400 text-xs leading-[18px] tracking-[-0.015em]">
                  Product ● {post.frontMatter.tag}
                </h3>
                <h1 className="font-dmsans-700 text-lg leading-[22px] tracking-[-0.015em]">
                  {post.frontMatter.title}
                </h1>
                <p className="font-dmsans-400 text-sm leading-[21px] tracking-[-0.015em]">
                  {post.frontMatter.description}
                </p>
                <p className="font-dmsans-400 text-base leading-6 tracking-[-0.015em]">
                  {post.frontMatter.author}
                </p>
              </div>
            </Link>
          ))}
        </ul>
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
