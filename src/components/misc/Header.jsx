import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/stories/assets/logo.svg";
import Link from "next/link";
import { Button } from "@/components/Elements/Button/Button";

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
    { name: "Home", to: `/`, icon: "" },
    {
      name: "Blog",
      to: `Blog`,
      icon: "",
    },
  ].filter(Boolean);

  return (
    <header
      className={`w-full top-0 backdrop-filter backdrop-blur-lg fixed z-10 trasition ease-in-out duration-500 ${
        animateHeader && "bg-black/20"
      }`}
    >
      <div
        className={`flex ${
          animateHeader ? "py-3" : "py-6"
        } mx-auto items-center justify-between px-14 trasition ease-in-out duration-500`}
      >
        <div>
          <Image priority src={Logo} height={100} width={100} alt="logo" />
        </div>
        <div className="flex justify-center items-center gap-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.to}
              className="px-4 py-2 text-lg font-semibold hover:text-black"
            >
              {item.name}
            </Link>
          ))}
          <Button>Contact Us</Button>
        </div>
      </div>
    </header>
  );
};
