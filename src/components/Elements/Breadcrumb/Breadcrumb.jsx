import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbArrow from "@/assets/icons/breadcrumb_arrow.svg";

export const Breadcrumb = () => {
  const router = useRouter();
  const { asPath, pathname } = router;

  // Split the path into segments
  const segments = asPath.split("/").filter((segment) => segment);

  return (
    <nav className="text-sm" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link
            href="/"
            className="text-brand-primary-700 text-lg cursor-pointer uppercase font-clashdisplay-500 hover:text-brand-primary-400 hover:font-semibold"
          >
            Insynk studios
          </Link>
        </li>
        {segments.map((segment, index) => {
          const isLastSegment = index === segments.length - 1;
          const segmentPath = `/${segments.slice(0, index + 1).join("/")}`;

          return (
            <li key={index} className="flex items-center">
              <span className="mx-7 text-gray-500">
                <Image src={BreadcrumbArrow} alt="" />
              </span>
              <Link
                href={segmentPath}
                className={`text-lg uppercase cursor-pointer font-clashdisplay-500 font-medium hover:text-brand-primary-400 hover:font-semibold ${
                  isLastSegment
                    ? "text-brand-primary-400 font-clashgrotesk-600 font-semibold"
                    : "text-brand-primary-700"
                }`}
              >
                {segment}
              </Link>
            </li>
          );
        })}
        {pathname === "/" && (
          <li className="flex items-center">
            <span className="mx-1 text-gray-500">/</span>
          </li>
        )}
      </ol>
    </nav>
  );
};
