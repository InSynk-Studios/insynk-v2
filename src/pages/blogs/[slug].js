import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import ArrowBack from "@/assets/icons/arrow_back.svg";
// import SyntaxHighlighter from "react-syntax-highlighter";

const ResponsiveImage = (props) => <Image alt={props.alt} fill {...props} />;

const components = { img: ResponsiveImage };

const PostPage = ({ frontMatter: { title, date }, mdxSource }) => {
  return (
    <section className="relative flex flex-row justify-center mt-44">
      <Link
        href={"/blogs"}
        className="absolute left-14 top-5 hover:cursor-pointer flex justify-start items-start font-dmsans-500 text-base leading-6 tracking-[-0.015em] gap-3 h-fit"
      >
        <Image src={ArrowBack} alt="" />
        All blogs
      </Link>
      <article className="prose prose-sm lg:prose-lg prose-h1:text-brand-primary-400 prose-h1:text-5xl prose-h1:font-tanker-400 prose-h1:leading-[65px] prose-h3:text-rose-600 max-w-[692px]">
        <MDXRemote {...mdxSource} components={components} />
      </article>
    </section>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
