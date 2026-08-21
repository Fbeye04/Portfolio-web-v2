import { FaPaperPlane } from "react-icons/fa6";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";
import { useState } from "react";

export default function ContactForm({ className }) {
  const [guest, setGuest] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setGuest((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(guest),
        },
      );

      if (response.ok) {
        setGuest({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        alert("Message sent successfully.");
      } else {
        alert("Message failed to send.");
      }
    } catch (error) {
      console.log(error);
      alert("A server error occurred.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-[15px] p-6 md:p-8 shadow-xl flex flex-col gap-5 ${className}`}>
      {/* bagian header form */}
      <header className='flex items-center gap-4'>
        <div className='bg-light-olive rounded-full p-3 md:p-4'>
          <FaPaperPlane className='text-dark-olive text-2xl md:text-3xl' />
        </div>

        <div>
          <h3 className='font-extrabold text-lg md:text-2xl'>
            Send Me a Message
          </h3>
          <p className='text-sm md:text-xl text-warm-gray'>
            Fill out the form and I'll get back to you soon!
          </p>
        </div>
      </header>

      <div className='w-full flex flex-col gap-3'>
        <Input
          label='Your Name'
          type='text'
          id='name'
          placeholder='Enter your name'
          name='name'
          required
          onChange={handleChange}
          value={guest.name}
        />
        <Input
          label='Your Email'
          type='email'
          id='email'
          placeholder='Enter your email'
          name='email'
          required
          onChange={handleChange}
          value={guest.email}
        />
        <Input
          label='Subject'
          type='text'
          id='subject'
          placeholder='What is this about?'
          name='subject'
          required
          onChange={handleChange}
          value={guest.subject}
        />
        <TextArea
          id='message'
          label='Message'
          name='message'
          placeholder='Type your message here'
          required
          onChange={handleChange}
          value={guest.message}
        />

        <Button
          variant='primary'
          type='submit'
          className='text-sm py-2.5 lg:py-3'>
          <FaPaperPlane />
          Send Message
        </Button>
      </div>
    </form>
  );
}
