const VARIANTS = {
  primary:
    "bg-primary-olive text-off-white gap-2 py-1 px-2 md:py-2 md:px-6 border-none shadow-md transition-all duration-200 ease-out transform hover:-translate-y-1 hover:shadow-xl hover:bg-primary-olive active:translate-y-0.5 active:shadow-sm active:scale-[0.98] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-light-olive",
  secondary:
    "bg-off-white border-dark-brown gap-2 py-1 px-2 md:py-2 md:px-6 transition-all duration-150 hover:bg-dark-brown hover:border-soft-taupe hover:text-off-white active:scale-[0.97] active:bg-soft-taupe active:text-dark-brown focus:outline-none focus:ring-2 focus:ring-light-olive",
  ghost: "border-transparent text-warm-gray hover:text-dark-brown gap-2",
};

export default function LinkButton({ variant, link, children, className }) {
  const buttonVariant = VARIANTS[variant] || VARIANTS.secondary;
  const shouldOpenNewTab = !link.toLowerCase().startsWith("mailto:");

  return (
    <a
      href={link}
      target={shouldOpenNewTab ? "_blank" : undefined}
      rel={shouldOpenNewTab ? "noopener noreferrer" : undefined}
      className={`flex justify-center items-center text-base md:text-xl font-semibold rounded-2xl lg:rounded-[20px] border ${buttonVariant} ${className} cursor-pointer`}>
      {children}
    </a>
  );
}
