import Link from "next/link";
import React from "react";

interface SubHeadProps {
  title: string;
}

const SubHead = ({title}: SubHeadProps) => {
  return (
    <>
      <h2 className="mb-1 text-[15vw] tracking-[-1.em] text-[#f6f6f6] font-bold text-right leading-[.5]">
        {title}
      </h2>
    </>
  );
};

export default SubHead;
