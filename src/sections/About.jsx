import aboutImg from "../assets/about.jpeg";
import { FaCode, FaBullseye, FaUserGroup, FaDownload } from "react-icons/fa6";
import Button from "../components/atoms/Button";
import ScrollIndicator from "../components/atoms/ScrollIndicator";

export default function About() {
  return (
    <section className='flex flex-col px-8 md:px-16 lg:px-10 pb-5 snap-start h-full max-w-[1440px] mx-auto'>
      <div className='flex flex-col lg:flex-row items-center lg:gap-20 flex-1'>
        {/* sisi kiri */}
        <div className='w-full lg:flex-1 flex justify-center'>
          <div className='relative z-0'>
            <div className='absolute z-0 bg-primary-olive bottom-0 left-0 translate-y-[10%] -translate-x-[10%] w-[150px] h-[180px] md:w-[280px] md:h-[300px] rounded-[20px] shadow-md'></div>

            <div className='relative z-10 border-4 border-white rounded-[20px] w-[180px] md:w-[320px] lg:w-[400px] max-w-full shadow-md'>
              <img
                src={aboutImg}
                className="className='w-full rounded-[20px]"
                alt='Fachrezi Photo Profile'
              />
            </div>

            <div className='absolute z-20 bg-primary-olive p-3 rounded-full shadow-md top-0 -right-5 border-4 border-white'>
              <FaCode className='text-off-white w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10' />
            </div>
          </div>
        </div>

        {/* sisi kanan */}
        <div className='flex flex-col justify-center gap-3.5 md:gap-5 w-full flex-1 md:pt-5'>
          <div className='flex items-center gap-2'>
            <div className='h-[2px] w-10 rounded-md bg-primary-olive'></div>
            <span className='uppercase text-base md:text-lg text-primary-olive font-bold'>
              About me
            </span>
          </div>

          <h2 className='text-2xl md:text-4xl font-extrabold'>
            <span className='text-primary-olive'>// </span>
            So, Who Am I Exactly
          </h2>

          <p className='text-sm md:text-lg lg:max-w-[90%]'>
            I'm a Full-Stack Developer trained through DBS Foundation and
            Harisenin.com. I combine strong scientific logic with a focus on
            building responsive interfaces and scalable APIs, ready to create
            meaningful solutions in the professional industry.
          </p>

          {/* garis pembatas */}
          <div className='block w-full h-[0.5px] bg-warm-gray rounded-md'></div>

          {/* Features */}
          <div className='flex flex-col lg:flex-row gap-3'>
            <div className='flex items-center md:items-start gap-2 flex-1'>
              <div className='bg-light-olive p-3 rounded-[10px]'>
                <FaBullseye className='text-dark-olive lg:w-6 lg:h-6' />
              </div>

              <div className='flex flex-col gap-1 md:gap-2'>
                <span className='font-bold text-sm md:text-lg'>
                  Problem Solver
                </span>
                <span className='text-sm md:text-lg'>
                  I turn complex problems into simple solutions.
                </span>
              </div>
            </div>

            <div className='block lg:hidden w-full h-[0.5px] bg-warm-gray rounded-md'></div>

            <div className='flex items-center md:items-start gap-2 flex-1'>
              <div className='bg-light-olive p-3 rounded-[10px]'>
                <FaCode className='text-dark-olive lg:w-6 lg:h-6' />
              </div>

              <div className='flex flex-col gap-1 md:gap-2'>
                <span className='font-bold text-sm md:text-lg'>
                  Clean & Scalable
                </span>
                <span className='text-sm md:text-lg'>
                  I write clean, scalable code.
                </span>
              </div>
            </div>

            <div className='block lg:hidden w-full h-[0.5px] bg-warm-gray rounded-md'></div>

            <div className='flex items-center md:items-start gap-2 flex-1'>
              <div className='bg-light-olive p-3 rounded-[10px]'>
                <FaUserGroup className='text-dark-olive lg:w-6 lg:h-6' />
              </div>

              <div className='flex flex-col gap-1 md:gap-2'>
                <span className='font-bold text-sm md:text-lg'>
                  Team Player
                </span>
                <span className='text-sm md:text-lg'>
                  I value collaboration and teamwork.
                </span>
              </div>
            </div>

            <div className='block lg:hidden w-full h-[0.5px] bg-warm-gray rounded-md'></div>
          </div>

          {/* tombol download */}
          <div className='flex flex-col lg:flex-row items-center gap-3 lg:gap-5'>
            <Button
              variant='primary'
              className='lg:flex-shrink-0 w-full lg:w-auto'>
              See My CV
              <FaDownload />
            </Button>

            <span className='hidden lg:block text-sm md:text-base text-center md:max-w-[50%]'>
              Want to more know about my background and experience? Check out my
              CV.
            </span>
          </div>
        </div>
      </div>

      <ScrollIndicator invitation='My tools' />
    </section>
  );
}
