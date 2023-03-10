import React from "react";
import { CursorLine } from "./CursorLine";

export const Cursor = () => {
  return (
    <div className="cursor">
      <div className="cursor-r cursor-r-1">
        <CursorLine
          angle={223}
          imgClassName="cursor-r-1-c-1"
          animatioName="slidein-tl"
        />
        <CursorLine
          angle={313}
          imgClassName="cursor-r-1-c-2"
          animatioName="slidein-tr"
        />
      </div>
      <div className="cursor-r cursor-r-2">
        <CursorLine
          angle={132}
          imgClassName="cursor-r-2-c-1"
          animatioName="slidein-bl"
        />
        <CursorLine
          angle={43}
          imgClassName="cursor-r-2-c-2"
          animatioName="slidein-br"
        />
      </div>
    </div>
  );
};
