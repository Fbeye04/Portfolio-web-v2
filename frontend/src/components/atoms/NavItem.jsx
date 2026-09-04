export default function NavItem({ link, title, onClick, isActive }) {
  return (
    <li className='w-full lg:w-auto'>
      <a
        href={link}
        onClick={onClick}
        className={`group relative pb-3 lg:pb-1 font-semibold lg:text-dark-brown/80 transition-colors duration-200 lg:hover:text-dark-brown active:scale-95 w-full lg:w-auto ${isActive ? "lg:text-dark-brown" : ""}`}>
        <span>{title}</span>
        <span
          className={`hidden lg:block absolute -bottom-2 left-0 w-full h-1 bg-primary-olive rounded-full transform scale-x-0 transition-transform duration-300 ease-out origin-left group-hover:scale-x-100 ${isActive ? "scale-x-100" : ""}`}></span>
      </a>
    </li>
  );
}
