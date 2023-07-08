import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Elements";
import Logo from "@/assets/logo.svg";
import LogoInWhite from "@/assets/logo_in_white.svg";
import CrossIcon from "@/assets/icons/cross.svg";
import WhiteCrossIcon from "@/assets/icons/whiteCross.svg";
import HamburgerBlackIcon from "@/assets/icons/hamburgerBlack.svg";
import HamburgerWhiteIcon from "@/assets/icons/hamburgerWhite.svg";

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

  useEffect(() => {}, [navbar]);

  const navigation = [
    { name: "Home", to: `/` },
    { name: "Services", to: `/services` },
    { name: "Work", to: `/work` },
    {
      name: "Blogs",
      to: `/blogs`,
    },
  ].filter(Boolean);

  function scrollToForm() {
    const access = document.getElementById("ContactForm");
    access.scrollIntoView({ behavior: "smooth" }, true);
  }

  const router = useRouter();

  const contactOnclickHideSidebar = () => {
    setNavbar(!navbar);
    scrollToForm();
  };

  return (
    <nav
      className={`w-full top-0 fixed bg-brand-background-100 px-5 lg:px-14 z-10 trasition ease-in-out duration-500 ${
        animateHeader
          ? "py-4 border-b-2 bg-brand-secondary-200"
          : "pt-5 sm:pt-10"
      }`}
    >
      <div
        className={`justify-between mx-auto lg:max-w-7xl xl:max-w-full md:items-center md:flex `}
      >
        <div className="relative h-14 w-full lg:w-32 flex items-center justify-between lg:block">
          <Link href="/">
            {animateHeader ? (
              <Image
                priority
                src={LogoInWhite}
                className="hover:cursor-pointer h-10 w-full sm:h-full"
                alt="logo"
              />
            ) : (
              <Image
                priority
                src={Logo}
                className="hover:cursor-pointer h-10 w-full sm:h-full"
                alt="logo"
              />
            )}
          </Link>
          {/* Sidebar toggle button */}
          <div className="lg:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
              data-te-sidenav-toggle-ref
              data-te-target="#sidenav"
              aria-controls="#sidenav"
              aria-haspopup="true"
            >
              {navbar ? (
                <Image src={CrossIcon} alt="CrossIcon" />
              ) : animateHeader ? (
                <Image src={HamburgerWhiteIcon} alt="HamBurger" />
              ) : (
                <Image src={HamburgerBlackIcon} alt="HamBurger" />
              )}
            </button>
          </div>
        </div>
        <div>
          {/* Desktop navigation */}
          <div className={"hidden lg:block mx-auto"}>
            <ul className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:flex lg:space-x-4 lg:space-y-0">
              {navigation.map((navigate) => (
                <li key={navigate.name}>
                  <Link
                    href={navigate.to}
                    className={`px-2 py-2 font-clashgrotesk-600 font-semibold text-lg leading-6 hover:cursor-pointer ${
                      router.pathname == navigate.to
                        ? "text-brand-primary-700 " ||
                          (animateHeader && "text-brand-secondary-300")
                        : (animateHeader &&
                            "text-brand-primary-300 hover:text-brand-secondary-300") ||
                          "text-brand-primary-800 hover:text-brand-primary-700"
                    }`}
                  >
                    {navigate.name}
                  </Link>
                </li>
              ))}
              <Button
                onClick={scrollToForm}
                varient="primary"
                className={`px-5 py-3 font-clashgrotesk-600 leading-6 shadow-brand ${
                  animateHeader
                    ? "bg-brand-primary-300 text-brand-secondary-200 hover:bg-brand-primary-200 hover:text-brand-primary-300"
                    : "bg-brand-primary-100 hover:bg-brand-primary-400"
                }`}
              >
                Contact Us
              </Button>
            </ul>
          </div>
          {/* Mobile sidebar */}
          <div
            id="sidenav"
            className={`fixed h-screen top-0 right-0 z-[1035] w-60 overflow-hidden bg-black transition-transform duration-300 ease-in-out${
              navbar ? "transform translate-x-0" : "transform translate-x-full"
            }`}
            data-te-sidenav-init
            data-te-sidenav-hidden="false"
            data-te-sidenav-right="true"
          >
            <span className="flex mt-5 mr-5 mb-10 items-center justify-end">
              <button onClick={() => setNavbar(!navbar)}>
                <Image src={WhiteCrossIcon} alt="CrossIcon" />
              </button>
            </span>
            <ul className="flex flex-col lg:flex-row items-center justify-center space-y-8 md:flex lg:space-x-4 lg:space-y-0">
              {navigation.map((navigate) => (
                <li key={navigate.name}>
                  <Link
                    href={navigate.to}
                    onClick={() => setNavbar(!navbar)}
                    className={`px-2 py-2 font-clashgrotesk-600 font-semibold text-lg leading-6 hover:cursor-pointer ${
                      router.pathname == navigate.to
                        ? "text-brand-primary-700"
                        : "text-white"
                    }`}
                  >
                    {navigate.name}
                  </Link>
                </li>
              ))}
              <button
                onClick={contactOnclickHideSidebar}
                className={`py-3 w-full font-clashgrotesk-600 leading-6 shadow-brand bg-brand-primary-100 hover:bg-brand-primary-400`}
              >
                Contact Us
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
