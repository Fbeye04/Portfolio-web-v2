import ContactForm from "../components/organisms/ContactForm";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa6";

const socialMedia = [
  {
    icon: <FaEnvelope />,
    media: "Email",
    link: "fachrezibarus@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    media: "LinkedIn",
    link: "linkedin.com/in/muhammad-fachrezi-barus",
  },
  {
    icon: <FaGithub />,
    media: "Github",
    link: "github.com/fachrezibarus",
  },
];

export default function Contact() {
  return (
    <section className='flex flex-col lg:flex-row gap-5 lg:gap-10 px-8 md:px-16 lg:px-10 py-5 snap-start h-full max-w-[1440px] mx-auto'>
      <div className='flex flex-col items-center lg:items-start gap-4 md:gap-6 w-full lg:w-auto lg:flex-1'>
        <div className='text-primary-olive bg-light-olive font-semibold flex justify-center items-center gap-1 p-2 rounded-[20px] text-xs md:text-sm'>
          <div>{"</>"}</div>
          <span className='uppercase'>Get in touch</span>
        </div>

        <h2 className='font-extrabold text-3xl md:text-5xl'>
          Let's Work
          <span className='text-dark-olive block'>Together!</span>
        </h2>

        <p className='text-sm md:text-xl text-center lg:text-start'>
          I'm currently open to new opportunities and exciting projects. Whether
          you have a question or just want to say hi, my inbox is always open.
        </p>

        <div className='flex flex-col gap-5'>
          {socialMedia.map((socmed) => (
            <div className='flex items-center gap-5' key={socmed.media}>
              <div className='bg-light-olive rounded-full p-3 text-2xl text-dark-olive'>
                {socmed.icon}
              </div>

              <div className='flex flex-col text-lg'>
                <span className='font-bold'>{socmed.media}</span>
                <a href={socmed.link} rel='noopener noreferrer'>
                  {socmed.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex-1'>
        <ContactForm />
      </div>
    </section>
  );
}
