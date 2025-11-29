import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const Footer = () => {
  const list = ["FB", "INS", "LI", "TW"];

  return (
    <section className="bg-[#121212] sticky bottom-0 pt-25 flex flex-col gap-3 justify-center h-[320px] overflow-hidden z-[-10]">
      <Marquee
        speed={100}
        className="overflow-hidden absolute bottom-[-20px] left-0 z-30"
      >
        <ul className="flex overflow-hidden">
          {list.map((item, index) => (
            <li
              key={index}
              className="flex justify-center items-center w-fit group"
            >
              <h2 className="font-[pfThree] text-[240px] lg:text-[320px] font-extrabold text-[#E0F11F] ml-10 leading-none mt-10 group-hover:text-[#f0f0f0] group-hover:line-through group-hover:cursor-pointer">
                {item}
              </h2>

              <div className="w-13 h-13 lg:w-15 lg:h-15 ml-10">
                <svg viewBox="0 0 32 32" id="svg11225229842">
                  <path
                    d="M 15.167 32 C 13.935 24.94 6.989 18.305 0 16.833 L 0 15.083 C 7.033 13.403 13.791 7.294 15.167 0 L 16.917 0 C 18.113 7.107 25.028 13.562 32 15.083 L 32 16.833 C 25.157 18.251 18.071 24.909 16.917 32 Z"
                    fill='var(--token-c99a84af-9d9d-4867-bcd0-8455e9249c96, rgba(240, 240, 240, 0.1)) /* {"name":"Light 10%"} */'
                  ></path>
                </svg>
              </div>
            </li>
          ))}
        </ul>
      </Marquee>
    </section>
  );
};

export default Footer;
