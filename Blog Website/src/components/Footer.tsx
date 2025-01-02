import Link from "next/link";

export default function Footer() {
	return (
   <div>
    <footer className="border border-1 border-gray-200">
    <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
    <Link href = "/" className="flex font-sans font-bold items-center md:justify-start justify-center text-black">
    <span className="ml-3 text-2xl cursor-pointer">Muzverse.</span>
    </Link>
    <p className="text-center font-sans font-bold text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">   {/* Muzna Amir Zubairi*/}
                                    ©2024 muznazuberi123@gmail.com
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    <Link href = "https://www.facebook.com/people/Muzna-Amir-Zubairi/pfbid02aqmcs1j6iXSeB5idhExfnczcyKF7kLkzS5oD3jKsnguhn3jNdp6jZ4akoFBs58prl/?mibextid=ZbWKwL" target = "blank" className="text-black">   {/* Muzna Amir Zubairi*/}
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
    <a className="ml-3 text-black cursor-pointer">
    <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
    >
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
    </a>
    <a className="ml-3 text-black cursor-pointer">
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
    <Link href=   "https://www.linkedin.com/in/muzna-amir-zubairi-280135264/" target = "blank" className="ml-3 text-black">
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
    <circle cx={4} cy={4} r={2} stroke="none" />
    </svg>
    </Link>
    </span>
    </div>
    </footer>
   </div>
 );
}