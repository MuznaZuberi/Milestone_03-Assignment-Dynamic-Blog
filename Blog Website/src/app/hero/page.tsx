import Image from "next/image";

export default function Hero() {
	return (
   <div>
      <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
      <div className="pb-2 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">   {/* Muzna Amir Zubairi*/}
      <h1 className="font-sans font-bold md:text-2xl lg:text-2xl xl:text-2xl text-md mb-4 text-black">   {/* Muzna Amir Zubairi*/}
                              The Transformative Power of
      <br className="hidden lg:inline-block" />
                              Artificial Intelligence
      </h1>
      <p className="mb-8 leading-relaxed text-gray-600 font-serif text-justify">
                             Artificial intelligence (AI) is revolutionizing the future by seamlessly integrating technology into every aspect of life. From personalized healthcare and predictive analytics to automation and accessibility, AI is optimizing industries and enabling data-driven decision-making. It is driving innovation in climate modeling, renewable energy, and countless other industries, creating smarter, more efficient systems. By fostering creativity, collaboration, and global problem-solving, AI is opening up unprecedented opportunities. As it continues to evolve, AI will redefine the way we work, live, and innovate, transforming our understanding of what is possible. Let me know if it works!
      </p>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero_img"
        src= "/images/hero.png"
        width = "600"
        height = "300"
      />
      </div>
      </div>
   </div>
 );
}