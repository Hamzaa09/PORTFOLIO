import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import React from "react";

const Project = () => {
  useGSAP(() => {
    gsap.from("#proj-head", {
      scrollTrigger: {
        trigger: "#proj-head",
        start: "top 90%",
        end: "+=300",
      },
      yPercent: 100,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
    });

    gsap.from("#top-grid a", {
      scrollTrigger: {
        trigger: "#top-grid",
        start: "top 90%",
        end: "+=300",
      },
      yPercent: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.06,
      ease: "power1.inOut",
    });

    gsap.from("#bottom-grid a", {
      scrollTrigger: {
        trigger: "#bottom-grid",
        start: "top 90%",
        end: "+=300",
      },
      yPercent: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.06,
      ease: "power1.inOut",
    });
  });
  return (
    <section
      id="projects"
      className="max-w-[987px] mx-auto px-4 sm:px-6 lg:px-8 bg-[#121212] pt-40"
    >
      <div
        id="proj-head"
        className="flex h-10 justify-between items-center gap-10 md:gap-15"
      >
        <h2 className="text-[#E0F11F] text-4xl font-bold font-[pfTwo]">
          PROJECTS
        </h2>

        <div className="w-full h-full flex items-center">
          <div className="h-1 w-full bg-[#F0F0F033]"></div>
          <div className="h-1 w-8 md:w-10 bg-[#E0F11F]"></div>
        </div>
      </div>

      {/* //body */}

      <div className="flex flex-col mt-10">
        <div id="top-grid" className="grid lg:grid-cols-2 gap-5 my-5">
          <a
            href="https://e-commerce-store-clientside.vercel.app"
            target="blank"
            className="group relative rounded-md h-70 overflow-hidden hover:cursor-pointer"
          >
            <img
              src="/project_3.jpg"
              alt="e-commerce-store"
              className="object-cover w-full h-full group-hover:scale-105 duration-500 rounded-md"
            />

            <span className="absolute left-[-200px] bottom-0 group-hover:left-0 group-hover:opacity-100 duration-500 bg-[#e0f11f] opacity-0 p-5 font-semibold text-xl rounded-tr-xl">
              E-Commerce Store (MERN)
            </span>
          </a>

          <a
            href="https://mern-chat-app-client-six.vercel.app"
            target="blank"
            className="group relative rounded-md h-70 overflow-hidden hover:cursor-pointer"
          >
            <img
              src="/project_5.png"
              alt="chat-app"
              className="object-cover w-full h-full group-hover:scale-105 duration-500 rounded-md"
            />

            <span className="absolute left-[-200px] bottom-0 group-hover:left-0 group-hover:opacity-100 duration-500 bg-[#e0f11f] opacity-0 p-5 font-semibold text-xl rounded-tr-xl">
              Chat Application
            </span>
          </a>
        </div>

        <div id="bottom-grid" className="grid lg:grid-cols-2 gap-5 lg:my-5">
          <a
            href="https://mojito-gsap-omega.vercel.app/"
            target="blank"
            className="group relative rounded-md h-70 overflow-hidden hover:cursor-pointer"
          >
            <img
              src="/project_6.png"
              alt=""
              className="object-cover w-full h-full group-hover:scale-105 duration-500 rounded-md"
            />

            <span className="absolute left-[-200px] bottom-0 group-hover:left-0 group-hover:opacity-100 duration-500 bg-[#e0f11f] opacity-0 p-5 font-semibold text-xl rounded-tr-xl">
              Animated Website
            </span>
          </a>

          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7403464015386959873/"
            target="blank"
            className="group relative rounded-md h-70 overflow-hidden hover:cursor-pointer"
          >
            <img
              src="/project_7.png"
              alt=""
              className="object-cover w-full h-full group-hover:scale-105 duration-500 rounded-md"
            />

            <span className="absolute left-[-200px] bottom-0 group-hover:left-0 group-hover:opacity-100 duration-500 bg-[#e0f11f] opacity-0 p-5 font-semibold text-xl rounded-tr-xl">
              Hand As Controller
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
