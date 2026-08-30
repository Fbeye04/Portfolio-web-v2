import TechCard from "../components/molecules/TechCard";
import SectionHeading from "../components/molecules/SectionHeading";

const myToolsData = [
  {
    icon: "devicon-html5-plain",
    name: "HTML5",
  },
  {
    icon: "devicon-css3-plain",
    name: "CSS3",
  },
  {
    icon: "devicon-javascript-plain",
    name: "JavaScript",
  },
  {
    icon: "devicon-tailwindcss-plain",
    name: "Tailwind",
  },
  {
    icon: "devicon-react-original",
    name: "React",
  },
  {
    icon: "devicon-nodejs-plain-wordmark",
    name: "Node.js",
  },
  {
    icon: "devicon-express-original",
    name: "Express.js",
  },
  {
    icon: "devicon-mysql-original",
    name: "MySQL",
  },
  {
    icon: "devicon-git-plain",
    name: "Git",
  },
];

export default function Tools() {
  return (
    <section className='flex flex-col items-start gap-4 md:gap-6 lg:gap-10 '>
      <SectionHeading
        headline='</> technologies'
        title='tech stack'></SectionHeading>

      {/* tech tools */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:justify-start lg:gap-6 gap-4 w-full'>
        {myToolsData.map((tools) => (
          <TechCard
            key={tools.name}
            iconClass={tools.icon}
            techName={tools.name}
          />
        ))}
      </div>
    </section>
  );
}
