import React from "react";
import HandPalm from "@/Components/HandPalm";

const MeTooButton = ({ meToos }: { meToos: number }) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <HandPalm />
      <div className="flex flex-row justify-start text-text-color text-[10px] whitespace-nowrap">
        {meToos > 0 ? `${meToos} Others` : "Me Too"}
      </div>
    </div>
  );
};

export default MeTooButton;
