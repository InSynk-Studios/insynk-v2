import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const Timeline = ({ data, className, lineClassName }) => {
  return (
    <div className="flex items-center justify-start w-full mt-12 sm:mt-[120px]">
      <div className="flex flex-col items-start">
        {data?.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 space-x-10 lg:space-x-10"
          >
            <div
              className={twMerge(
                `grid grid-rows-3 place-items-center items-start`,
                className
              )}
            >
              <div className="flex justify-center items-center rounded-full bg-brand-primary-100 bg-opacity-[49%] w-32 h-32 sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt="Circle"
                  className="w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40"
                />
              </div>
              {index < data.length - 1 && (
                <div
                  className={twMerge(
                    `h-full row-span-3 border-l-2 place-self-center border-dashed border-brand-primary-100`,
                    lineClassName
                  )}
                />
              )}
            </div>
            <div className="col-span-2">{item?.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
