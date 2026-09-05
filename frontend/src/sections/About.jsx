import { FaCode, FaBullseye, FaUserGroup, FaDownload } from "react-icons/fa6";
import LinkButton from "../components/atoms/LinkButton";
import SectionHeading from "../components/molecules/SectionHeading";
import { motion } from "framer-motion";

const myStrengths = [
  {
    icon: <FaBullseye />,
    title: "Problem Solver",
  },
  {
    icon: <FaCode />,
    title: "Clean & Scalable",
  },
  {
    icon: <FaUserGroup />,
    title: "Team Player",
  },
];

export default function About() {
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
    <section
      id='about'
      className='scroll-mt-32 flex flex-col items-start gap-5 lg:gap-10'>
      <SectionHeading label='// introduction' title='about me'></SectionHeading>

      <div className='flex flex-col gap-5 lg:gap-4'>
        {/* deskripsi */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className='text-base md:text-xl text-warm-gray'>
          I'm a Full-Stack Developer trained through DBS Foundation and
          Harisenin.com, combining scientific logic with a focus on building
          responsive interfaces and scalable APIs.
        </motion.p>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='flex flex-row gap-4 lg:gap-0'>
          {myStrengths.map((features) => (
            <motion.div
              key={features.title}
              variants={itemVariants}
              className='flex items-center gap-4 w-full'>
              <div className='bg-primary-olive w-[2px] h-16 lg:h-7 rounded-lg'></div>

              <div className='flex flex-col lg:flex-row items-start lg:items-center gap-2 flex-1'>
                <div className='text-dark-olive text-xl'>{features.icon}</div>

                <span className='text-base md:text-xl font-semibold text-dark-olive'>
                  {features.title}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* tombol download */}
      <LinkButton
        variant='primary'
        link='https://drive.google.com/file/d/1uvPr9aZxY_zGTZJhuNWpPml364rO5wCZ/view?usp=sharing'
        className='lg:flex-shrink-0 w-full lg:w-auto'>
        See My CV
        <FaDownload />
      </LinkButton>
    </section>
  );
}
