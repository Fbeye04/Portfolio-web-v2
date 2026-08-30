export default function SectionHeading({ headline, title, children }) {
  return (
    <div className='flex flex-col gap-1 w-full'>
      <span className='uppercase text-xs md:text-lg text-primary-olive font-bold'>
        {headline}
      </span>

      <div className='flex justify-between'>
        <h2 className="relative w-fit pb-4 font-bold capitalize text-2xl md:text-4xl after:absolute after:left-0 after:bottom-0 after:h-1 after:w-1/2 after:rounded-md after:bg-primary-olive after:content-['']">
          {title}
        </h2>

        {children}
      </div>
    </div>
  );
}
