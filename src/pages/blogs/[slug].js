import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import ArrowBack from "@/assets/icons/arrow_back.svg";
import { Contact } from "@/sections";
import LinkSvg from "@/assets/icons/link.svg";
import FaceBook from "@/assets/icons/facebook.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import Twitter from "@/assets/icons/twitter.svg";
import BlogCarousel from "@/components/BlogCarousel/BlogCarousel";

const ResponsiveImage = (props) => <Image alt={props.alt} fill {...props} />;

const components = { img: ResponsiveImage };

const proseHeadingStyle =
  "prose-h1:text-brand-primary-400 prose-h1:text-5xl prose-h1:font-tanker-400 prose-h1:leading-[65px] prose-h3:font-dmsans-700 prose-h3:text-xl prose-h3:leading-[30px] prose-h3:tracking-[-0.015em]";

const proseParagraphStyle =
  "prose-p:text-lg prose-p:font-dmsans-400 prose-p:leading-[27px] prose-p:tracking-[-0.015em]";

const proseQuoteStyle =
  "prose-blockquote:font-caveat-400 prose-blockquote:text-[28px] prose-blockquote:leading-7";

const PostPage = ({
  frontMatter: {
    image,
    title,
    tag,
    date,
    description,
    author,
    authorImage,
    position,
  },
  mdxSource,
}) => {
  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(window.location.toString());
  };
  return (
    <section className="relative mt-44">
      <div className="flex flex-row justify-center">
        <Link
          href={"/blogs"}
          className="absolute left-14 top-5 hover:cursor-pointer flex justify-start items-start font-dmsans-500 text-base leading-6 tracking-[-0.015em] gap-3 h-fit"
        >
          <Image src={ArrowBack} alt="" />
          All blogs
        </Link>
        <div className="lg:max-w-[692px] 2xl:max-w-[750px]">
          <div className="flex flex-row gap-2">
            {tag.map((tagName, index) => (
              <div
                key={index}
                className="w-fit h-[26px] bg-brand-background-700 text-brand-secondary-500 py-1 px-[10px] text-xs font-dmsans-500 font-medium tracking-[-0.015em] leading-[18px] rounded"
              >
                {tagName}
              </div>
            ))}
          </div>
          <h1 className="text-brand-primary-400 text-5xl mb-5 font-tanker-400 leading-[65px]">
            {title}
          </h1>
          <p className="font-dmsans-400 text-base tracking-[-0.015em] leading-6">
            {description}
          </p>
          <div className="flex flex-row w-full gap-3 h-16 mt-16">
            <div className="relative w-1/12">
              <Image src={authorImage} fill alt="" />
            </div>
            <div className="flex flex-row justify-between w-full items-start">
              <span>
                <p className="font-dmsans-500 text-brand-secondary-200 text-base leading-6 tracking-[-0.015em]">
                  {author},
                </p>
                <p className="font-dmsans-400 text-brand-primary-600 text-base leading-6 tracking-[-0.015em]">
                  {position}
                </p>
              </span>
              <p>{date}</p>
            </div>
          </div>
          <article
            className={`prose max-w-full ${proseHeadingStyle} ${proseQuoteStyle} ${proseParagraphStyle}`}
          >
            <MDXRemote {...mdxSource} components={components} />
          </article>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-16">
        <div className="w-1/2">
          <h2 className="font-dmsans-700 text-base leading-6 tracking-[-0.015em] mb-4">
            Share on :
          </h2>
          <span className="h-12 flex flex-row items-center gap-6">
            <Link href={"#"} rel="noopener noreferrer" target="_blank">
              <Image src={Twitter} alt="" />
            </Link>
            <Link href={"#"} rel="noopener noreferrer" target="_blank">
              <Image src={Linkedin} alt="" />
            </Link>
            <Link href={"#"} rel="noopener noreferrer" target="_blank">
              <Image src={FaceBook} alt="" />
            </Link>
            <button onClick={copyToClipboard}>
              <Image src={LinkSvg} alt="" />
            </button>
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-[156px] gap-32">
        <BlogCarousel />
        <Contact />
      </div>
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
