import React, { useEffect, useRef } from "react";
import gsap, { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(DrawSVGPlugin);

const Hero = () => {
  useGSAP(() => {
    const tagLine = new SplitText("#tagLine", { type: "words" });
    const mainText = new SplitText("#mainText1", { type: "chars" });

    const tl = gsap.timeline({});

    tl.from(mainText.chars, {
      yPercent: 50,
      duration: 1.2,
      stagger: 0.1,
      opacity: 0,
      ease: "expo.out",
    })
      .from(
        tagLine.words,
        {
          yPercent: 200,
          duration: 0.9,
          stagger: 0.08,
          opacity: 0,
          ease: "expo.out",
        },
        "<0.4"
      )
      .from(
        "#mainText2",
        {
          yPercent: 50,
          duration: 1.2,
          opacity: 0,
          ease: "expo.out",
          delay: 0.2,
        },
        "<0.1"
      );

    return () => {
      tagLine.revert();
      mainText.revert();
    };
  });

  const flairRef = useRef(null);

  useEffect(() => {
    const flair = flairRef.current;

    const xTo = gsap.quickTo(flair, "x", {
      duration: 0.2,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(flair, "y", {
      duration: 0.2,
      ease: "power3.out",
    });

    const handleMove = (e) => {
      const drift = 0.02; // 0.05 = subtle, 0.2 = stronger

      xTo(e.clientX * drift);
      yTo(e.clientY * drift);
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="home"
      className="w-full flex flex-col justify-center gap-5 items-center pt-20 bg-[#121212]"
    >
      <h5 id="tagLine" className="text-[#F0F0F080] font-semibold text-lg">
        Quality Over Quantity - Since 2024
      </h5>

      <div className="relative flex flex-col justify-start items-center gap-0">
        <div
          ref={flairRef}
          className="absolute top-[12%] left-[30%] lg:top-[22%] lg:left-[38%] w-25 h-40 lg:w-45 lg:h-70 z-10 rounded-full overflow-hidden shadow-xl/30"
        >
          <img
            src="/ProfilePhoto4.png"
            alt="pf-photo"
            className="w-full h-full object-cover object-top scale-140"
          />
        </div>

        <h1
          id="mainText1"
          className="font-[pfTwo] text-[120px] lg:text-[260px] font-extrabold text-[#E0F11F] leading-none"
        >
          MUHD.
        </h1>
        <h1
          id="mainText2"
          className="font-[pfTwo] text-[120px] lg:text-[260px] font-extrabold text-[#E0F11F] leading-none"
        >
          HAMZA
        </h1>
      </div>

      <div id="star" className="h-12 w-12 my-10">
        <svg viewBox="0 0 48 48" id="svg9931172714">
          <path
            d="M 22.75 48 C 20.903 37.41 10.483 27.457 0 25.25 L 0 22.625 C 10.549 20.105 20.686 10.941 22.75 0 L 25.375 0 C 27.169 10.66 37.542 20.343 48 22.625 L 48 25.25 C 37.735 27.377 27.106 37.364 25.375 48 Z"
            fill='var(--token-e3342d20-df05-4fdf-b8ee-7cbcc8525edc, rgb(224, 241, 31)) /* {"name":"Primary"} */'
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
