import React from "react";
import Image from "next/image";

export const Timeline = ({ data }) => {
  return (
    <div className="flex items-center justify-start w-full mt-[120px] mb-40">
      <div className="flex flex-col items-start">
        {data.map((item, index) => (
          <>
            <div key={item.imageUrl} className="flex flex-row gap-20 w-full">
              <div className="grid grid-rows-2 place-items-center justify-center items-center">
                <div className="rounded-full bg-brand-primary-100 bg-opacity-[49%] w-[272px] h-[272px] overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt="Circle"
                    className="w-full h-full"
                  />
                </div>
                {index < data.length - 1 && (
                  <div className="h-full border-l-2 border-dashed border-brand-primary-100" />
                )}
              </div>
              {item?.content}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
