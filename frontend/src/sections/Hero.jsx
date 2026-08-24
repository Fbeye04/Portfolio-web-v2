import { FaCode } from "react-icons/fa6";
import heroImg from "../assets/hero.jpeg";
import LinkButton from "../components/atoms/LinkButton";

const socialMedia = [
  {
    icon: "devicon-linkedin-plain",
    media: "LinkedIn",
    link: "linkedin.com/in/muhammad-fachrezi-barus",
  },
  {
    icon: "devicon-github-original",
    media: "Github",
    link: "github.com/fachrezibarus",
  },
];

export default function Hero() {
  return (
    <section
      id='hero'
      className='scroll-mt-32 flex flex-col-reverse items-center lg:flex-row lg:justify-between'>
      {/* sisi kiri */}
      <div className='relative flex flex-col items-center lg:items-start justify-center gap-4 lg:gap-6 pt-10 lg:pt-0'>
        <span className='font-semibold text-dark-olive text-base md:text-2xl text-center lg:text-start'>
          Hello, I'm
        </span>

        <h1 className='font-bold text-2xl md:text-5xl lg:text-[60px] leading-none text-center lg:text-start'>
          <span className='block'>Muhammad</span>
          <span className='block'>Fachrezi Barus</span>
        </h1>

        <div className='flex items-center gap-2 lg:gap-3 text-dark-olive font-semibold'>
          <FaCode className='text-base md:text-xl' />
          <span className='text-base md:text-2xl'>Full Stack Developer</span>
        </div>

        <p className='text-warm-gray text-base md:text-xl text-center lg:text-start'>
          <span className='block'>I build modern, responsive web</span>
          <span className='block'>applications with clean code and </span>
          <span className='block'>great user experience.</span>
        </p>

        <div className='flex gap-10 lg:gap-14'>
          {socialMedia.map((socmed) => (
            <div key={socmed.media}>
              <LinkButton variant='ghost' link={socmed.link}>
                <i className={`${socmed.icon} colored`}></i>
                {socmed.media}
              </LinkButton>
            </div>
          ))}
        </div>
      </div>

      {/* sisi kanan */}
      <div className='relative'>
        <div className='absolute z-0 bg-primary-olive bottom-0 right-0 w-[150px] h-[180px] md:w-[280px] lg:h-[300px] rounded-[20px] translate-y-[5%] lg:translate-y-0'></div>

        <div className='relative z-10 -translate-x-[5%] border-4 border-white rounded-[20px] w-[180px] md:w-[260px] lg:w-[300px] max-w-full'>
          <img
            src={heroImg}
            className='w-full rounded-[20px]'
            alt='Fachrezi Photo Profile'
          />
        </div>

        <div className='absolute z-20 bg-primary-olive p-3 rounded-full border-4 border-white top-0 -left-5 lg:-left-8'>
          <FaCode className='w-5 h-5 md:w-8 md:h-8 text-off-white' />
        </div>
      </div>
    </section>
  );
}
