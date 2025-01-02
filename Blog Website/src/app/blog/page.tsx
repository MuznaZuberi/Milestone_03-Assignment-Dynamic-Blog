import Link from "next/link";
import Image from "next/image";

export default function Blog() {
	return (
   <div>
       <div className="flex flex-col text-center w-full mt-10">
        <p className="text-xl font-bold font-sans mb-4 text-gray-400">
                                       Our Blogs 
       </p>
       <h1 className="md:text-6xl lg:text-6xl xl:text-6xl text-2xl font-bold font-sans mb-4 text-black">
                                      Find All Our Blogs Here
       </h1>
       <p className="lg:w-2/3 mx-auto leading-relaxed text-black font-sans text-justify px-2">
        Welcome to our blog section where we share interesting articles tips and the latest updates to keep you always informed and inspired. Explore different topics here and discover all our blogs. Stay connected and let our content add value to your journey!.
       </p>
       </div>
       <div className="container px-5 py-10 mx-auto">
       <div className="flex flex-wrap -m-4">
       <div className="p-4 md:w-1/1 lg:w-1/3 xl:w-1/3">
       <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
       <Image
            className="lg:h-48 md:h-62 w-full object-cover object-center"
            src="/images/blog_01.jpg"
            alt="train_img"
            width = "600"
            height = "300"
       />
       <div className="p-6">   {/* Muzna Amir Zubairi*/}
       <h2 className="tracking-widest text-xs font-serif  font-bold text-gray-400 mb-1">
                                           2024/12/08
       </h2>
       <h1 className="font-sans md:text-lg lg:text-lg xl:text-lg text-xs font-bold text-black mb-3">
                            If you are traveling by train or bus which is best?
       </h1>
       <p className="leading-relaxed mb-3 text-justify font-serif text-sm">
                            The choice between traveling by train or bus often depends on your personal preferences travel needs and the nature of your trip.Each transport method has its own unique benefits and challenges.
       </p>   {/* Muzna Amir Zubairi*/}
       <div className="flex items-center flex-wrap ">
       <Link href = "/blog/blog_01" className="text-black font-sans font-bold inline-flex items-center md:mb-2 lg:mb-0">
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
        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">{/*Muzna Amir Zubairi*/}
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
        {/* Muzna Amir Zubairi*/}
        <circle cx={12} cy={12} r={3} />
        </svg>
                                   2K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
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
                                 900
        </span>
        </div>
        </div>
        </div>
        </div>
        <div className="p-4 md:w-1/1 lg:w-1/3 xl:w-1/3">   {/* Muzna Amir Zubairi*/}
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
        <Image
            className="lg:h-48 md:h-62 w-full object-cover object-center"
            src="/images/blog_02.jpg"
            alt="developer_img"
            width = "600"
            height = "300"
        />
        <div className="p-6">
        <h2 className="tracking-widest text-xs font-serif  font-bold text-gray-400 mb-1">
                                           2024/12/08
        </h2>
        <h1 className="font-sans md:text-lg lg:text-lg xl:text-lg text-xs font-bold text-black mb-3">
                       The Best Websites to Research for Your Next Project
        </h1>
        <p className="leading-relaxed mb-3 text-justify font-serif text-sm">
                       When starting a new academic professional or personal project thorough research is essential. Leveraging the right resources can streamline your workflow provide insight and improve the quality of your project.
        </p>   {/* Muzna Amir Zubairi*/}
        <div className="flex items-center flex-wrap">
        <Link href = "/blog/blog_02" className="text-black font-sans font-bold inline-flex items-center md:mb-2 lg:mb-0">
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
        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">{/*Muzna Amir Zubairi*/}
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
                                                 600
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
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
                                                   140
        </span>
        </div>
        </div>
        </div>
        </div>
        <div className="p-4 md:w-1/1 lg:w-1/3 xl:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
        <Image
            className="lg:h-48 md:h-62 w-full object-cover object-center"
            src="/images/blog_03.jpg"
            alt="dancer_img"
            width = "600"
            height = "300"
        />
        <div className="p-6">
        <h2 className="tracking-widest text-xs font-serif  font-bold text-gray-400 mb-1">
                                            2024/12/08
        </h2>
        <h1 className="font-sans md:text-lg lg:text-lg xl:text-lg text-xs font-bold text-black mb-3">   {/* Muzna Amir Zubairi*/}
                                 How to become a dancer in 2025 with the right skills

        </h1>
        <p className="leading-relaxed mb-3 text-justify font-serif text-sm">
                                The training of a qualified and professional dancer in 2025 requires devotion creativity and a desire to adapt to modern trends and technologies.
        </p>
        <div className="flex items-center flex-wrap ">
        <Link href = "/blog/blog_03" className="text-black font-sans font-bold inline-flex items-center md:mb-2 lg:mb-0">
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
        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">{/*Muzna Amir Zubairi*/}
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
                                            1200
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
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
                                                         400
        </span>
        </div>
        </div>
        </div>
        </div>
        <div className="p-4 md:w-1/1 lg:w-1/3 xl:w-1/3 mt-6">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
        <Image
            className="lg:h-48 md:h-62 w-full object-cover object-center"
            src="/images/blog_04.jpg"
            alt="nature_img"
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
        <Link href = "/blog/blog_04" className="text-black font-sans font-bold inline-flex items-center md:mb-2 lg:mb-0">
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
        <span className="cursor-pointer text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">{/*Muzna Amir Zubairi*/}
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
        <div className="p-4 md:w-1/1 lg:w-1/3 xl:w-1/3 mt-6">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
        <Image
            className="lg:h-48 md:h-62 w-full object-cover object-center"
            src="/images/blog_05.jpg"
            alt="ui/uxdesign_img"
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
        <Link href = "blog/blog_05" className="text-black font-sans font-bold inline-flex items-center md:mb-2 lg:mb-0">
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
        <span className="cursor-pointer text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">{/*Muzna Amir Zubairi*/}
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
        <div className="p-4 md:w-1/1 lg:w-1/3 xl:w-1/3 mt-6">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
        <Image
            className="lg:h-48 md:h-62 w-full object-center  object-center"
            src="/images/blog_06.jpg"
            alt="footballer_img"
            width = "600"
            height = "300"
        />
        <div className="p-6">
        <h2 className="tracking-widest text-xs font-serif  font-bold text-gray-400 mb-1">
                                           2024/12/08
        </h2>
        <h1 className="font-sans md:text-lg lg:text-lg xl:text-lg text-xs font-bold text-black mb-3">
                                               How to become a professional soccer player in 2025 
        </h1>
        <p className="leading-relaxed mb-3 text-justify font-serif text-sm">
                                 Breaking into professional football is a difficult but rewarding path. In 2025 advances in training methods technology and scouting we will mean aspiring players will need to approach their goals strategically.
        </p>
        <div className="flex items-center flex-wrap ">
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
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />{/*Muzna Amir Zubairi*/}
        </svg>
                                                      900
        </span>
        </div>
        </div>
        </div>
        </div>
        <div className="p-4 md:w-1/1 lg:w-1/3 xl:w-1/3 mt-6">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
        <Image
            className="lg:h-48 md:h-62 w-full object-cover object-center"
            src="/images/blog07.jpg"
            alt="singer_img"
            width = "600"
            height = "300"
        />
        <div className="p-6">
        <h2 className="tracking-widest text-xs font-serif  font-bold text-gray-400 mb-1">
                                           2024/12/08
        </h2>
        <h1 className="font-sans md:text-lg lg:text-lg xl:text-lg text-xs font-bold text-black mb-3">
                             Mayurai Carey sets a new entry using everything.
        </h1>
        <p className="leading-relaxed mb-3 text-justify font-serif text-sm">
                            I want for Christmas Mariah Careys famous celebration national anthem.I Want Only You at Christmas again took 100 hots on the advertising shield touched the storm and touched number one. This eternal classic first released in 1994 has fascinated spectators around the world and has been a congratulatory song that surpasses 2 billion Ogawa on Spotify. Maria achievements include completing her successful Christmas tour further enhancing her status as Queen of Christmas and a global music icon.
        </p>
        <div className="flex items-center flex-wrap ">
        <Link href = "/blog/blog_07" className="text-black font-sans font-bold inline-flex items-center md:mb-2 lg:mb-0">
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
        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">{/*Muzna Amir Zubairi*/}
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
                                                       4K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
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
                                                    2300
        </span>
        </div>
        </div>
        </div>
        </div>
        <div className="p-4 md:w-1/1 lg:w-1/3 xl:w-1/3 mt-6">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
        <Image
            className="lg:h-48 md:h-62 w-full object-cover object-center"
            src= "/images/blog_08.jpg"
            alt="bussinessmen_img"
            width = "600"
            height = "300"
        />
        <div className="p-6">
        <h2 className="tracking-widest text-xs font-serif  font-bold text-gray-400 mb-1">
                                           2024/12/08
        </h2>
        <h1 className="font-sans md:text-lg lg:text-lg xl:text-lg text-xs font-bold text-black mb-3">
                                How to start a commercial company at home
        </h1>
        <p className="leading-relaxed mb-3 text-justify font-serif text-sm">
                               The start of commercial business companies has become more and more popular and executable options during the modern digital age. You can use innovative technology and strategies to turn your home into a thriving shopping center. This guide covers everything from selecting the right business idea to registering your company, setting up your workspace and marketing your products or services. Whether it is an ecommerce store, a consultancy service or a creative venture starting at home allows you to minimize overhead costs.

        </p>
        <div className="flex items-center flex-wrap ">
        <Link href = "/blog/blog_08" className="text-black font-sans font-bold inline-flex items-center md:mb-2 lg:mb-0">
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
        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
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
                                             1.9K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
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
        <div className="p-4 md:w-1/1 lg:w-1/3 xl:w-1/3 mt-6">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
        <Image
            className="lg:h-48 md:h-62 w-full object-cover object-center"
            src="/images/blog_09.jpg"
            alt="chocolates_img"
            width = "600"
            height = "300"
        />
        <div className="p-6">
        <h2 className="tracking-widest text-xs font-serif  font-bold text-gray-400 mb-1">
                                           2024/12/08
        </h2>
        <h1 className="font-sans md:text-lg lg:text-lg xl:text-lg text-xs font-bold text-black mb-3">
                                Delicious Chocolate and Milk Drinks
        </h1>
        <p className="leading-relaxed mb-3 text-justify font-serif text-sm">
                                Immerse yourself in the rich creamy world of chocolate and milk with these irresistible drink recipes. From a classic chocolate milkshake to a refreshing iced mocha latte to a comforting hot chocolate you will find the perfect drink for every mood and occasion. Regardless of whether you mix bananas into fruits or add a mint hint to add a refreshing blow these recipes are simple and incredible and certainly satisfy your sweet things. These drinks are perfect for chocolate enthusiasts of all ages easy to make and are always ideal.
        </p>
        <div className="flex items-center flex-wrap ">
        <Link href = "/blog/blog_09" className="text-black font-sans font-bold inline-flex items-center md:mb-2 lg:mb-0">
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
                                                         3.4K
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
                                                           2100
        </span>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
   </div>
 );
}