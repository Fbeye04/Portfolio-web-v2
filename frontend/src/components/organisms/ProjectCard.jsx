import Button from "../atoms/Button";
import { FaGlobe, FaGithub } from "react-icons/fa6";

export default function ProjectCard({ img, title, icon, desc, tech }) {
  return (
    <div className='bg-white snap-center w-full shrink-0 shadow-xl rounded-[15px] flex flex-col lg:flex-row'>
      {/* bagian atas */}
      <div className='w-full lg:w-1/2'>
        <img
          src={img}
          className='rounded-t-[15px] lg:rounded-tr-none lg:rounded-l-[15px] w-full h-auto lg:h-full object-cover object-top'
          alt={`${title} image`}
        />
      </div>

      {/* bagian bawah */}
      <div className='flex flex-col flex-1 gap-4 md:gap-6 lg:gap-4 p-5 md:p-10 w-full lg:w-1/2'>
        {/* ikon, judul, dan deskripsi */}
        <div className='flex items-start gap-3 md:gap-6 lg:gap-4'>
          <div className='p-3 rounded-[10px] text-xl md:text-5xl text-dark-olive bg-light-olive'>
            {icon}
          </div>

          <div className='flex flex-col gap-1'>
            <h3 className='font-extrabold text-xl md:text-3xl lg:text-4xl'>
              {title}
            </h3>
            <p className='text-sm md:text-xl lg:text-2xl'>{desc}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className='flex flex-wrap gap-3 mt-auto lg:max-w-[400px]'>
          {tech.map((item, index) => (
            <span
              key={index}
              className='bg-light-olive text-dark-olive font-medium rounded-[20px] py-2 px-4 text-base md:text-xl lg:text-2xl'>
              {item}
            </span>
          ))}
        </div>

        {/* Tombol */}
        <div className='flex items-center gap-3 w-full mt-auto'>
          <Button className='flex-1 text-sm'>
            <FaGlobe />
            Live Site
          </Button>
          <Button className='flex-1 text-sm'>
            <FaGithub />
            Repository
          </Button>
        </div>
      </div>
    </div>
  );
}
