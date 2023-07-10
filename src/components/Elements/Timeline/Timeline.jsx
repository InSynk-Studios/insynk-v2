import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const Timeline = ({ data, className, contentWrapperClassName }) => {
  return (
    <div className="flex items-center justify-start w-full mt-12 sm:mt-[120px]">
      <div className="flex flex-col items-start">
        {data?.map((item, index) => (
          <div key={index} className="flex flex-row lg:mx-20 gap-5 sm:gap-10">
            <div
              className={twMerge(
                `flex flex-col relative justify-start items-center`,
                className
              )}
            >
              <div>
                <div className="flex justify-center items-center rounded-full bg-brand-primary-100 bg-opacity-[49%] w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt="Circle"
                    className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36"
                  />
                </div>
              </div>
              {index < data.length - 1 && (
                <div className="h-full border-l-2 border-dashed border-brand-primary-100" />
              )}
            </div>
            <div
              className={twMerge(
                "mb-16",
                index < data.length - 1 && contentWrapperClassName
              )}
            >
              {item?.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
