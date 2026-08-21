import {
  FaCode,
  FaRocket,
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGlobe,
  FaMobileScreen,
} from "react-icons/fa6";
import heroImg from "../assets/hero.jpeg";
import Button from "../components/atoms/Button";
import ScrollIndicator from "../components/atoms/ScrollIndicator";

export default function Hero() {
  return (
    <section className='grid grid-cols-2 lg:grid-cols-[4fr_4fr_2fr] grid-rows-[2fr_1fr_1fr_auto] md:grid-rows-[3fr_1fr_1fr_auto]  lg:grid-rows-[2fr_1fr_auto] main-layout px-8 md:px-16 lg:px-10 flex-1 snap-start pb-5 h-full max-w-[1440px] mx-auto'>
      <div className='relative area-text self-center lg:self-end flex flex-col gap-6 mt-6 lg:mb-4'>
        <div className='flex items-center gap-2'>
          <span className='font-medium md:text-xl'>Hello, I'm</span>
          <div className='h-[2px] w-10 rounded-md bg-gray-500'></div>
        </div>

        <h1 className='font-extrabold text-2xl md:text-5xl lg:text-[60px] leading-none'>
          <span className='block'>Muhammad</span>
          <span className='block'>Fachrezi</span>
          <span className='block'>Barus</span>
        </h1>

        <div className='flex items-center gap-2 lg:gap-3'>
          <FaCode className='w-4 h-4 lg:w-6 lg:h-6' />
          <span className='text-sm md:text-xl font-medium'>
            Full Stack Developer
          </span>
        </div>

        <p className='text-warm-gray text-xs md:text-lg lg:text-xl'>
          <span className='md:block'>I build modern, responsive web</span>
          <span className='md:block'>applications with clean code and </span>
          <span className='md:block'>great user experience.</span>
        </p>
      </div>

      <div className='area-profile justify-self-center lg:justify-self-start self-center'>
        <div className='relative z-0'>
          <div className='absolute bg-primary-olive bottom-0 right-0 translate-y-[10%] translate-x-[10%] w-[150px] h-[180px] md:w-[280px] md:h-[300px] rounded-[20px] shadow-md'></div>

          <div className='relative z-10 border-4 border-white rounded-[20px] w-[180px] md:w-[320px] lg:w-[350px] max-w-full shadow-md'>
            <img
              src={heroImg}
              className='w-full rounded-[20px]'
              alt='Fachrezi Photo Profile'
            />
          </div>

          <div className='absolute z-20 bg-dark-brown p-1.5 md:p-3 rounded-[10px] lg:rounded-[15px] -top-2 lg:-top-5 -left-3 shadow-md'>
            <FaCode className='w-5 h-5 md:w-8 md:h-8 text-soft-taupe' />
          </div>

          <div className='absolute z-20 bg-off-white p-1.5 md:p-3 rounded-[8px] lg:rounded-[15px] top-8 md:top-14 lg:top-12 -left-3 shadow-md'>
            <FaCode className='w-4 h-4 md:w-6 md:h-6 text-dark-brown' />
          </div>

          <div className='absolute z-20 flex items-center gap-2 md:gap-4 bg-off-white shadow-md p-1.5 md:p-3 rounded-[10px] lg:rounded-[15px] bottom-0 right-0 translate-x-[15%] translate-y-[10%] max-w-[240px]'>
            <div className='bg-dark-olive rounded-full p-1.5 md:p-3'>
              <FaRocket className='w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 text-off-white' />
            </div>

            <div>
              <p className='font-medium text-xs md:text-base'>
                Building Solutions
              </p>
              <div className='flex flex-col text-warm-gray font-medium text-xs md:text-base'>
                <span>turning ideas into</span>
                <span>real impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='relative flex flex-col gap-10 area-button md:items-center lg:items-start justify-self-stretch lg:mt-5 '>
        <div className='flex flex-col lg:flex-row gap-4 w-full md:w-[70%] lg:w-auto'>
          <Button variant='primary'>
            View My Work
            <FaArrowRight />
          </Button>

          <Button>
            Download CV
            <FaDownload />
          </Button>
        </div>

        <div className='flex justify-center gap-5'>
          <a href='#'>
            <FaGithub className='w-6 h-6' />
          </a>
          <a href='#'>
            <FaLinkedin className='w-6 h-6' />
          </a>
          <a href='#'>
            <FaEnvelope className='w-6 h-6' />
          </a>
        </div>
      </div>

      <div className='relative flex md:justify-around lg:flex-col gap-6 area-features justify-self-center lg:justify-self-start self-center border-2 border-primary-olive lg:border-none p-3 lg:p-0 rounded-xl lg:rounded-none md:w-[80%]'>
        <div className='flex flex-col lg:flex-row items-center gap-4 lg:border-l-4 lg:border-light-olive lg:pl-3'>
          <FaGlobe className='w-6 h-6 text-primary-olive' />

          <div className='flex flex-col items-center lg:items-start text-warm-gray text-sm md:text-base'>
            <span>Web</span>
            <span>Development</span>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row items-center gap-4 lg:border-l-4 lg:border-light-olive lg:pl-3'>
          <FaCode className='w-6 h-6 text-primary-olive' />

          <div className='flex flex-col items-center lg:items-start text-warm-gray text-sm md:text-base'>
            <span>Clean Code &</span>
            <span>Best Practices</span>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row items-center gap-4 lg:border-l-4 lg:border-light-olive lg:pl-3'>
          <FaMobileScreen className='w-6 h-6 text-primary-olive' />

          <div className='flex flex-col items-center lg:items-start text-warm-gray text-sm md:text-base'>
            <span>Responsive</span>
            <span>Design</span>
          </div>
        </div>
      </div>

      <ScrollIndicator
        invitation='Scroll to know me'
        className='area-scroll justify-self-center lg:self-end'
      />
    </section>
  );
}
