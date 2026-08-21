import { FaAnglesDown } from "react-icons/fa6";

export default function ScrollIndicator({ className, invitation }) {
  return (
    <div
      className={`flex flex-col items-center text-warm-gray md:text-lg ${className}`}>
      <span>{invitation}</span>
      <FaAnglesDown className='w-6 h-6 md:w-8 md:h-8' />
    </div>
  );
}
