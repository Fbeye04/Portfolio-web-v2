import ContactForm from "../components/organisms/ContactForm";
import SectionHeading from "../components/molecules/SectionHeading";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa6";

const socialMedia = [
  {
    icon: <FaEnvelope />,
    media: "Email",
    link: "mailto:fachrezibarus@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    media: "LinkedIn",
    link: "https://linkedin.com/in/muhammad-fachrezi-barus",
  },
  {
    icon: <FaGithub />,
    media: "Github",
    link: "https://github.com/fachrezibarus",
  },
];

export default function Contact() {
  return (
    <section
      id='contact'
      className='scroll-mt-32 flex flex-col lg:flex-row gap-5 lg:gap-10'>
      <div className='flex flex-col items-start gap-4 md:gap-6 lg:flex-1'>
        <SectionHeading
          headline='</> contact'
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
