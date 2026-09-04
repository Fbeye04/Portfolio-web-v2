import ContactForm from "../components/organisms/ContactForm";
import SectionHeading from "../components/molecules/SectionHeading";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

const socialMedia = [
  {
    icon: <FaEnvelope />,
    media: "Email",
    link: "mailto:fachrezibarus@gmail.com",
    display: "fachrezibarus@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    media: "LinkedIn",
    link: "https://linkedin.com/in/muhammad-fachrezi-barus",
    display: "Muhammad Fachrezi Barus",
  },
  {
    icon: <FaGithub />,
    media: "Github",
    link: "https://github.com/fachrezibarus",
    display: "fachrezibarus",
  },
];

export default function Contact() {
  return (
    <section
      id='contact'
      className='scroll-mt-32 flex flex-col lg:flex-row gap-5 lg:gap-10'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='flex flex-col items-start gap-4 md:gap-6 lg:flex-1'>
        <SectionHeading
          label='</> contact'
          title="Let's Work!"></SectionHeading>

        <p className='text-base md:text-xl text-start text-warm-gray'>
          I'm currently open to new opportunities and exciting projects.
          <span className='block mt-2'>Feel free to reach out!</span>
        </p>

        <div className='hidden lg:flex flex-row lg:flex-col gap-5'>
          {socialMedia.map((socmed) => (
            <div
              className='flex flex-col lg:flex-row items-center gap-1 lg:gap-5'
              key={socmed.media}>
              <div className='bg-light-olive rounded-full p-3 text-2xl text-dark-olive'>
                {socmed.icon}
              </div>

              <div className='flex flex-col text-base md:text-xl'>
                <span className='font-semibold'>{socmed.media}</span>
                <a href={socmed.link} target='_blank' rel='noopener noreferrer'>
                  {socmed.display}
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className='flex-1'>
        <ContactForm />
      </motion.div>
    </section>
  );
}
