import Link from "next/link";
import Image from "next/image";

export default function About() {
	return (
 <div>
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded shadow-xl"
      alt="mine_img"
      src="/images/mine.jpg"
      width = "600"
      height = "300"
    />
    <div className="text-center lg:w-2/3 w-full">
    <h1 className="sm:text-4xl text-3xl mb-4 font-bold font-sans text-black">
                                About Muzverse
    </h1>
    <h2 className="md:text-xl lg:text-xl xl:text-xl text-sm mb-4 font-bold font-sans text-black text-justify">   {/* Muzna Amir Zubairi*/}
                               Welcome To Muzverse Your Ultimate Destination To Explore.Discover and Interact With a Universe of Ideas Stories and Experiences.
    </h2>
    <p className="mb-8 leading-relaxed text-justify font-sans">       
                              At Muzverse we believe the world is a vast interconnected space where diverse passions hobbies and dreams come together. Whether you are a traveler a foodie a business enthusiast or someone looking for creative inspiration Muzverse is designed to be your goto platform for everything that sparks your interest.Our mission is to create a space where different worlds collide giving you access to a variety of content that enriches educates and entertains. At Muzverse we dont just provide you with articles.We share ideas inspiration and new perspectives on life countless adventures.
    <br/> 
    <br/>
    <b className = "text-lg font-sans text-black">What We Offer</b>
    <br/>
     Explore a wide range of topics covering all aspects of life from adventure to business to treats and more.
    <br/>
   🌍 Travel: Take an exciting journey to farflung places and discover hidden gems around the world. 
   <br/>
   💼 Business: Get insights on entrepreneurship startups and business trends to fuel your success.
   <br/>
   {/* Muzna Amir Zubairi*/}
   🍫 Chocolate: Satisfy your sweet tooth with decadent chocolate recipes reviews and the latest trends.
   <br/>
   🎶 Music : Get in on the action by exploring the latest music artists and musical inspiration.
   <br/>
   🎨 Creative Corner : Unleash your creativity with DIY projects design ideas and tips for living a more creative life.
   <br/>
   <br/>
   {/* Muzna Amir Zubairi*/}
   <b className = "text-lg font-sans text-black"> Why Muzverse?</b> 
   <br/>
                               Muzverse is more than just a blog. It is an experience. Our team is dedicated to providing you with fresh original and high quality content that reflects the diversity of life itself. We aim to offer a platform where you can not only explore your interests but also connect with a community of like minded individuals who share your passions.Each post is crafted with care bringing you engaging content that resonates with your curiosity and creativity.
   <br/>
   <br/>
   <b className = "font-sans text-black">Join Us in the Journey:</b>
   We invite you to become a part of Muzverse and explore a world of limitless possibilities.
   <br/>
   <b className = "font-sans text-black">Connect with us:</b>
                               Share your thoughts and discover new horizons. Your journey is just beginning and we are here to walk alongside you every step of the way. Thanks for visiting Muzverse where a world of ideas is just a click away.
   </p>
   <div className="flex justify-center">
   <Link href = "/contact" className="inline-flex text-white bg-black font-sans font-bold border-0 py-2 px-6 focus:outline-none  rounded-xl text-lg">   {/* Muzna Amir Zubairi*/}
                                     Connect With Us
   </Link>
   </div>
   </div>
   </div>
 </div>
 );
}