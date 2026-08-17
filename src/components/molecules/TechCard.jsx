export default function TechCard({ techName, iconClass }) {
  return (
    <div className='bg-white flex flex-col items-center justify-center gap-2 p-3 md:py-6 lg:px-10 lg:py-4 rounded-[10px] shadow-md'>
      <i className={`${iconClass} colored text-6xl md:text-8xl`}></i>
      <span className='font-semibold text-base md:text-xl text-center text-warm-gray'>
        {techName}
      </span>
    </div>
  );
}
