import { motion } from "framer-motion";

export default function SectionHeading({ label, title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className='flex flex-col gap-1 w-full'>
      <span className='uppercase text-xs md:text-lg text-primary-olive font-bold'>
        {label}
      </span>

      <div className='flex justify-between'>
        <h2 className="relative w-fit pb-4 font-bold capitalize text-2xl md:text-4xl after:absolute after:left-0 after:bottom-0 after:h-1 after:w-1/2 after:rounded-md after:bg-primary-olive after:content-['']">
          {title}
        </h2>

        {children}
      </div>
    </motion.div>
  );
}
