export default function TextArea({
  id,
  label,
  name,
  placeholder,
  onChange,
  value,
  required,
}) {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={id} className='text-sm md:text-xl font-bold'>
        {label}
      </label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required={required}
        className='border border-warm-gray rounded-[10px] px-3 py-1.5 md:px-5 md:py-2.5 text-sm md:text-xl resize-none lg:min-h-[120px] outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700 transition-all duration-300 ease-in-out'></textarea>
    </div>
  );
}
