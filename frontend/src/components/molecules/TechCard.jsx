export default function TechCard({ techName, iconClass }) {
  return (
    <div className='bg-white flex flex-col items-center justify-center border border-warm-gray gap-2 p-3 md:py-6 lg:px-10 lg:py-4 rounded-[10px]'>
      <i className={`${iconClass} colored text-4xl lg:text-6xl`}></i>
      <span className='font-semibold text-base md:text-xl text-center text-warm-gray'>
        {techName}
      </span>
    </div>
  );
}
