import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "../Elements";

export default function BlogCarousel({ posts }) {
  console.log(posts);
  return (
    <Carousel className="border-t-2">
      {posts?.map((post, index) => (
        <Link href={"/blog/" + post.slug} passHref key={index}>
          <div className="mb-5">
            <div className="underline hover:decoration-wavy hover:cursor-pointer inline-block">
              <h5 className="mt-5">{post.frontMatter.title}</h5>
            </div>
          </div>
        </Link>
      ))}
    </Carousel>
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
