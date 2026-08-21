import ScrollIndicator from "../components/atoms/ScrollIndicator";
import Button from "../components/atoms/Button";
import {
  FaAngleRight,
  FaFilm,
  FaUtensils,
  FaMap,
  FaAngleLeft,
} from "react-icons/fa6";
import ProjectCard from "../components/organisms/ProjectCard";
import projectOne from "../assets/chill.png";
import projectTwo from "../assets/restomate.png";
import projectThree from "../assets/rest-countries-app.png";
import { useState, useRef } from "react";

const projectData = [
  {
    id: 1,
    image: projectOne,
    title: "Chill Movie Platform",
    icon: <FaFilm />,
    desc: "A movie streaming platform with browsing, search, and watchlist.",
    tech: ["React", "Tailwind CSS", "Node.js", "MySQL"],
  },
  {
    id: 2,
    image: projectTwo,
    title: "Restomate",
    icon: <FaUtensils />,
    desc: "A restaurant web app with ordering, menu browsing, and reservation features.",
    tech: ["Javascript", "PWA", "IndexedDB"],
  },
  {
    id: 3,
    image: projectThree,
    title: "Rest Countries App",
    icon: <FaMap />,
    desc: "An interactive country explorer web featuring third-party REST API and filter/search capabilities.",
    tech: ["React", "Tailwind CSS", "Rest API"],
  },
];

export default function Projects() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({
        left: containerWidth,
        behaviour: "smooth",
      });
    }
  };

  const handlePrevious = () => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({
        left: -containerWidth,
        behaviour: "smooth",
      });
    }
  };

  const handleScroll = (e) => {
    const container = e.target;
    const scrollPosition = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const activeIndex = Math.round(scrollPosition / containerWidth);
    setCurrentIndex(activeIndex + 1);
  };

  return (
    <section className='flex flex-col px-8 md:px-16 lg:px-10 pb-5 snap-start h-full max-w-[1440px] mx-auto'>
      <div className='flex-1 flex flex-col items-start gap-4 md:gap-6'>
        {/* judul dan deskripsi section */}
        <div className='flex flex-col items-start gap-4 md:gap-6 w-full'>
          <div className='text-primary-olive bg-light-olive font-semibold flex items-center gap-1 p-2 rounded-[20px] text-xs md:text-sm'>
            <div>{"//"}</div>
            <span className='uppercase'>Portfolio</span>
          </div>

          <h2 className='font-extrabold text-3xl md:text-5xl'>
            Top <span className='text-dark-olive'>Projects</span>
          </h2>

          <div className='flex justify-between w-full'>
            <p className='text-sm md:text-xl'>
              List of my best projects that I have done
            </p>

            <div className='hidden lg:flex items-center gap-5'>
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 1}
                className={`bg-light-olive p-3 rounded-full ${currentIndex === 1 && "opacity-50 cursor-not-allowed"}`}>
                <FaAngleLeft />
              </button>
              <span className='lg:text-xl font-semibold'>
                {currentIndex} / {projectData.length}
              </span>
              <button
                onClick={handleNext}
                disabled={currentIndex === projectData.length}
                className={`bg-light-olive p-3 rounded-full ${currentIndex === projectData.length && "opacity-50 cursor-not-allowed"} active:scale-[0.98]`}>
                <FaAngleRight />
              </button>
            </div>
          </div>
        </div>

        <div className='flex  flex-col items-center gap-2 w-full'>
          {/* Proyek */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className='flex w-full gap-6 overflow-x-auto snap-x snap-mandatory p-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
            {projectData.map((project) => (
              <ProjectCard
                key={project.id}
                img={project.image}
                title={project.title}
                icon={project.icon}
                desc={project.desc}
                tech={project.tech}
              />
            ))}
          </div>

          <div className='flex lg:hidden gap-4'>
            {projectData.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${currentIndex === index + 1 ? "bg-dark-olive" : "bg-gray-300"}`}></div>
            ))}
          </div>
        </div>

        {/* tombol */}
        <Button variant='primary' className='mx-auto'>
          See More
          <FaAngleRight />
        </Button>
      </div>

      <ScrollIndicator invitation='Want to collaborate? contact me' />
    </section>
  );
}
