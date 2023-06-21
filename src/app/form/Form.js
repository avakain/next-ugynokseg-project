"use client"
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../components/button/Button';
import { useRouter } from 'next/navigation'
import ReCAPTCHA from 'react-google-recaptcha';
import Link from 'next/link';


export default function ContactUs() {
  const form = useRef();
  const router = useRouter();
  const [isHuman, setIsHuman] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleRecaptcha = async () => {
    const isTokenValid = true;
    setIsHuman(isTokenValid);
  }

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    router.push('/success');

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className='rounded my-60'>
      <form className=' mt-40 p-8 flex flex-col  bg-white rounded-xl shadow-lg '
        ref={form}
        onSubmit={sendEmail}>
        {/* Added input field for name */}
        <label
          className="block text-xl font-medium text-gray-700 mb-2"
        >Név:<span className="text-red-500">&#42;</span></label>
        <input
          className="appearance-none block w-full bg-gray-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight
      focus:outline-none  focus:border-red-500 focus:ring-1 focus:ring-purple-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          type="text"
          name="user_name"
          required
        />
        {/* Added input field for phone number */}
        <label
          className="block text-xl font-medium text-gray-700 mb-2"
        >
          Telefonszám:
          <span className="text-red-500">&#42;</span></label>
        <input
          type="tel"
          name="user_phone"
          className="appearance-none block w-full bg-gray-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight
      focus:outline-none  focus:border-red-500 focus:ring-1 focus:ring-purple-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          required
        />
        {/* Added input field for email */}
        <label
          className="block text-xl font-medium text-gray-700 mb-2"
        >
          Email:
          <span className="text-red-500">&#42;</span></label>
        <input
          type="email"
          name="user_email"
          className="appearance-none block w-full bg-gray-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight
      focus:outline-none  focus:border-red-500 focus:ring-1 focus:ring-purple-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          required
        />
        {/* Added input field for company */}
        <label
          className="block text-xl font-medium text-gray-700 mb-2"
        >Cég:</label>
        <input type="text"
          name="user_company"
          className="appearance-none block w-full bg-gray-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight
      focus:outline-none  focus:border-red-500 focus:ring-1 focus:ring-purple-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        {/* Added textarea field for message */}
        <label
          className="block text-xl font-medium text-gray-700 mb-2"
        >Üzenet:
          <span className="text-red-500">
            &#42;
          </span></label>
        <textarea rows="7"
          className="appearance-none block w-full bg-gray-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight
          focus:outline-none  focus:border-red-500 focus:ring-1 focus:ring-purple-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200  disabled:shadow-none
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          name="message"
          required
        />

        <label className="flex items-start mt-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 mt-1 text-red-500 rounded mr-3"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          <span >
            Hozzájárulok adataim tárolásához<Link href="/gdpr" >
              <br />
              <span className=" text-gray-700 cursor-pointer hover:text-violet-500 italic"> (részletek) </span> </Link>
          </span>
        </label>

        {<ReCAPTCHA
          className="grid  my-6 auto-rows-max"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_TEST_SITE_KEY}
          onChange={handleRecaptcha} />}
        {
          isHuman && checked ? (
            <Button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
            >
              Küldés
            </Button>
          ) : null
        }
      </form>
    </div >
  );
};