import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import React from "react";

const About = () => {
  useGSAP(() => {
    gsap.from("#head", {
      scrollTrigger: {
        trigger: "#head",
        start: "top 90%",
        end: "+=300",
      },
      yPercent: 100,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
    });

    gsap.from("#body", {
      scrollTrigger: {
        trigger: "#body",
        start: "top 90%",
        end: "+=300",
      },
      yPercent: 10,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
    });

    gsap.from("#divs", {
      scrollTrigger: {
        trigger: "#divs",
        start: "top bottom",
        end: "+=100",
      },
      yPercent: 10,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
    });
  });
  return (
    <section
      id="about"
      className="max-w-[987px] mx-auto px-4 sm:px-6 lg:px-8 bg-[#121212] pt-25"
    >
      <div
        id="head"
        className="flex h-10 justify-between items-center gap-10 md:gap-15"
      >
        <h2 className="text-[#E0F11F] text-4xl font-bold font-[pfTwo]">
          ABOUT
        </h2>

        <div className="w-full h-full flex items-center">
          <div className="h-1 w-full bg-[#F0F0F033]"></div>
          <div className="h-1 w-8 md:w-10 bg-[#E0F11F]"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 mt-10">
        <div className="py-3 w-full lg:w-1/2">
          <p
            id="body"
            className="text-xl font-[pfOne] text-[#F0F0F080] leading-9 sticky top-30"
          >
            My passion lies in blending logical problem-solving with modern
            technology, crafting meaningful digital solutions that are both
            intuitive and impactful.
          </p>
        </div>

        <div id="body" className="w-full lg:w-1/2">
          <div className="py-3">
            <p className="text-xl font-[pfOne] text-[#F0F0F0] leading-8">
              I am currently pursuing a Bachelor of Science in Computer Science
              at Dawood Universtiy of Engineering & Technology, after completing
              my Intermediate studies in Computer Science at Formen College and
              schooling at The Educators in Computer Science. This academic
              journey has built a strong foundation in programming, algorithms,
              and software development, enabling me to create practical and
              innovative digital solutions.
            </p>
          </div>

          <div id="divs" className="mt-10 flex flex-col gap-3 relative">
            <div className="shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] sticky top-30 z-6 bg-[#E0F11F] my-2 rounded-xl flex justify-between px-4 py-8 items-center">
              <div className="w-1/2">
                <h4 className="font-semibold text-2xl">MERN Stack</h4>
                <p className="text-lg mt-2 leading-6 pr-3">
                  Full-stack web development
                </p>
              </div>

              <div className="text-6xl px-4 border-1 border-[#E0F11F] border-l-[#1212124D] font-bold text-[#1212124D] text-center w-1/2">
                92%
              </div>
            </div>

            <div className="shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] sticky top-30 z-7 bg-[#E0F11F] my-2 rounded-xl flex justify-between px-4 py-8 items-center">
              <div className="w-1/2">
                <h4 className="font-semibold text-2xl">Programming</h4>
                <p className="text-lg mt-2 leading-6 pr-3">
                  Python, C, C++, Java - coding & problem-solving
                </p>
              </div>

              <div className="text-6xl px-4 border-1 border-[#E0F11F] border-l-[#1212124D] font-bold text-[#1212124D] text-center w-1/2">
                85%
              </div>
            </div>

            <div className="shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] sticky top-30 z-8 bg-[#E0F11F] my-2 rounded-xl flex justify-between px-4 py-8 items-center">
              <div className="w-1/2">
                <h4 className="font-semibold text-2xl">OpenCV</h4>
                <p className="text-lg mt-2 leading-6 pr-3">
                  Computer vision & image processing
                </p>
              </div>

              <div className="text-6xl px-4 border-1 border-[#E0F11F] border-l-[#1212124D] font-bold text-[#1212124D] text-center w-1/2">
                80%
              </div>
            </div>

            <div className="shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] sticky top-30 z-9 bg-[#E0F11F] my-2 rounded-xl flex justify-between px-4 py-8 items-center">
              <div className="w-1/2">
                <h4 className="font-semibold text-2xl">Git / GitHub</h4>
                <p className="text-lg mt-2 leading-6 pr-3">
                  Version control & collaboration
                </p>
              </div>

              <div className="text-6xl px-4 border-1 border-[#E0F11F] border-l-[#1212124D] font-bold text-[#1212124D] text-center w-1/2">
                75%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
