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
        className=" w-full h-screen object-cover"
      />
      {/* TEXT ON THE TOP BG */}
      <div className="absolute top-0 left-0 w-full h-screen ">
        <h1 className="flex justify-center mt-28 text-[40px] font-semibold">
          {title}
        </h1>
        <p className=" flex justify-center pt-1">
          {desc}
          <a href="/" className="capitalize underline font-medium">
            {descLink}
          </a>
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center mt-94 mdmax:hidden">
          <section className="space-x-5 text-sm font-semibold capitalize">
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
