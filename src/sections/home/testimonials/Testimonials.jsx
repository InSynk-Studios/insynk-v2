import React, { useState, useEffect } from "react";
import Image from "next/image";
import "node_modules/react-modal-video/scss/modal-video.scss";
import { Carousel } from "@/components/Elements";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { testimonialsData } from "./testimonialsData";
import Underline from "@/assets/illustration/underline.svg";
import OpenParkLogo from "@/assets/openpark_logo.svg";
import Jared from "@/assets/testimonials/jared.png";
import TestmonilaEdgeLines from "@/assets/illustration/testimonial_edgelines.svg";
import TestimonialOverlayButton from "@/assets/icons/testimonial_overlay_button.svg";
import TestimonialCard from "./components/TestimonialCard";

export const Testimonials = () => {
  const [removePadding, setRemovePadding] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleRemovePadding = () => {
    if (window.scrollX > 50) {
      setRemovePadding(true);
    } else setRemovePadding(false);
  };

  useEffect(() => {
    handleRemovePadding();
    const listener = () => {
      handleRemovePadding();
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <section className="flex flex-col justify-start items-center mt-14 w-full bg-brand-background-200">
      <h1 className="flex flex-col items-center mt-16 justify-center w-fit text-center font-recoleta-500 font-normal text-xl lg:text-[40px] text-brand-primary-400">
        what people are saying about us
        <Image priority src={Underline} className="mt-2" alt="" />
      </h1>
      <div className="flex flex-col-reverse lg:flex-row mt-[86px] gap-16 text-center justify-center items-center mb-[70px]">
        <div className="w-5/6 lg:w-1/5 flex flex-col justify-center items-center gap-16">
          <p className="font-caveat-400 text-[27px] leading-[31.29px]">
            “We are indebted to InSynk Studios. They have helped us design and
            implement our website in a wonderful way”
          </p>
          <span>
            <p className="font-dmsans-400 text-base mb-[11px] leading-6 tracking-[-0.015em]">
              <span className="font-dmsans-700">Jared Zabel,</span> Founder
            </p>
            <Link href={"https://www.openpark.us/"} target="_blank">
              <Image
                priority
                src={OpenParkLogo}
                alt=""
                className="hover:cursor-pointer"
              />
            </Link>
          </span>
        </div>
        <div className="relative mx-5 sm:mx-0">
          <span className="relative flex justify-center items-center">
            <Image priority src={Jared} alt="" />
            <button onClick={() => setModalOpen(true)} className="absolute">
              <Image
                priority
                src={TestimonialOverlayButton}
                className="hover:cursor-pointer"
                alt=""
              />
            </button>
          </span>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isModalOpen}
            videoId="Kjql0e2tO8o"
            onClose={() => setModalOpen(false)}
          />
          <Image
            priority
            src={TestmonilaEdgeLines}
            className="absolute -right-5 lg:-right-10"
            alt=""
          />
        </div>
      </div>
      {/* <div className="w-full my-[70px]">
        <Carousel
          className={`pr-5 ${removePadding ? "pl-0" : "pl-8 md:pl-36"}`}
        >
          {testimonialsData?.map((item) => (
            <div key={item.id} className="inline-block">
              <TestimonialCard item={item} />
            </div>
          ))}
        </Carousel>
      </div> */}
    </section>
  );
};
