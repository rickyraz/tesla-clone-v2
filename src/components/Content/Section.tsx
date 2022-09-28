import React, { FC, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const container = useRef(null);
  const elem0 = useRef(null);
  const elem1 = useRef(null);
  const elem2 = useRef(null);
  useLayoutEffect(() => {
    const title = elem0.current;
    const desc = elem1.current;
    const btn = elem2.current;
    const containers = container.current;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      scroller: containers,
    });

    tl.from([title, desc, btn], {
      scrollTrigger: {
        trigger: containers,
        scrub: 1,
        start: "top-center",
        end: "bottom-top",
      },
      y: 40,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
      stagger: 0.5,
      repeatRefresh: true,
    }).to(
      [title, desc, btn],
      0.1,
      {
        scrollTrigger: containers,
        y: 0,
        opacity: 100,
        repeatRefresh: true,
      },
      "+=0.5"
    );
  });

  return (
    <section className="relative snap-start font-montserrat">
      {/* BG */}
      <img
        src={backgroundImage}
        alt={alt}
        className=" h-screen w-full object-cover"
      />

      <div className="absolute top-[112px] left-0 h-screen w-full">
        {/* Tittle */}
        <div className="flex justify-center" ref={elem0}>
          <h1 className=" text-4xl font-semibold md:text-[40px]">{title}</h1>
        </div>
        {/* Desc */}
        <div className="flex justify-center" ref={elem1}>
          <p className=" inline-block pt-[6px]">
            {desc}
            <a href="/" className=" font-medium capitalize underline">
              {descLink}
            </a>
          </p>
        </div>

        {/* Button */}
        <div className="relative flex h-full w-full justify-center">
          <section
            className="absolute -top-96  text-sm font-semibold capitalize sm:flex"
            ref={elem2}
          >
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
// gsap.fromTo(title!, { y: 10, opacity: 0 }, { y: 0, opacity: 0 });
