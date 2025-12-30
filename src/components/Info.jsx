import React from "react";
import gsap, { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(DrawSVGPlugin);

const Info = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { duration: 1, ease: "none" },
    });

    tl.fromTo("#line-path", { drawSVG: "0% 40%" }, { drawSVG: "60% 100%" });

    const para = new SplitText("#paragraph", { type: "lines" });

    gsap.from(para.lines, {
      scrollTrigger: {
        trigger: "#paragraph",
        start: "top 90%",
        end: "+=300",
      },
      yPercent: 100,
      duration: 1,
      stagger: 0.09,
      opacity: 0,
      ease: "expo.out",
    });

    gsap.from("#scroll-anim", {
      scrollTrigger: {
        trigger: "#scroll-anim",
        start: "top 90%",
        end: "+=300",
      },
      yPercent: 100,
      duration: 1,
      opacity: 0,
      ease: "expo.out",
    });
  });

  return (
    <div
      id="parent"
      className="w-full flex flex-col justify-center gap-5 items-center py-5 bg-[#121212]"
    >
      <p
        id="paragraph"
        className="text-[#F0F0F0] w-full px-15 lg:w-1/2 text-xl lg:text-2xl font-medium text-center leading-10"
      >
        I'm Muhammad Hamza - A passionate Web developer building scalable
        web solutions using the MERN stack.
      </p>

      <div
        id="scroll-anim"
        className="w-15 h-17 flex flex-col justify-between items-center mt-20"
      >
        <svg viewBox="0 0 50 190" className="h-16 w-auto">
          <path
            d="M25 10 L25 190"
            stroke="#F0F0F033"
            strokeWidth="12"
            fill="none"
          ></path>
          <path
            id="line-path"
            d="M25 10 L25 190"
            stroke="#E0F11F"
            strokeWidth="17"
            fill="none"
          ></path>
        </svg>

        <span className="text-[#F0F0F080] font-[pfOne] font-medium mt-2">
          SCROLL
        </span>
      </div>
    </div>
  );
};

export default Info;
