import ScrollIndicator from "../components/atoms/ScrollIndicator";
import ContactForm from "../components/organisms/ContactForm";

export default function Contact() {
  return (
    <section className='flex flex-col px-8 md:px-16 lg:px-10 py-5 snap-start h-full max-w-[1440px] mx-auto'>
      <div className='flex-1 flex flex-col items-start gap-4 md:gap-6 '>
        <div className='flex flex-col items-center gap-4 md:gap-6 w-full'>
          <div className='text-primary-olive bg-light-olive font-semibold flex justify-center items-center gap-1 p-2 rounded-[20px] text-xs md:text-sm'>
            <div>{"</>"}</div>
            <span className='uppercase'>Get in touch</span>
          </div>

          <h2 className='font-extrabold text-3xl md:text-5xl'>
            Let's Work
            <span className='text-dark-olive block text-center'>Together!</span>
          </h2>

          <p className='text-sm md:text-xl text-center'>
            I'm currently open to new opportunities and exciting projects.
            Whether you have a question or just want to say hi, my inbox is
            always open.
          </p>
        </div>

        <ContactForm />
      </div>

      <ScrollIndicator />
    </section>
  );
}
