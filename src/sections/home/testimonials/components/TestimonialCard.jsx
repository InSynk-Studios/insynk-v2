import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const TestimonialCard = ({ item }) => {
  return (
    <div className="flex flex-col shadow-md pl-3 pt-[38px] pb-[46px] justify-center items-center bg-white h-[317px] sm:h-[222px] w-[292px] sm:w-[584px]">
      <div className="w-5/6">
        <p className="leading-6 font-recoleta-500 text-brand-primary-400">
          {'"'} {item.testimonial}
          {'"'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-between sm:items-center">
          <div className="flex sm:flex-row gap-4 w-fit">
            <Image
              priority
              src={item.image}
              alt=""
              className="rounded-full w-10 h-10"
            />
            <span>
              <h3 className="font-dmsans-700 leading-6 tracking-[-0.015em]">
                {item.name}
              </h3>
              <h4 className="font-dmsans-400 leading-6 tracking-[-0.015em]">
                {item.position}
              </h4>
            </span>
          </div>
          <Image priority src={item.logo} alt="" className="-ml-6 sm:-ml-0 h-8 sm:h-11" />
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {};

export default TestimonialCard;
