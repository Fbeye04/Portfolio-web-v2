export default function Input({
  label,
  type,
  placeholder,
  id,
  name,
  required,
  onChange,
  value,
}) {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={id} className='text-sm md:text-xl font-bold'>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
        className='border border-warm-gray rounded-[10px] px-3 py-1.5 md:px-5 md:py-2.5 text-sm md:text-xl outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700 transition-all duration-300 ease-in-out'
      />
    </div>
  );
}
