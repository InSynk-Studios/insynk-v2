import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Elements";
import Logo from "@/assets/logo.svg";
import LogoInWhite from "@/assets/logo_in_white.svg";
import CrossIcon from "@/assets/icons/cross.svg";
import HamburgerIcon from "@/assets/icons/hamburger.svg";

export const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [animateHeader, setAnimateHeader] = useState(false);

  const handleHeaderAnimation = () => {
    if (window.scrollY > 140) {
      setAnimateHeader(true);
    } else setAnimateHeader(false);
  };

  useEffect(() => {
    handleHeaderAnimation();
    const listener = () => {
      handleHeaderAnimation();
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const navigation = [
    { name: "Home", to: `/` },
    {
      name: "Blogs",
      to: `Blogs`,
    },
  ].filter(Boolean);

  function scrollToForm() {
    const access = document.getElementById("ContactForm");
    access.scrollIntoView({ behavior: "smooth" }, true);
  }

  const router = useRouter();

  return (
    <nav
      className={`w-full top-0 fixed bg-brand-background-100 px-14 z-10 trasition ease-in-out duration-500 ${
        animateHeader ? "py-4 border-b-2 bg-brand-secondary-200" : "pt-10"
      }`}
    >
      <div
        className={`justify-between mx-auto lg:max-w-7xl xl:max-w-full md:items-center md:flex `}
      >
        <div>
          <div className="relative h-14 w-32 flex items-center justify-between md:block">
            <Link href="/" className="hover:cursor-pointer">
              {animateHeader ? (
                <Image priority src={LogoInWhite} fill alt="logo" />
              ) : (
                <Image priority src={Logo} fill alt="logo" />
              )}
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image src={CrossIcon} alt="CrossIcon" />
                ) : (
                  <Image src={HamburgerIcon} alt="HamBurger" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col sm:flex-row items-center justify-center space-y-8 md:flex md:space-x-4 md:space-y-0">
              {navigation.map((item) => (
                <li
                  key={item.name}
                  className={
                    router.pathname == item.to
                      ? "text-brand-primary-700" ||
                        (animateHeader && "text-brand-secondary-300")
                      : (animateHeader && "text-brand-primary-300") ||
                        "text-brand-primary-800"
                  }
                >
                  <Link
                    href={item.to}
                    className="px-2 py-2 font-clashgrotesk-600 font-semibold text-lg leading-6 hover:text-brand-primary-800 hover:cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <Button
                onClick={scrollToForm}
                varient="primary"
                className={`p-[10px] font-clashgrotesk-600 leading-6 shadow-brand ${
                  animateHeader
                    ? "bg-brand-primary-300 text-brand-secondary-200 hover:bg-brand-primary-200"
                    : "bg-brand-primary-100 hover:bg-brand-primary-400"
                }`}
              >
                Contact Us
              </Button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
