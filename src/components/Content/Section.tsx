import React from "react";

type SectionProps = {
  title: string;
  alt: string;
  desc?: string;
  descLink?: string;
  leftBtnText?: string;
  rightBtnText?: string;
  backgroundImage: string;
};

export default function Section({
  title,
  desc,
  descLink,
  leftBtnText,
  rightBtnText,
  backgroundImage,
  alt,
}: SectionProps) {
  return (
    <section className="relative snap-start font-montserrat">
      {/* BG */}
      <img
        src={backgroundImage}
        alt={alt}
        className=" h-screen w-full object-cover"
      />
      {/* TEXT ON THE TOP BG */}
      <div className="absolute top-0 left-0 h-screen w-full ">
        <h1 className="mt-28 flex justify-center text-4xl font-semibold md:text-[40px]">
          {title}
        </h1>
        <p className=" flex justify-center pt-[6px] ">
          {desc}
          <a href="/" className="font-medium capitalize underline">
            {descLink}
          </a>
        </p>

        {/* BUTTONS */}
        <div className="mt-94 flex justify-center mdmax:hidden">
          <section className="space-x-5 text-sm font-semibold capitalize ">
            <a
              href="/"
              className="rounded-md bg-black/70 px-20 py-3 font-medium text-white "
            >
              <span>{leftBtnText}</span>
            </a>
            {rightBtnText && (
              <a
                href="/"
                className="rounded-md bg-white/70 px-20 py-3 font-medium text-black"
              >
                <span>{rightBtnText}</span>
              </a>
            )}
          </section>
        </div>
      </div>
    </section>
  );
}
