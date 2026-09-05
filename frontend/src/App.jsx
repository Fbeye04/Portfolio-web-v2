import Navbar from "./components/organisms/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Tools from "./sections/Tools";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { FaArrowUp } from "react-icons/fa6";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import Lenis from "lenis";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <div>
      <header
        className={`sticky z-50 top-0  w-full ${isScrolled ? "bg-off-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"} transition-all duration-300`}>
        <Navbar />
      </header>

      <main className='flex flex-col gap-20 max-w-5xl mx-auto my-10 lg:my-16 px-7 md:px-16 lg:px-0'>
        <Hero />
        <About />
        <Tools />
        <Projects />
        <Contact />
      </main>

      <footer className='w-full'>
        <div className='flex justify-between lg:items-center py-5 md:py-10 lg:py-7 px-7 lg:px-0 border-t-[1px] border-warm-gray max-w-5xl mx-auto text-warm-gray'>
          <p className='min-w-0 flex-1'>
            &copy; 2025 Fachrezi.
            <span className='block'>All rights reserved.</span>
          </p>

          <a
            href='#hero'
            className='flex shrink-0 whitespace-nowrap items-center gap-2'>
            Back to top
            <FaArrowUp />
          </a>
        </div>
      </footer>
    </div>
  );
}
