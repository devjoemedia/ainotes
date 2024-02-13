import Link from "next/link";
import React from "react";

type LogoProps = {
  size: "sm" | "md" | "lg";
};

const buttonSizes = {
  sm: "30px",
  md: "35px",
  lg: "40px",
};
const Logo = ({ size }: LogoProps) => {
  const buttonSize = buttonSizes[size] || "30px";
  const textSize = size === "sm" ? "sm" : "lg";

  return (
    <Link href='/'>
      <div className='flex items-center mt-3'>
        <button
          className={`text-white cursor-pointer w-[${buttonSize}] h-[${buttonSize}] rounded-md bg-slate-900 flex items-center justify-center`}
        >
          AI
        </button>
        <p className={`text-${textSize} font-semibold ml-1`}>Notes</p>
      </div>
    </Link>
  );
};

export default Logo;
