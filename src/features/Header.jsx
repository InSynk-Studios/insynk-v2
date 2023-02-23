import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import Link from "next/link";
import { Button } from "@/components/Elements";

export const Header = () => {
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
    <header
      className={`w-full top-0 fixed z-10 trasition ease-in-out duration-500 ${
        animateHeader && "bg-brand-background-100 border-b-2"
      }`}
    >
      <div
        className={`flex ${
          animateHeader ? "py-3" : "py-6"
        } mx-auto items-center justify-between px-14 trasition ease-in-out duration-500`}
      >
        <Image priority src={Logo} height={100} width={100} alt="logo" />
        <div className="flex justify-center items-center gap-2 text-sm sm:text-lg font-clashgrotesk-500 font-semibold">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.to}
              className="px-4 py-2 hover:text-black"
            >
              {item.name}
            </Link>
          ))}
          <Button onClick={scrollToForm} className="">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};
