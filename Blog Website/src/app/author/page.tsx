 import Link from "next/link";
 import Image from "next/image";
 
 export default function Author() {
	return (
   <div>
    <div className="container px-10 py-3 mx-auto shadow-xl">
    <div className="flex flex-wrap -m-4">    
    <div className="p-4 lg:w-1/1">
    <div className="flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
    <Image
            alt="mine_img"
            className="flex-shrink-0 rounded-full w-32 h-32 object-cover object-center sm:mb-0 mb-4"
            src="/images/author_img.png"
            width = "600"
            height = "300"
    />
    <div className="pt-24 flex-grow sm:pl-8">
    <h2 className="font-sans font-bold text-black text-xl">
                                                 Muzna Amir Zubairi
    </h2>
    <h3 className="text-gray-500 font-sans font-bold mb-3">Professional Web Developer || AI Enthusiast || UI/UX Expert</h3>
    <p className=" font-serif text-justify"> {/* Muzna Amir Zubairi*/}
              Hi! I m Muzna Amir . I am a passionate AI and Web 3.0 enthusiast currently pursuing advanced studies in Generative AI Web 3.0 and the Metaverse. With a strong foundation in both frontend and backend development.I have honed my skills to create dynamic responsive and innovative web solutions. My experience spans across building robust scalable applications that integrate cuttingedge technologies to deliver exceptional user experiences. As I continue to explore the realms of AI and Web 3.0.I am committed to leveraging these emerging technologies to shape the future of the web.
    </p>
    <span className="mt-4 inline-flex">
    <Link href = "https://www.facebook.com/people/Muzna-Amir-Zubairi/pfbid02aqmcs1j6iXSeB5idhExfnczcyKF7kLkzS5oD3jKsnguhn3jNdp6jZ4akoFBs58prl/?mibextid=ZbWKwL" target = "blank"  className="text-black cursor-pointer">
    <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
    {/* Muzna Amir Zubairi*/}
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
    </Link>
    <a className="ml-2 text-black cursor-pointer">
    <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
    >
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
    </a>
    {/* Muzna Amir Zubairi*/}
    <Link href=   "https://www.linkedin.com/in/muzna-amir-zubairi-280135264/" target = "blank" className="ml-3 text-black cursor-pointer">
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
    </div>
    </div>
    </div>
    </div>
  </div>
 );
}