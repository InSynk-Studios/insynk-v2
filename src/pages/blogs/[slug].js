import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import { Carousel } from "@/components/Elements";
import ArrowBack from "@/assets/icons/arrow_back.svg";
import LinkSvg from "@/assets/icons/link.svg";
import FaceBook from "@/assets/icons/facebook.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import Twitter from "@/assets/icons/twitter.svg";

const ResponsiveImage = (props) => <Image alt={props.alt} fill {...props} />;

const components = { img: ResponsiveImage };

const proseHeadingStyle =
  "prose-h1:text-brand-primary-400 prose-h1:text-5xl prose-h1:font-recoleta-500 prose-h1:leading-[65px] prose-h3:font-dmsans-700 prose-h3:text-xl prose-h3:leading-[30px] prose-h3:tracking-[-0.015em]";

const proseParagraphStyle =
  "prose-p:text-lg prose-p:font-dmsans-400 prose-p:leading-[27px] prose-p:tracking-[-0.015em]";

const proseQuoteStyle =
  "prose-blockquote:font-caveat-400 prose-blockquote:text-[28px] prose-blockquote:leading-7";

const PostPage = ({
  frontMatter: { title, tag, date, description, author, authorImage, position },
  posts,
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
          className="absolute left-3 lg:left-14 -top-11 sm:-top-0 lg:top-5 hover:cursor-pointer flex justify-start items-start font-dmsans-500 text-base leading-6 tracking-[-0.015em] gap-3 h-fit"
        >
          <Image src={ArrowBack} alt="" />
          All blogs
        </Link>
        <div className="mx-5 sm:mx-0 max-w-[500px] lg:max-w-[692px] 2xl:max-w-[750px]">
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
          <h1 className="text-brand-primary-400 text-5xl mb-5 font-recoleta-500 leading-[65px]">
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
            className={`prose lg:max-w-full ${proseHeadingStyle} ${proseQuoteStyle} ${proseParagraphStyle}`}
          >
            <MDXRemote {...mdxSource} components={components} />
          </article>
        </div>
      </div>
      <div className="flex flex-col justify-start md:justify-center items-start md:items-center mt-16 mx-5 md:mx-0">
        <div className="w-1/2 lg:w-2/3 xl:w-1/2">
          <h2 className="font-dmsans-700 text-base leading-6 tracking-[-0.015em] mb-4">
            Share on :
          </h2>
          <span className="h-12 flex flex-row items-center gap-6">
            <Link href={"#"} rel="noopener noreferrer" target="_blank">
              <Image src={Twitter} className="hover:cursor-pointer" alt="" />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/0xinsynkstudios/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image src={Linkedin} className="hover:cursor-pointer" alt="" />
            </Link>
            {/* <Link href={"#"} rel="noopener noreferrer" target="_blank">
              <Image src={FaceBook} className="hover:cursor-pointer" alt="" />
            </Link> */}
            <button onClick={copyToClipboard}>
              <Image src={LinkSvg} className="hover:cursor-pointer" alt="" />
            </button>
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-[156px] gap-24">
        <div className="w-11/12 border-brand-primary-400 border-t">
          <div className="flex justify-between mb-6 mt-10">
            <h2 className="font-dmsans-700 text-2xl mb-2 leading-[22px] tracking-[-0.015em]">
              Keep Reading
            </h2>
            <span className="grid grid-cols-2 gap-6">
              <button
                onClick={() => {
                  document.getElementById("Carousel").scrollLeft += 50;
                }}
              >
                <Image
                  src={ArrowBack}
                  className="hover:cursor-pointer"
                  alt=""
                />
              </button>
              <button
                onClick={() => {
                  document.getElementById("Carousel").scrollLeft -= 50;
                }}
              >
                <Image
                  src={ArrowBack}
                  className="transform -scale-x-100 hover:cursor-pointer"
                  alt=""
                />
              </button>
            </span>
          </div>
          <div className="w-full">
            <Carousel>
              {posts.map((post, index) => (
                <Link
                  href={"/blogs/" + post.slug}
                  passHref
                  key={index}
                  className="hover:cursor-pointer w-fit"
                >
                  <div className="relative hover:cursor-pointer h-[333px] w-[319px]">
                    <div className="relative w-full h-[225px] mb-3 hover:cursor-pointer">
                      <Image src={post.frontMatter.image} fill alt="" />
                    </div>
                    <h1 className="font-dmsans-700 text-lg mb-2 leading-[22px] tracking-[-0.015em]">
                      {post.frontMatter.title}
                    </h1>
                    <div className="absolute bottom-0">
                      <p className="font-dmsans-500 text-brand-secondary-200 text-base leading-6 tracking-[-0.015em]">
                        {post.frontMatter.author}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </Carousel>
          </div>
        </div>
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
  const files = fs.readdirSync(path.join("posts"));

  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

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
      frontMatter,
      posts,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
