import { useState } from "react";
import Button from "../atoms/Button";
import NavItem from "../atoms/NavItem";
import { FaArrowRight, FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='z-50 flex justify-between lg:items-center w-full shrink-0 px-8 md:px-16 py-10 lg:px-10 max-w-[1440px] mx-auto'>
      <span className='z-50 lg:z-0 font-extrabold text-xl md:text-3xl tracking-tight'>
        {"{ FB }"}
      </span>

      <button
        className='lg:hidden z-50 lg:z-0 bg-primary-olive rounded-full p-2'
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <FaXmark className='w-5 h-5 text-white' />
        ) : (
          <FaBars className='w-5 h-5 text-white' />
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
          <NavItem link='#' title='About Me' onClick={() => setIsOpen(false)} />
          <NavItem link='#' title='Projects' onClick={() => setIsOpen(false)} />
          <NavItem link='#' title='Contact' onClick={() => setIsOpen(false)} />
        </ul>

        <div className='block lg:hidden h-px w-full bg-[#E4E1D8]'></div>

        <Button variant='primary' className='w-full lg:w-auto justify-center'>
          Let's talk
          <FaArrowRight />
        </Button>
      </div>
    </nav>
  );
}
