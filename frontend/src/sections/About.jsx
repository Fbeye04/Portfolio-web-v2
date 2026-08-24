import { FaCode, FaBullseye, FaUserGroup, FaDownload } from "react-icons/fa6";
import LinkButton from "../components/atoms/LinkButton";

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
  return (
    <section
      id='about'
      className='scroll-mt-32 flex flex-col items-start gap-5 lg:gap-10'>
      <div className='flex flex-col gap-1'>
        <div className='flex items-center gap-1 text-xs md:text-lg text-primary-olive font-bold'>
          <span>//</span>
          <span className='uppercase'>Introduction</span>
        </div>

        <h2 className="relative w-fit pb-4 font-bold text-2xl md:text-4xl after:absolute after:left-0 after:bottom-0 after:h-1 after:w-1/2 after:rounded-md after:bg-primary-olive after:content-['']">
          About Me
        </h2>
      </div>

      <div className='flex flex-col gap-5 lg:gap-4'>
        {/* deskripsi */}
        <p className='text-base md:text-xl text-warm-gray'>
          I'm a Full-Stack Developer trained through DBS Foundation and
          Harisenin.com, combining scientific logic with a focus on building
          responsive interfaces and scalable APIs.
        </p>

        {/* Features */}
        <div className='flex flex-row gap-4 lg:gap-0'>
          {myStrengths.map((features) => (
            <div
              key={features.title}
              className='flex items-center gap-4 w-full'>
              <div className='bg-primary-olive w-[2px] h-16 lg:h-7 rounded-lg'></div>

              <div className='flex flex-col lg:flex-row items-start lg:items-center gap-2 flex-1'>
                <div className='text-dark-olive text-xl'>{features.icon}</div>

                <span className='text-base md:text-xl font-semibold text-dark-olive'>
                  {features.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* tombol download */}
      <LinkButton
        variant='primary'
        link='https://drive.google.com/file/d/191lBfGZt07q5_JErUtsK9VDYLn1sQSeP/view?usp=sharing'
        className='lg:flex-shrink-0 w-full lg:w-auto'>
        See My CV
        <FaDownload />
      </LinkButton>
    </section>
  );
}
