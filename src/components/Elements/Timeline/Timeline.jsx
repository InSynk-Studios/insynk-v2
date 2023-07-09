import React from "react";
import Image from "next/image";

export const Timeline = ({ data }) => {
  return (
    <div className="flex items-center justify-start w-full mt-[120px] mb-20">
      <div className="flex flex-col items-start">
        {data.map((item, index) => (
          <>
            <div
              key={item.content}
              className="grid grid-cols-3 space-x-10 lg:space-x-20"
            >
              <div className="grid grid-rows-3 lg:grid-rows-2 place-items-center items-start">
                <div className="flex justify-center items-center rounded-full bg-brand-primary-100 bg-opacity-[49%] w-[250px] h-[250px] lg:w-[272px] lg:h-[272px] overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt="Circle"
                    className="w-28 h-28 lg:w-40 lg:h-40"
                  />
                </div>
                {index < data.length - 1 && (
                  <div className="h-full row-span-2 border-l-2 place-self-center border-dashed border-brand-primary-100" />
                )}
              </div>
              <div className="col-span-2">{item?.content}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
