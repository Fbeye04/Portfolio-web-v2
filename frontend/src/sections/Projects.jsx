import {
  FaFilm,
  FaUtensils,
  FaMap,
  FaArrowUpRightFromSquare,
  FaArrowRight,
} from "react-icons/fa6";
import projectOne from "../assets/chill.png";
import projectTwo from "../assets/restomate.png";
import projectThree from "../assets/rest-countries-app.png";
import LinkButton from "../components/atoms/LinkButton";
import SectionHeading from "../components/molecules/SectionHeading";

const projectData = [
  {
    id: 1,
    image: projectOne,
    title: "Chill Movie Platform",
    icon: <FaFilm />,
    desc: "A movie streaming platform with browsing, search, and watchlist.",
    tech: ["React", "Tailwind CSS", "Node.js", "MySQL"],
    repo: "https://github.com/Fbeye04/chill-movie-streaming-react-part-4",
    demo: "https://chill-movie-streaming-react-part-4-vert.vercel.app/",
  },
  {
    id: 2,
    image: projectTwo,
    title: "Restomate",
    icon: <FaUtensils />,
    desc: "A restaurant web app with ordering, menu browsing, and reservation features.",
    tech: ["Javascript", "PWA", "IndexedDB"],
    repo: "https://github.com/Fbeye04/restaurant-service-catalogue-final",
    demo: "https://restomate.netlify.app/",
  },
  {
    id: 3,
    image: projectThree,
    title: "Rest Countries App",
    icon: <FaMap />,
    desc: "An interactive country explorer web featuring third-party REST API and filter/search capabilities.",
    tech: ["React", "Tailwind CSS", "Rest API"],
    repo: "https://github.com/Fbeye04/rest-countries-app-react",
    demo: "https://rest-countries-app-react.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id='projects'
      className='scroll-mt-32 flex flex-col items-start gap-4 md:gap-6'>
      <SectionHeading headline='// projects' title='Top Projects'>
        <LinkButton
          variant='ghost'
          link='https://github.com/Fbeye04?tab=repositories'>
          All projects
          <FaArrowRight />
        </LinkButton>
      </SectionHeading>

      <div className='flex flex-col gap-10'>
        {projectData.map((project) => (
          <div
            key={project.id}
            className='flex flex-col lg:flex-row gap-4 lg:gap-10'>
            <div className='flex-1 rounded-[15px]'>
              <img
                src={project.image}
                className='rounded-[15px]'
                alt={`${project.title}'s image`}
              />
            </div>

            <div className='flex-1 flex flex-col justify-center gap-2.5 lg:gap-5 px-4 lg:px-0'>
              <h3 className='font-semibold text-2xl lg:text-3xl'>
                {project.title}
              </h3>
              <p className='lg:text-lg'>{project.desc}</p>

              <div className='text-warm-gray font-medium'>
                {project.tech.map((technology, index) => (
                  <span key={technology}>
                    {technology}
                    {index < project.tech.length - 1 && " · "}
                  </span>
                ))}
              </div>

              <div className='flex gap-5'>
                <LinkButton
                  variant='secondary'
                  link={project.demo}
                  className='flex-1 justify-center'>
                  Live Demo
                  <FaArrowUpRightFromSquare />
                </LinkButton>

                <LinkButton
                  variant='secondary'
                  link={project.repo}
                  className='flex-1 justify-center'>
                  Source Code
                  <FaArrowUpRightFromSquare />
                </LinkButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
