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
    <section
      id='contact'
      className='scroll-mt-32 flex flex-col lg:flex-row gap-5 lg:gap-10'>
      <div className='flex flex-col items-start gap-4 md:gap-6 lg:flex-1'>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-2 text-xs md:text-lg text-primary-olive font-bold'>
            <div>{"</>"}</div>
            <span className='uppercase'>Contact</span>
          </div>

          <h2 className="relative w-fit pb-4 font-bold text-2xl md:text-4xl after:absolute after:left-0 after:bottom-0 after:h-1 after:w-1/2 after:rounded-md after:bg-primary-olive after:content-['']">
            Let's Work!
          </h2>
        </div>

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
