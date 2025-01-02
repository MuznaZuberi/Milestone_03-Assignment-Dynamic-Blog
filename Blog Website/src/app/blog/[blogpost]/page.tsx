import Link from "next/link";
import Image from "next/image";

import CommentsSection from "../../../components/CommentSection";


interface BlogProps {
	params: { blogpost: string };
}


export default function BlogID({params} : BlogProps) {
	const BlogDetails: Record<string, { image: string; date: string; alt: string; heading: string; description: string; subheading_01: string; subdesc_01: string; subheading_02: string; subdesc_02: string; subheading_03: string; subdesc_03: string }> = {

		"blog_01": {
			image: "/images/blog_01.jpg",
			date: " 2024/12/08",
			alt: "train_img",
			heading: "If You're Traveling By Train or Bus, Which Is Best?",
			description: "Choosing between traveling by train or bus often boils down to personal preferences, travel objectives, and the nature of the journey. This blog delves into the unique advantages and challenges of both modes of transportation, helping you make an informed decision. From comfort and cost-effectiveness to convenience and environmental impact, we explore every aspect to guide you in selecting the best travel option for your needs. Whether you're planning a long-distance trip or a short commute, uncover valuable insights to make your journey smooth and enjoyable.",

			subheading_01: "1. Comfort And Space",
			subdesc_01: "Trains generally offer more legroom and spacious seats compared to buses.Freedom of movement during the journey increases comfort, especially on longer journeys.",

			subheading_02: "2. Equipment And Objects",
			subdesc_02: "Many trains are equipped with toilets on the ship, dining room, and Wi-Fi servic.Sleeping coaches can be used for night trips. Economical",

			subheading_03: "3.Buses Are Generally More Affordable",
			subdesc_03: "Making them a great option for travelers on a budget.Discounts and flexible pricing are often available for frequent travelers.",


		},
		"blog_02": {
			image: "/images/blog_02.jpg",
			date: " 2024/12/08",
			alt: "developer_img",
			heading: "The Best Websites to Research for Your Next Project",
			description: "In the digital age, access to reliable information is crucial for successful project planning and execution. This blog highlights the top websites that provide comprehensive resources, expert insights, and innovative ideas for your next project. Whether you're a student, professional, or entrepreneur, discover platforms tailored to various industries, offering tools for research, collaboration, and creativity. From trusted databases to niche communities, learn how to leverage these websites to streamline your workflow and achieve outstanding results.",
			subheading_01: "1. Google Scholar",
			subdesc_01: "Best for: Academic research, peer-reviewed articles, citations. Why use it: Provides access to large databases in articles, magazines, summaries, and scientific books.Tip: Use the extended search filter to clarify the investigation for the date, publication, or author. Visit Google Scholar",

			subheading_02: "2. GitHub",
			subdesc_02: "Best for: Developers, software projects, and open-source repositories. Reasons to use it: Study thousands of projects, documents, and general tools for training.Tip: Follow the storage of trends in the area you are interested in. Visit GitHub",

			subheading_03: "3. Medium",
			subdesc_03: "Best for: Ideas, case studies, and personal experiences shared by professionals. Why use it: A platform where experts share articles on various topics, from technology to design and entrepreneurship spirit.Tip: Search for a niche release of the target content. Visit Medium",
		},
		"blog_03": {
			image: "/images/blog_03.jpg",
			date: " 2024/12/08",
			alt: "dancer_img",
			heading: "How To Become a Dancer In 2025 With The Right Skills",
			description: "Dancing is an art that continues to evolve, and 2025 offers exciting opportunities for aspiring dancers. This blog explores the essential skills, techniques, and strategies needed to thrive in the dynamic world of dance. Learn how to embrace diverse styles, hone your technical expertise, and leverage digital platforms to showcase your talent. From mastering choreography to building a personal brand, discover the steps to turn your passion for dance into a successful and fulfilling career in the modern era.",
			subheading_01: "1. Master The Basics",
			subdesc_01: "Learn different styles: Start with basic styles like ballet, jazz, or hip-hop and expand to modern dance, salsa, or freestyle. Understand rhythm and timing: Create a strong connection with the music to improve your ability to synchronize your movements with the beats. Work on your flexibility: Do daily stretching exercises to improve your range of motion and prevent injuries.",

			subheading_02: "2. Keep The Trend In The Latest State",
			subdesc_02: "Search for new genres: K-POP, AFROBEATS, Fusion Styles and other dance styles are gaining worldwide popularity. Embrace technology: Use tools like motion capture and VR dance platforms to develop your skills and creativity. Follow influencers: Follow top choreographers and dancers on TikTok, YouTube, and Instagram platforms",

			subheading_03: "3. Professional Training and Certification",
			subdesc_03: "Enroll in a dance school: Programs like Alvin Ailey, Joffrey Ballet, and other renowned institutions offer world-class training. Get certified: Certifications in specific dance styles can boost your reputation. Join workshops and master classes: These events can introduce you to new techniques and industry professionals.",
		},
		"blog_04": {
			image: "/images/blog_04.jpg",
			date: " 2024/12/08",
			alt: "nature_img",
			heading: "8 Important Rules to Know When Traveling at Sea",
			description: "Embarking on a sea voyage is an exhilarating experience, but it requires preparation and awareness. This blog outlines eight essential rules to ensure a safe and enjoyable journey. From understanding maritime safety protocols and packing smartly to respecting environmental guidelines and being prepared for emergencies, these tips are crucial for every traveler. Whether you’re cruising for leisure or sailing for adventure, mastering these rules will help you navigate the open seas with confidence and ease.",
			subheading_01: "1. Pack smart and safe",
			subdesc_01: "The marine environment requires careful packaging. Waterproof bags, light clothes, and basic travel documents must always be part of your luggage. If you need to transport evil, don't forget marine disease.",

			subheading_02: "2. Please be careful about the weather",
			subdesc_02: "Weather conditions may change immediately in the sea. Always pay attention to the weather forecast and listen to the advice of your ship's crew and captain. Avoid going out to sea during storms or rough seas.",

			subheading_03: "3. Review safety protocols",
			subdesc_03: "Familiarize yourself with lifesaving equipment such as life jackets and life rafts. Participate in all safety drills conducted on board in case of an emergency.",
		},
		"blog_05": {
			image: "/images/blog_05.jpg",
			date: " 2024/12/08",
			alt: "ui/uxdesign_img",
			heading: "How to Create a Powerful UI/UX Portfolio and Land Your Dream Job",
			description: "Crafting an impressive UI/UX portfolio is your gateway to a rewarding career in design. This blog delves into the key elements of a standout portfolio, including showcasing diverse projects, presenting clear case studies, and demonstrating problem-solving abilities. Learn how to highlight your creativity and technical skills while tailoring your work to your desired industry. With practical tips on structure, design, and storytelling, this guide will empower you to build a portfolio that grabs attention and helps you land your dream job in the competitive world of UI/UX design.",
			subheading_01: "1. Master the Basics",
			subdesc_01: "Before you start creating your portfolio, make sure you have a solid understanding of UI principles, tools (e.g. Figma, Adobe XD, Sketch), and methodologies (user research, wireframing, prototyping, and user experience).",

			subheading_02: "2. Choose Your Best Work",
			subdesc_02: "Focus on quality over quantity. Include 4-6 projects that demonstrate your versatility, problem-solving skills, and creativity. Highlight a mix of personal, freelance, and collaborative projects.",

			subheading_03: "3. Tailor Your Application To The Job",
			subdesc_03: " Customize your resume and portfolio to fit the job description. Highlight relevant skills and projects that match the employer's requirements.",
		},
		"blog_06": {
			image: "/images/blog_06.jpg",
			date: " 2024/12/08",
			alt: "footballer_img",
			heading: " How To Become a Professional Soccer Player In 2025 ",
			description: "Dreaming of a soccer career? This blog provides a comprehensive roadmap to becoming a professional soccer player in 2025. From mastering essential skills and maintaining peak physical fitness to navigating trials and building a personal brand, every step is covered. Learn how to leverage modern tools like performance analytics, social media, and specialized coaching to stand out. Whether you're aspiring to join a local club or play on the global stage, this guide offers actionable tips to help you achieve your soccer dreams in today's competitive sports landscape.",
			subheading_01: "1. Start Early, But Never Stop Learning",
			subdesc_01: "Start playing as early as possible to gain basic skills, but remember that it's never too late to improve. Master the fundamentals of dribbling, passing, shooting, positioning, and tactical knowledge.",

			subheading_02: "2. Join a Local Soccer Club OR Academy",
			subdesc_02: "Enroll in a renowned football academy with professional coaches and structured development programs.Make yourself known by taking part in local and regional tournaments.",

			subheading_03: "3. Focus On Physical Preparation And Nutrition",
			subdesc_03: "Build strength, endurance and dexterity using targeted training. Supports healthy diets that are rich in proteins, carbohydrates, and nutrients needed to nurture the body for advanced performance.",
		},
		"blog_07": {
			image: "/images/blog07.jpg",
			date: " 2024/12/08",
			alt: "singer_img",
			heading: "Mayurai Carey Sets a New Entry Using Everything",
			description: "I want for Christmas Mariah Carey's famous celebration national anthem, 'I Want Only You at Christmas,' again took 100 hots on the advertising shield, touched the storm, and touched number one. This eternal classic, first released in 1994, has fascinated spectators around the world and has been a congratulatory song that surpasses 2 billion Ogawa on Spotify. Maria's achievements include completing her successful Christmas tour, further enhancing her status as 'Queen of Christmas' and a global music icon.",
			subheading_01: "1. Breakthrough Innovation",
			subdesc_01: " Mayuraj Carey is revolutionizing the music industry by seamlessly blending diverse genres, instruments, and vocal techniques, setting new standards as a pioneering singer.",

			subheading_02: "2. Holistic Strategy",
			subdesc_02: "With a holistic approach, Mayuraj Carey demonstrates the power of combining creativity, cutting-edge production technology, and emotional depth to deliver an unparalleled musical experience.",

			subheading_03: "3.Record-Breaking Achievement",
			subdesc_03: "This new entry redefines musical excellence and showcases Mayurai Carey's ability to excel in diverse styles, inspiring fans and aspiring artists to think beyond conventional music boundaries.",
		},
		"blog_08": {
			image: "/images/blog_08.jpg",
			date: " 2024/12/08",
			alt: "bussinessmen_img",
			heading: "  How To Start a Commercial Company At Home",
			description: "The start of commercial business companies has become more and more popular and executable options during the modern digital age. You can use innovative technology and strategies to turn your home into a thriving shopping center. This guide covers everything from selecting the right business idea to registering your company, setting up your workspace, and marketing your products or services. Whether it’s an e-commerce store, a consultancy service, or a creative venture, starting at home allows you to minimize overhead costs.",
			subheading_01: "1. Understand The Basics",
			subdesc_01: "Research the market: Identify the product you want to market and research market demand, competition, and profitability.Know the Regulations: Familiarize yourself with local and international trade laws, tariffs, and customs duties.Select a Niche: Focus on a specific product category like textiles, electronics, or agricultural goods to streamline operations.",

			subheading_02: "2. Build Relationships With Suppliers And Buyers",
			subdesc_02: "Find reliable suppliers: Find and contact reliable suppliers through trade shows, online platforms or recommendations. Target the right market: Focus on regions where there is high demand for your products.Build trust: Sign fair contracts and maintain transparent communication with your partners.",

			subheading_03: "3. Promote your business. Create a website",
			subdesc_03: "Create a professional website to showcase your products and services. Use social media: Use platforms like LinkedIn and Instagram to connect with potential buyers.Join online marketplaces: List your products on platforms like Alibaba and Amazon Global.",
		},
		"blog_09": {
			image: "/images/blog_09.jpg",
			date: " 2024/12/08",
			alt: "chocolates_img",
			heading: " Delicious Chocolate and Milk Drinks",
			description: "Immerse yourself in the rich, creamy world of chocolate and milk with these irresistible drink recipes. From a classic chocolate milkshake to a refreshing iced mocha latte to a comforting hot chocolate, you'll find the perfect drink for every mood and occasion. Regardless of whether you mix bananas into fruits or add a mint hint to add a refreshing blow, these recipes are simple and incredible and certainly satisfy your sweet things. These drinks are perfect for chocolate enthusiasts of all ages, easy to make, and are always ideal.",
			subheading_01: "1. Classic Chocolate Milkshake",
			subdesc_01: "Ingredients: 1) cup of refrigerated milk 2)chocolate ice cream balls 2 tablespoons of chocolate syrupWhipped cream (optional)Instructions:Mix the milk, chocolate ice cream and chocolate syrup to smooth consistency. Pour into a tall glass. Garnish with whipped cream and chocolate syrup.",

			subheading_02: "2. Creamy Chocolate Cookies And Drinks Material",
			subdesc_02: "Ingredients: 1) cup of milk 2) tablespoons of chocolate syrup2 Oreo cookie (chop)Whipped cream (optional)Instructions:Mix milk, chocolate syrup and chopped oles. Pour into glasses and top with whipped cream and cookie crumbs.",

			subheading_03: "3. Iced Mocha Latte",
			subdesc_03: "Ingredients: 1) cup milk 1/2 cup freshly brewed coffee (chilled) 2) tbsp. chocolate syrup Ice Instructions:Mix milk, coffee and chocolate syrup in a glass.Add ice and stir well. Decorate with cocoa powder or chocolate chips.",
		},

	};

	const blog = BlogDetails[params.blogpost]

    if(!blog){
    	return <h1>BlogPost Not Found</h1>;
    }

	return (
       <div>
       <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
       <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
       <Image
        className="object-cover object-center rounded-t-full"
        alt={blog.alt}
        src={blog.image}
        width = "600"
        height = "300"
       />
       </div>
       <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">{/*Muzna Amir Zubairi*/}
       <p className="font-bold font-serif text-sm mb-4 text-gray-400">
                                      {blog.date}
       </p>
       <h1 className="font-sans font-bold md:text-2xl lg:text-2xl xl:text-2xl text-lg mb-4 text-justify  text-gray-900">
                                      {blog.heading}
       </h1>
       <p className="mb-8 leading-relaxed font-serif text-justify">
                                       {blog.description}
       </p>
       </div>
       </div>


       <div className="container px-5 py-24 mx-auto">
       <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">{/*Muzna Amir Zubairi*/}
       <div className="sm:mr-10 inline-flex items-center justify-center flex-shrink-0  rounded-full">
       {/* Muzna Amir Zubairi*/}
        <Image
        className="object-cover object-center rounded-full w-32 h-32"
        alt={blog.alt}
        src={blog.image}
        width = "600"
        height = "300"
       />
       </div>
       <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
       <h2 className="text-black text-lg font-sans font-bold mb-2">
                                          {blog.subheading_01}
       </h2>
       <p className="leading-relaxed text-black font-serif text-justify">
                                          {blog.subdesc_01}
       </p>
       </div>
       </div>
       <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">   {/* Muzna Amir Zubairi*/}

       <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
       <h2 className="text-black text-lg font-sans font-bold mb-2">
                                         {blog.subheading_02}
       </h2>
       <p className="leading-relaxed text-black font-serif text-justify">
                                         {blog.subdesc_02}
       </p>
       </div>
       <div className="sm:order-none order-first sm:ml-10 inline-flex items-center justify-center flex-shrink-0">   {/* Muzna Amir Zubairi*/}
       <Image
        className="object-cover object-center rounded-full w-32 h-32"
        alt={blog.alt}
        src={blog.image}
        width = "600"
        height = "300"
       />
      </div>
      </div>
      <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div className="sm:order-none order-first ml-3 inline-flex items-center justify-center flex-shrink-0">
      <Image
        className="object-cover object-center rounded-full w-32 h-32"
        alt={blog.alt}
        src={blog.image}
        width = "600"
        height = "300"
      />
      </div>
      <div className="ml-4 flex-grow sm:text-left text-center mt-6 sm:mt-0">
      <h2 className="text-black text-lg font-sans font-bold mb-2">
                                    {blog.subheading_03}
      </h2>
      <p className="leading-relaxed text-black font-serif text-justify">
                                    {blog.subdesc_03}
      </p>
      </div>
      </div>
      <button className="flex mx-auto mt-20 text-white bg-black font-sans font-bold border-0 py-2 px-8 focus:outline-none  rounded-xl text-lg">{/*Muzna Amir Zubairi*/}
                                      <Link href = "/blog">See More Posts</Link>
      </button>
      </div>

      
    	<CommentsSection postId = {params.blogpost}/>

   </div>
 );
}