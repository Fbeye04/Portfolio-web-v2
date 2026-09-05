import { useEffect, useState } from "react";
import LinkButton from "../atoms/LinkButton";
import NavItem from "../atoms/NavItem";
import { FaArrowRight, FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const sections = ["hero", "about", "tools", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveLink(
            visibleSection.target.id === "hero"
              ? null
              : visibleSection.target.id,
          );
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      },
    );

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className='flex justify-between lg:items-center py-5 md:py-7 border-b-[1px] border-warm-gray max-w-5xl mx-auto px-7 md:px-16 lg:px-0'>
      <span className='font-extrabold text-xl md:text-3xl tracking-tight'>
        {"{ FB }"}
      </span>

      <button
        className='lg:hidden z-50 lg:z-0 bg-primary-olive rounded-full p-2 md:p-3'
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <FaXmark className='w-5 h-5 md:w-7 md:h-7 text-white' />
        ) : (
          <FaBars className='w-5 h-5 md:w-7 md:h-7 text-white' />
        )}
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className='fixed inset-0 bg-black/40 z-30 lg:z-0 lg:hidden backdrop-blur-sm'
        />
      )}

      <div
        className={`fixed top-0 left-0 z-40 lg:z-0 w-full lg:w-auto bg-off-white pt-24 pb-10 px-10 ${isOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out lg:static lg:bg-transparent lg:p-0 lg:translate-y-0 flex flex-col lg:flex-row items-center gap-4`}>
        <ul className='flex flex-col lg:flex-row items-center gap-4 text-lg lg:text-xl'>
          <NavItem
            link='#about'
            title='About Me'
            onClick={() => setIsOpen(false)}
            isActive={activeLink === "about"}
          />
          <NavItem
            link='#tools'
            title='Tools'
            onClick={() => setIsOpen(false)}
            isActive={activeLink === "tools"}
          />
          <NavItem
            link='#projects'
            title='Projects'
            onClick={() => setIsOpen(false)}
            isActive={activeLink === "projects"}
          />
        </ul>

        <div className='block lg:hidden h-px w-full bg-[#E4E1D8]'></div>

        <LinkButton
          variant='primary'
          link='#contact'
          className='w-full lg:w-auto justify-center'>
          Let's talk
          <FaArrowRight />
        </LinkButton>
      </div>
    </nav>
  );
}
