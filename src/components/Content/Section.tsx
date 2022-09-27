import React, { FC } from "react";

interface SectionProps {
  title: string;
  alt: string;
  desc?: string;
  descLink?: string;
  leftBtnText?: string;
  rightBtnText?: string;
  backgroundImage: string;
}

const Section: FC<SectionProps> = ({
  title,
  desc,
  descLink,
  leftBtnText,
  rightBtnText,
  backgroundImage,
  alt,
}) => {
  return (
    <section className="relative snap-start font-montserrat">
      {/* BG */}
      <img
        src={backgroundImage}
        alt={alt}
        className=" h-screen w-full object-cover"
      />

      {/* TEXT ON THE TOP BG */}
      <div className="absolute top-[112px] left-0 h-screen w-full ">
        <h1 className="flex justify-center text-4xl font-semibold md:text-[40px]">
          {title}
        </h1>
        <div className="flex justify-center">
          <p className=" inline-block pt-[6px]">
            {desc}
            <a href="/" className=" font-medium capitalize underline">
              {descLink}
            </a>
          </p>
        </div>

        {/* BUTTONS */}
        <div className="relative flex h-full w-full justify-center">
          <section className="absolute top-94  text-sm font-semibold capitalize sm:flex">
            <div className="inline-block space-x-4 sm:space-x-6">
              <a
                href="/"
                className="rounded-md bg-black/70 px-5 py-3 font-medium text-white sm:px-10 md:px-20"
              >
                <span>{leftBtnText}</span>
              </a>
              {rightBtnText && (
                <a
                  href="/"
                  className="rounded-md bg-white/70 px-5 py-3 font-medium text-black sm:px-6 md:px-20"
                >
                  <span>{rightBtnText}</span>
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Section;
// sm:px-6 sm:py-1 md:px-20 md:py-3
/*
{rightBtnText && (
  <a
    href="/"
    className="rounded-md bg-white/70 px-5 py-3 font-medium text-black sm:px-6 md:px-20"
    >
      <span>{rightBtnText}</span>
    </a>
)}
*/
