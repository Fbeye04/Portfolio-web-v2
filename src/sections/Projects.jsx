import ScrollIndicator from "../components/atoms/ScrollIndicator";
import Button from "../components/atoms/Button";
import { FaAngleRight, FaFilm } from "react-icons/fa6";
import ProjectCard from "../components/organisms/ProjectCard";

const projectData = [
  {
    image: "",
    title: "Chill Movie Platform",
    icon: <FaFilm />,
    desc: "",
    tech: "",
  },
];

export default function Projects() {
  return (
    <section className='flex flex-col px-8 md:px-16 lg:px-10 pb-5 snap-start h-full max-w-[1440px] mx-auto'>
      <div className='flex-1 flex flex-col items-start gap-4 md:gap-6 lg:gap-10 lg:mt-10'>
        {/* judul dan deskripsi section */}
        <div className='flex flex-col items-start gap-4 md:gap-6'>
          <div className='text-primary-olive bg-light-olive font-semibold flex items-center gap-1 p-2 rounded-[20px] text-xs md:text-sm'>
            <div>{"//"}</div>
            <span className='uppercase'>Portfolio</span>
          </div>

          <h2 className='font-extrabold text-3xl md:text-5xl'>
            <span className='text-primary-olive'>{"// "}</span>
            Top Projects
          </h2>

          <p className='md:text-xl'>
            List of my best projects that I have done
          </p>
        </div>

        {/* Proyek */}
        <div>
          {projectData.map((project) => (
            <ProjectCard
              title={project.title}
              icon={project.icon}
              desc={project.desc}
              tech={project.tech}
            />
          ))}
        </div>

        {/* tombol */}
        <Button variant='primary'>
          See More
          <FaAngleRight />
        </Button>
      </div>

      <ScrollIndicator invitation='Want to collaborate? contact me' />
    </section>
  );
}
