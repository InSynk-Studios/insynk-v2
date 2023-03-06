import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ManReadingNewspaper from "@/assets/illustration/man_reading_newspaper.svg";
import { Card } from "@/components/Elements";

export default function Blogs({ posts }) {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
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
      <div className="flex justify-start w-4/6 mt-20">
        <h2 className="font-dmsans-700 text-base leading-6 tracking-[-0.015em]">
          Categories
        </h2>
      </div>
      <div className="w-2/3">
        <ul className="space-x-8">
          {posts.map((post, index) => (
            <Link
              href={"/blogs/" + post.slug}
              passHref
              key={index}
              className="hover:cursor-pointer"
            >
              <Card className="w-56 h-72 md:w-319 md:h-484">
                <h1 className="h-fit font-dmsans-700 text-lg leading-[22px] tracking-[-0.015em]">
                  {post.frontMatter.title}
                </h1>
                <Image
                  src={post.frontMatter.image}
                  width={20}
                  height={20}
                  className="absolute top-20 w-full h-28 md:h-fit"
                  alt=""
                />
              </Card>
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
