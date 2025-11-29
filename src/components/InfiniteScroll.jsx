import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";

const InfiniteScroll = () => {
  const list = ["MERN", "JAVA", "PYTHON", "C/C++", "OPEN_CV"];
  return (
    <section className="bg-[#121212] pt-35 flex flex-col gap-3 justify-center [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_16%,rgb(0,0,0)_84%,rgba(0,0,0,0)_100%)]">
      <Marquee speed={30}>
        <ul className="flex overflow-hidden">
          {list.map((item, index) => (
            <li key={index} className="flex justify-center items-center gap-5">
              <h2 className="font-[pfThree] text-[90px] lg:text-[128px] font-extrabold text-[#E0F11F] leading-none ml-5">
                {item}
              </h2>

              <div className="w-8 h-8 lg:w-10 lg:h-10">
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

      <Marquee speed={30} direction="right">
        <ul className="flex overflow-hidden">
          {list.map((item, index) => (
            <li key={index} className="flex justify-center items-center gap-5">
              <h2 className="font-[pfThree] text-[90px] lg:text-[128px] font-extrabold text-[#E0F11F] leading-none ml-5">
                {item}
              </h2>

              <div className="w-8 h-8 lg:w-10 lg:h-10">
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

export default InfiniteScroll;
