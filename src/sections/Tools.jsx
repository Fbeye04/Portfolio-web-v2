import ScrollIndicator from "../components/atoms/ScrollIndicator";
import TechCard from "../components/molecules/TechCard";
import { FaCircle } from "react-icons/fa6";

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
    name: "Tailwind CSS",
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
    <section className='flex flex-col px-8 md:px-16 lg:px-10 pb-5 snap-start h-full max-w-[1440px] mx-auto'>
      <div className='flex-1 flex flex-col items-center gap-4 md:gap-6 lg:gap-10 lg:mt-10'>
        {/* judul dan deskripsi section */}
        <div className='flex flex-col items-center gap-4 md:gap-6'>
          <div className='text-primary-olive bg-light-olive font-semibold flex justify-center items-center gap-1 p-2 rounded-[20px] text-xs md:text-sm'>
            <div>{"</>"}</div>
            <span className='uppercase'>Technologies & Tools</span>
          </div>

          <h2 className='font-extrabold text-3xl md:text-5xl'>
            <span className='text-primary-olive'>{"< "}</span>
            My Tools
            <span className='text-primary-olive'>{" />"}</span>
          </h2>

          <p className='text-center max-w-[70%] md:text-xl'>
            Here are some tools that I usually use for website creation or
            design
          </p>

          <div className='flex items-center gap-2'>
            <div className='bg-primary-olive h-[2px] w-10 md:w-20 rounded-[10px]'></div>
            <FaCircle className='text-primary-olive w-3 h-3' />
            <div className='bg-primary-olive h-[2px] w-10 md:w-20 rounded-[10px]'></div>
          </div>
        </div>

        {/* tech tools */}
        <div className='grid grid-cols-3 lg:flex lg:flex-wrap lg:justify-center lg:gap-6 gap-4 w-full lg:max-w-5xl'>
          {myToolsData.map((tools) => (
            <TechCard
              key={tools.name}
              iconClass={tools.icon}
              techName={tools.name}
            />
          ))}
        </div>
      </div>

      <ScrollIndicator invitation='See my previous project' />
    </section>
  );
}
