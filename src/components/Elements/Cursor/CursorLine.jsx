import React from "react";
import Image from "next/image";
import Wave from "@/assets/wave_line.svg";

export const CursorLine = ({
  className = "",
  imgClassName = "",
  angle,
  animatioName = "",
}) => {
  return (
    <div
      className={`cursor-wrapper ${className}`}
      style={{ animationName: animatioName }}
    >
      <Image
        src={Wave}
        alt="Insynk Studios"
        style={{ transform: `rotate(${angle}deg)` }}
        className={`cursor-img ${imgClassName}`}
      />
    </div>
  );
};
