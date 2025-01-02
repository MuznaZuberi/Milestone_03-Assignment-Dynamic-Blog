import { SiGmail } from "react-icons/si";
import { ImLinkedin2 } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";

export default function ContactUs() {
	return (
		<div>
      <div className="container px-5 py-10 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
      <h1 className="md:text-6xl lg:text-6xl xl:text-6xl text-2xl font-bold font-sans mb-4 text-black">   {/* Muzna Amir Zubairi*/}
                                      Get In Touch
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-black font-sans text-justify px-2">
        We would love to hear from you! If you have any questions comments or information requests feel free to contact us. Lets interact and achieve great things together.
      </p>
      </div>
      <div className = "flex-wrap md:flex lg:flex xl:flex justify-center gap-20">
      <div className = "text-4xl shadow-xl md:px-16 lg:px-24 xl:px-24 px-10 py-6 mb-10 cursor-pointer">
                           <SiGmail/>
      <h2 className = "text-lg mt-3 font-sans font-bold">Email</h2>
      </div>
      <div className = "text-4xl shadow-xl md:px-16 lg:px-24 xl:px-24 px-10 py-6 mb-10 cursor-pointer">
                                        <Link href=   "https://www.linkedin.com/in/muzna-amir-zubairi-280135264/" target = "blank" ><ImLinkedin2 /></Link>   {/* Muzna Amir Zubairi*/}
      <h2 className = "text-lg mt-3 font-sans font-bold">LinkedIn</h2>
      </div>
      <div className = "text-4xl shadow-xl md:px-16 lg:px-24 xl:px-24 px-10 py-6 mb-10 cursor-pointer">
                                         <FaPhone />
      <h2 className = "text-lg mt-3 font-sans font-bold">Phone</h2>
      </div>
      </div>
      </div>

      <div className="container px-5 py-10 mx-auto">
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
      <div className="p-2 w-1/2">
      <div className="relative">
      <label htmlFor="name" className="leading-7 text-sm text-black font-sans font-bold">
                                             Name
      </label>
      <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      </div>
      </div>
      <div className="p-2 w-1/2">
      <div className="relative">   {/* Muzna Amir Zubairi*/}
      <label htmlFor="email" className="leading-7 text-sm text-black font-sans font-bold">
                                              Email
      </label>
      <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      </div>
      </div>
      <div className="p-2 w-full">
      <div className="relative">
      <label
              htmlFor="message"
              className="leading-7 text-sm text-black font-sans font-bold"
      >
                                                 Message
      </label>
      <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
      />
      </div>
      </div>
      <div className="p-2 w-full">
      <button className="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none font-sans rounded-xl text-lg">
                                                 Send Now
      </button>
      </div>
      <div className="p-2 w-full pt-4 mt-8 border-t border-gray-200 text-center">{/* Muzna Amir Zubairi*/}
      <a className="text-black font-sans font-bold">muznazuberi123@email.com</a>
      <br/>
      <span className="inline-flex mt-6">
      <Link href = "https://www.facebook.com/people/Muzna-Amir-Zubairi/pfbid02aqmcs1j6iXSeB5idhExfnczcyKF7kLkzS5oD3jKsnguhn3jNdp6jZ4akoFBs58prl/?mibextid=ZbWKwL" target = "blank" className="text-black">
      <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
      >
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
      </Link>
      <a className="ml-4 text-black">
      <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
      >
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />   {/* Muzna Amir Zubairi*/}
      </svg>
      </a>
      <a className="ml-4 text-black">
      <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
      >
      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
      </svg>
      </a>
      <Link href = "https://www.linkedin.com/in/muzna-amir-zubairi-280135264/" target = "blank" className="ml-3 text-black">
      <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0}
          className="w-5 h-5"
          viewBox="0 0 24 24"
      > 
      <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
      />
      {/* Muzna Amir Zubairi*/}
      <circle cx={4} cy={4} r={2} stroke="none" />
      </svg>
      </Link>
      </span>
      </div>
      </div>
      </div>
      </div>
  </div>
);
}