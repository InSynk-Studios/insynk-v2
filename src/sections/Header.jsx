import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Elements";
import Logo from "@/assets/logo.svg";
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
      name: "Blog",
      to: `Blog`,
    },
  ].filter(Boolean);

  function scrollToForm() {
    const access = document.getElementById("ContactForm");
    access.scrollIntoView({ behavior: "smooth" }, true);
  }

  return (
    <nav
      className={`w-full top-0 fixed bg-brand-background-100 z-10 trasition ease-in-out duration-500 ${
        animateHeader && "bg-brand-background-100 border-b-2"
      }`}
    >
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <Image priority src={Logo} height={100} width={100} alt="logo" />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image priority src={CrossIcon} alt="CrossIcon" />
                ) : (
                  <Image priority src={HamburgerIcon} alt="HamBurger" />
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
            <ul className="flex flex-col sm:flex-row items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-clashgrotesk-500 font-semibold">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.to} className="px-4 py-2 hover:text-black">
                    {item.name}
                  </Link>
                </li>
              ))}
              <Button
                onClick={scrollToForm}
                className="h-10 text-xs sm:text-lg w-full"
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
