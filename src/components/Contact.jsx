import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  useGSAP(() => {
    gsap.from("#contact-head", {
      scrollTrigger: {
        trigger: "#contact-head",
        start: "top 90%",
        end: "+=300",
      },
      yPercent: 100,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
    });

    gsap.from("#text-1", {
      scrollTrigger: {
        trigger: "#text-1",
        start: "top 90%",
        end: "+=300",
      },
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    });

    gsap.from("#text-2", {
      scrollTrigger: {
        trigger: "#text-2",
        start: "top 90%",
        end: "+=300",
      },
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    });

    gsap.from("#div-1", {
      scrollTrigger: {
        trigger: "#div-1",
        start: "top 90%",
        end: "+=300",
      },
      yPercent: 50,
      opacity: 0,
      duration: 0.6,
      ease: "expo.out",
    });

    gsap.from("#text-area", {
      scrollTrigger: {
        trigger: "#text-area",
        start: "top 90%",
        end: "+=300",
      },
      yPercent: 50,
      opacity: 0,
      duration: 0.6,
      ease: "expo.out",
    });

    gsap.from("#send-btn", {
      scrollTrigger: {
        trigger: "#send-btn",
        start: "top 90%",
        end: "+=300",
      },
      yPercent: 50,
      opacity: 0,
      duration: 0.6,
      ease: "expo.out",
    });
  });

  const list = ["FB", "INS", "LI", "TW"];

  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setform({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        setform({
          name: "",
          email: "",
          message: "",
        })
      )
      .catch();
  };

  return (
    <section
      id="contact"
      className="max-w-[987px] mx-auto px-4 sm:px-6 lg:px-8 bg-[#121212] pt-40 z-20"
    >
      <div
        id="contact-head"
        className="flex h-10 justify-between items-center gap-10 md:gap-15"
      >
        <h2 className="text-[#E0F11F] text-4xl font-bold font-[pfTwo]">
          CONTACT
        </h2>

        <div className="w-full h-full flex items-center">
          <div className="h-1 w-full bg-[#F0F0F033]"></div>
          <div className="h-1 w-8 md:w-10 bg-[#E0F11F]"></div>
        </div>
      </div>

      {/* //body */}

      <div className="flex flex-col lg:flex-row gap-5 pt-20">
        <div>
          <p
            id="text-1"
            className="text-xl font-[pfFour] text-[#F0F0F0] leading-9 mb-10"
          >
            Looking to start a project or you need consultation? Feel free to
            contact me.
          </p>

          <p
            id="text-2"
            className="text-xl font-[pfOne] text-[#F0F0F0] leading-9"
          >
            Karachi West, Pakistan <br />
            <a href="" target="_blank" className="text-[#e0f11f]">
              hamza036513@gmail.com
            </a>
          </p>
        </div>

        <form
          className="w-full lg:w-1/2 flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <div id="div-1" className="flex gap-5 justify-between items-center">
            <input
              onChange={handleChange}
              name="name"
              value={form.name}
              type="text"
              className="w-1/2 text-[#f0f0f0] font-[pfOne] bg-[#f0f0f01a] outline-none rounded-lg p-3"
              placeholder="Muhammad Hamza"
            />
            <input
              onChange={handleChange}
              name="email"
              value={form.email}
              type="email"
              className="w-1/2 text-[#f0f0f0] font-[pfOne] bg-[#f0f0f01a] outline-none rounded-lg p-3"
              placeholder="hamza@gmail.com"
            />
          </div>
          <textarea
            onChange={handleChange}
            name="message"
            value={form.message}
            id="text-area"
            cols="30"
            rows="5"
            className="text-[#f0f0f0] font-[pfOne] bg-[#f0f0f01a] outline-none rounded-lg p-3"
            placeholder="Message..."
          ></textarea>

          <button
            id="send-btn"
            className="button-anim mb-5 bg-[#e0f11f] rounded-lg py-2 font-semibold text-lg hover:bg-[#f0f0f080] hover:text-[#f0f0f0] hover:cursor-pointer active:bg-[#f0f0f0ab] duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
