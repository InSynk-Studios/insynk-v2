import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import TestimonialCard from "@/sections/home/testimonials/components/TestimonialCard";
import { testimonialsData } from "@/sections/home/testimonials/testimonialsData";
import ArrowBack from "@/assets/icons/arrow_back.svg";

const ResponsiveImage = (props) => <Image alt={props.alt} fill {...props} />;

const components = { img: ResponsiveImage };

const proseHeadingStyle =
  "prose-h1:text-brand-primary-400 prose-h1:text-center prose-h1:text-5xl prose-h1:font-recoleta-500 prose-h1:leading-[65px] prose-h3:font-dmsans-700 prose-h3:text-xl prose-h3:leading-[30px] prose-h3:tracking-[-0.015em]";

const proseParagraphStyle =
  "prose-p:text-lg prose-p:font-dmsans-400 prose-p:leading-[27px] prose-p:tracking-[-0.015em]";

const proseQuoteStyle =
  "prose-blockquote:font-caveat-400 prose-blockquote:text-[28px] prose-blockquote:leading-7";

const PostPage = ({
  frontMatter: { title, logo, description, organization },
  mdxSource,
}) => {
  const OrganizationTestimonial = testimonialsData.filter(
    (testimonial) => testimonial.organization === organization
  );

  return (
    <section className="relative mt-44 mb-[102px]">
      <div className="flex flex-row justify-center">
        <Link
          href={"/work"}
          className="absolute left-3 lg:left-14 -top-11 sm:-top-0 lg:top-5 hover:cursor-pointer flex justify-start items-start font-dmsans-500 text-base leading-6 tracking-[-0.015em] gap-3 h-fit"
        >
          <Image src={ArrowBack} className="hover:cursor-pointer" alt="" />
          All Work
        </Link>
        <div className="mx-5 sm:mx-0 max-w-[500px] lg:max-w-[6892px] 2xl:max-w-[950px]">
          <div className="flex justify-center items-center mb-6">
            <span className="relative bg-white w-32 h-14">
              <Image src={logo} fill alt="" />
            </span>
          </div>
          <h1 className="text-brand-primary-400 text-center text-5xl mb-5 font-recoleta-500 leading-[65px]">
            {title}
          </h1>
          <p className="font-dmsans-400 text-base text-center tracking-[-0.015em] leading-6">
            {description}
          </p>
          <article
            className={`prose max-w-full ${proseHeadingStyle} ${proseQuoteStyle} ${proseParagraphStyle}`}
          >
            <MDXRemote {...mdxSource} components={components} />
          </article>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mx-auto w-fit mt-[156px] gap-24 border-brand-primary-400 border-b">
        <h1 className="text-4xl sm:text-5xl text-center font-recoleta-500 leading-[65px] text-brand-primary-400">
          What the {organization} team is saying
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
          {OrganizationTestimonial?.map((testimonial) => (
            <div
              key={testimonial.id}
              className="inline-block place-self-center"
            >
              <TestimonialCard item={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("work"));

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
  const files = fs.readdirSync(path.join("work"));

  const markdownWithMeta = fs.readFileSync(
    path.join("work", slug + ".md"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

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
      frontMatter,
      posts,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
