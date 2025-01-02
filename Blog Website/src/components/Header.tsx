import Link from "next/link";

export default function Header() {
  return (

 <div>
    <header className="bg-black body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href = "/" className="flex font-bold font-sans items-center text-white mb-4 md:mb-0">   {/* Muzna Amir Zubairi*/}
    <span className="ml-3 text-2xl cursor-pointer">Muzverse.</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href ="/" className="mr-5 text-white font-mono font-bold">Home</Link>
      <Link href = "/about" className="mr-5 text-white font-mono font-bold">About</Link>
      <Link href = "/blog" className="mr-5 text-white font-mono font-bold">Blog</Link>
    </nav>
    <Link href = "/contact" className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none  rounded-lg font-mono font-bold text-black mt-4 md:mt-0">   {/* Muzna Amir Zubairi*/}
                                            Contact
    <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
    >
    <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
    </Link>
    </div>
    </header>
 </div>


   );
}