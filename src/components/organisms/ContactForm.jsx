import { FaPaperPlane } from "react-icons/fa6";

export default function ContactForm() {
  return (
    <form className='bg-white rounded-[15px] p-3 shadow-lg'>
      {/* bagian header form */}
      <div className='flex items-center gap-4'>
        <div className='bg-light-olive rounded-full p-3'>
          <FaPaperPlane className='text-dark-olive text-2xl' />
        </div>

        <div>
          <h3 className='font-extrabold text-lg'>Send Me a Message</h3>
          <p className='text-sm text-warm-gray'>
            Fill out the form and I'll get back to you soon!
          </p>
        </div>
      </div>
    </form>
  );
}
