import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(DrawSVGPlugin);

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef();
  const menubar = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true, defaults: { duration: 0.1 } });

      tl.current
        .to(".menu-button", { x: 10, y: 10 })
        .to(".first-bar", { rotate: 45 }, "<")
        .to(".second-bar", { x: -10, opacity: 0 }, "<")
        .to(".third-bar", { y: -24, width: "2.25rem", rotate: -45 })
        .from(".menu-bar", {
          height: 0,
          opacity: 0,
          duration: 0.25,
          ease: "power1.out",
        })
        .from(
          ".menu-bar a",
          {
            opacity: 0,
            duration: 0.2,
            stagger: 0.05,
            ease: "power1.out",
          },
          "-=0.1"
        );

      const sp = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.2,
        yoyo: true,
        defaults: { duration: 3, ease: "power2.inOut" },
      });

      sp.fromTo("#sign-path", { drawSVG: "98% 100%" }, { drawSVG: "100%" });
    });

    return () => ctx.revert();
  }, []); // run once

  useEffect(() => {
    isMenuOpen ? tl.current.play() : tl.current.reverse();
  }, [isMenuOpen]);

  const handleClick = () => {
    gsap.fromTo(
      ".slider",
      { xPercent: 350 },
      {
        xPercent: 900,
        duration: 0.6,
        ease: "power3.inOut",
      }
    );
  };

  return (
    <header className="sticky top-0 z-20 bg-[#121212] text-white h-fit pt-5">
      <div className="max-w-[987px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="relative">
            <button
              ref={tl}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-button group hamburger w-fit h-fit flex flex-col gap-2.5 hover:cursor-pointer text-white p-2"
            >
              <span
                className={`first-bar h-0.5 rounded-2xl w-8 lg:w-9 bg-white group-hover:bg-white/50 duration-300 ${
                  !isMenuOpen ? "group-hover:w-6 group-hover:lg:w-7" : ""
                }`}
              />
              <span
                className={`second-bar h-0.5 rounded-2xl w-4 lg:w-5 bg-white group-hover:bg-white/50 duration-300 ${
                  !isMenuOpen ? "group-hover:w-8 group-hover:lg:w-9" : ""
                } `}
              />
              <span
                className={`third-bar h-0.5 rounded-2xl w-6 lg:w-7 bg-white group-hover:bg-white/50 duration-300 ${
                  !isMenuOpen ? "group-hover:w-4 group-hover:lg:w-5" : ""
                }`}
              />
            </button>

            {/* Mobile Menu Dropdown */}
            <div
              ref={menubar}
              className={`menu-bar rounded-xl absolute top-10 mx-4 py-4 sm:px-6 h-fit w-fit z-50 bg-[#121212] ${
                !isMenuOpen ? "pointer-events-none" : ""
              }`}
            >
              <nav className="flex flex-col px-4">
                <a
                  onClick={() => setIsMenuOpen(false)}
                  href="#home"
                  id="nav-links"
                  className="text-[#E0F11F] text-4xl font-[pfTwo] hover:text-[#E0F11F] duration-500 py-1.5 transition-colors"
                >
                  HOME
                </a>
                <a
                  onClick={() => setIsMenuOpen(false)}
                  href="#about"
                  id="nav-links"
                  className="text-[#FOFOFO] text-4xl font-[pfTwo] hover:text-[#E0F11F] duration-500 py-1.5 transition-colors"
                >
                  ABOUT
                </a>
                <a
                  onClick={() => setIsMenuOpen(false)}
                  href="#projects"
                  id="nav-links"
                  className="text-[#FOFOFO] text-4xl font-[pfTwo] hover:text-[#E0F11F] duration-500 py-1.5 transition-colors"
                >
                  PROJECTS
                </a>
                <a
                  onClick={() => setIsMenuOpen(false)}
                  href="#education"
                  id="nav-links"
                  className="text-[#FOFOFO] text-4xl font-[pfTwo] hover:text-[#E0F11F] duration-500 py-1.5 transition-colors"
                >
                  EDUCATION
                </a>
                <a
                  onClick={() => setIsMenuOpen(false)}
                  href="#contact"
                  id="nav-links"
                  className="text-[#FOFOFO] text-4xl font-[pfTwo] hover:text-[#E0F11F] duration-500 py-1.5 transition-colors"
                >
                  CONTACT
                </a>
              </nav>
            </div>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <svg
              viewBox="0 0 300 120"
              className="h-13 lg:h-18 w-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 10 10 L 15 80 Q 20 95, 30 85 Q 40 75, 45 60 Q 50 45, 55 55 Q 60 65, 65 75 Q 70 85, 80 80 Q 95 70, 120 50 Q 150 30, 180 25 Q 210 20, 240 30 Q 270 40, 290 20"
                stroke="gray"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                id="sign-path"
                d="M 10 10 L 15 80 Q 20 95, 30 85 Q 40 75, 45 60 Q 50 45, 55 55 Q 60 65, 65 75 Q 70 85, 80 80 Q 95 70, 120 50 Q 150 30, 180 25 Q 210 20, 240 30 Q 270 40, 290 20"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Right side buttons */}
          <div className="relative flex items-center gap-2 sm:gap-3 mb-5">
            {/* Remix Button */}
            <a
              href="/Resume-Muammad_Hamza.pdf"
              download={"Resume-Muammad_Hamza.pdf"}
            >
              <button
                onClick={handleClick}
                className="relative px-8 sm:px-10 py-2.5 border-2 border-[rgb(36,34,38)] bg-white text-black rounded-full font-medium transition-colors text-sm sm:text-base hover:cursor-pointer active:translate-y-1 duration-500 z-30 overflow-hidden"
              >
                <span className="slider h-[150%] w-[20%] bg-[rgba(0,0,0,0.1)] absolute left-[-80%] top-[-30%] rotate-160"></span>
                CV
              </button>
            </a>
            <span className="w-full h-full absolute top-2 left-0 bg-white rounded-full z-10 border-2 border-[rgb(36,34,38)] flex justify-center items-center">
              <span className="w-[60%] h-full bg-white border-2 border-b-transparent border-[rgb(36,34,38)] z-20"></span>
            </span>
            <span className="w-full h-full absolute top-3 left-0 bg-white/60 rounded-full border-2 border-[rgb(36,34,38)]"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
