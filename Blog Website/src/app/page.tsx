import Link from "next/link";
import Hero from "./hero/page";
import Image from "next/image";


export default function Home() {
  return (
    <div>
    <Hero/>
    {/* Blog Section Start */ }
    <section>
    <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-wrap -m-4">
    <div className="p-4 md:w-1/1 lg:w-1/3 xl:w-1/3">
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
    <Image
            className="lg:h-48 md:h-62 w-full object-cover object-center"
            src="/images/blog_04.jpg"
            alt="blog_img"
            width = "600"
            height = "300"
    />
    <div className="p-6">
    <h2 className="tracking-widest text-xs font-serif  font-bold text-gray-400 mb-1">
                                           2024/12/08
    </h2>
    <h1 className="font-sans md:text-lg lg:text-lg xl:text-lg text-xs font-bold text-black mb-3">
                                        8 Important Rules to Know When Traveling at Sea
    </h1>
    <p className="leading-relaxed mb-3 text-justify font-serif text-sm">
       Transition to a sea trip is an unparalleled adventure. Regardless of whether you plan a relaxed jump from the island of the Cruise Island or plan a boat trip, it is important to understand the basic rules of sea travel to ensure safe experience.
    </p>
    <div className="flex items-center flex-wrap ">
    <Link href = "/blog/blog_04" className="text-black font-sans font-bold inline-flex items-center md:mb-2 lg:mb-0">   {/* Muzna Amir Zubairi*/}
                                           Read More
    <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
    >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
    </svg>
    </Link>
    <span className="cursor-pointer text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">   {/* Muzna Amir Zubairi*/}
    <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
    >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx={12} cy={12} r={3} />
    </svg>
                                      3.2K
    </span>
    <span className="cursor-pointer text-gray-400 inline-flex items-center leading-none text-sm">
    <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
    >
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />{/*Muzna Amir Zubairi*/}
    </svg>
                                                       600

    </span>
    </div>
    </div>
    </div>
    </div>
    <div className="p-4 md:w-1/1 lg:w-1/3 xl:w-1/3">
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
    <Image
            className="lg:h-48 md:h-62 w-full object-cover object-center"
            src="/images/blog_05.jpg"
            alt="blog"
            width = "600"
            height = "300"
    />
    <div className="p-6">
     <h2 className="tracking-widest text-xs font-serif  font-bold text-gray-400 mb-1">
                                           2024/12/08
    </h2>
    <h1 className="font-sans md:text-lg lg:text-lg xl:text-lg text-xs font-bold text-black mb-3">
                                      How to Create a Powerful UI/UX Portfolio and Land Your Dream Job
    </h1>
    <p className="leading-relaxed mb-3 text-justify font-serif text-sm">
       A compelling portfolio is key to demonstrating your skills as a UI/UX designer and impressing potential employers. Here is an expert guide to help you create an impressive portfolio and land a UI/UX designed job.
    </p>
    <div className="flex items-center flex-wrap">
    <Link href = "/blog/blog_05" className="text-black font-sans font-bold inline-flex items-center md:mb-2 lg:mb-0">
                                        Read More
    <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
    >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
    </svg>
    </Link>
    <span className="cursor-pointer text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">   {/* Muzna Amir Zubairi*/}
    <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
    >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx={12} cy={12} r={3} />
    </svg>
                                          3.3K
    </span>
    <span className="cursor-pointer text-gray-400 inline-flex items-center leading-none text-sm">
    <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
    >
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
                                                       900
    </span>
    </div>
    </div>
    </div>
    </div>
    <div className="p-4 md:w-1/1 lg:w-1/3 xl:w-1/3">
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
    <Image
            className="lg:h-48 md:h-62 w-full object-center  object-center"
            src="/images/blog_06.jpg"
            alt="blog"
            width = "600"
            height = "300"
    />
    <div className="p-6">
     <h2 className="tracking-widest text-xs font-serif  font-bold text-gray-400 mb-1">
                                           2024/12/08
    </h2>
    <h1 className="font-sans md:text-lg lg:text-lg xl:text-lg text-xs font-bold text-black mb-3">
                                               How To Become a Professional Soccer Player In 2025 
    </h1>
    <p className="leading-relaxed mb-3 text-justify font-serif text-sm">
       Breaking into professional football is a difficult but rewarding path. In 2025 advances in training methods technology and scouting we will mean aspiring players will need to approach their goals strategically.
    </p>
    <div className="flex items-center flex-wrap ">   {/* Muzna Amir Zubairi*/}
    <Link href = "/blog/blog_06" className="text-black font-sans font-bold inline-flex items-center md:mb-2 lg:mb-0">
                                     Read More
    <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
    >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
    </svg>
    </Link>
    <span className="cursor-pointer text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
    <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
    >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx={12} cy={12} r={3} />
    </svg>
                                                           2.8K
    </span>
    <span className="cursor-pointer text-gray-400 inline-flex items-center leading-none text-sm">
    <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
    >
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />   {/* Muzna Amir Zubairi*/}
    </svg>
                                                      100
    </span>
    </div>
    </div>
    </div>
    </div>
    <Link href = "/blog" className = "mt-6 font-sans font-bold mx-auto border-1 border border-black px-6 py-2 rounded-lg text-black text-xl">View More</Link>
    </div>
    </div>  
    </section>
    {/* Blog Section End*/ }
    </div>
  );
}
