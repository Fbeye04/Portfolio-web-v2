import TechCard from "../components/molecules/TechCard";
import SectionHeading from "../components/molecules/SectionHeading";
import { motion } from "framer-motion";

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
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className='flex flex-col items-start gap-4 md:gap-6 lg:gap-10 '>
      <SectionHeading
        label='</> technologies'
        title='tech stack'></SectionHeading>

      {/* tech tools */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:justify-start lg:gap-6 gap-4 w-full'>
        {myToolsData.map((tools) => (
          <motion.div key={tools.name} variants={itemVariants}>
            <TechCard iconClass={tools.icon} techName={tools.name} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
