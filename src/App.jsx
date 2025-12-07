import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Info from "./components/Info";
import About from "./components/About";
import Project from "./components/Project";
import Education from "./components/Education";
import Contact from "./components/Contact";
import InfiniteScroll from "./components/InfiniteScroll";
import Footer from "./components/Footer";

gsap.registerPlugin(SplitText, ScrollTrigger);

function App() {
  return (
    <>
      <div className="sticky w-full h-fit bg-[#121212] z-50">
        <Nav />
        <Hero />
        <Info />
        <About />
        <Project />
        <InfiniteScroll />
        <Education />
        <Contact />
      </div>
        <Footer />
    </>
  );
}

export default App;
