import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import React from "react";

const Education = () => {
  useGSAP(() => {
    gsap.from("#edu-head", {
      scrollTrigger: {
        trigger: "#edu-head",
        start: "top 90%",
        end: "+=300",
      },
      yPercent: 100,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
    });

    gsap.from("#top-grid-edu div", {
      scrollTrigger: {
        trigger: "#top-grid-edu",
        start: "top 90%",
        end: "+=300",
      },
      yPercent: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.06,
      ease: "power1.inOut",
    });

    gsap.from("#bottom-grid-edu div", {
      scrollTrigger: {
        trigger: "#bottom-grid-edu",
        start: "top 90%",
        end: "+=300",
      },
      yPercent: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.06,
      ease: "power1.inOut",
    });
  });
  return (
    <section
      id="education"
      className="max-w-[987px] mx-auto px-4 sm:px-6 lg:px-8 bg-[#121212] pt-40"
    >
      <div
        id="edu-head"
        className="flex h-10 justify-between items-center gap-10 md:gap-15"
      >
        <h2 className="text-[#E0F11F] text-4xl font-bold font-[pfTwo]">
          EDUCATION
        </h2>

        <div className="w-full h-full flex items-center">
          <div className="h-1 w-full bg-[#F0F0F033]"></div>
          <div className="h-1 w-8 md:w-10 bg-[#E0F11F]"></div>
        </div>
      </div>

      {/* //body */}

      <div className="flex flex-col mt-15 gap-10">
        <div
          id="top-grid-edu"
          className="grid lg:grid-cols-2 gap-20 lg:gap-7 my-5"
        >
          <div className="group relative h-fit flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <h4 className="font-[pfFour] text-[#f0f0f0] text-xl">
                High School
              </h4>
              <span className="font-[pfOne] font-semibold text-[#f0f0f080]">
                The Educators, Karachi <br />
                2010 - 2022
              </span>
            </div>

            <p className="font-[pfOne] text-[#f0f0f0] text-lg">
              Built a strong academic foundation in computer science and
              mathematics, preparing for higher studies in programming and
              technology.
            </p>
          </div>

          <div className="group relative h-fit flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <h4 className="font-[pfFour] text-[#f0f0f0] text-xl">
                Intermediate
              </h4>
              <span className="font-[pfOne] font-semibold text-[#f0f0f080]">
                Formen College, Karachi <br />
                2022 - 2024
              </span>
            </div>

            <p className="font-[pfOne] text-[#f0f0f0] text-lg">
              Gained a solid foundation in computer science, programming
              concepts, and software development fundamentals.
            </p>
          </div>
        </div>

        <div
          id="bottom-grid-edu"
          className="grid lg:grid-cols-2 gap-20 lg:gap-7 my-5"
        >
          <div className="group relative h-fit flex flex-col gap-7 lg:pt-15 lg:border-1 lg:border-[#121212] lg:border-t-[#f0f0f080]">
            <div className="flex flex-col gap-2">
              <h4 className="font-[pfFour] text-[#f0f0f0] text-xl">
                Bachelor of Science in Computer Science
              </h4>
              <span className="font-[pfOne] font-semibold text-[#f0f0f080]">
                Dawood University, Karachi <br />
                2024 - 2028
              </span>
            </div>

            <p className="font-[pfOne] text-[#f0f0f0] text-lg">
              Currently building a strong foundation in software development
              with a focus on full-stack development & problem solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
