// import React from "react";
// import { useState, useEffect, useRef } from "react";
// import Navbar from "./Navbar";
// import { motion, AnimatePresence } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import { Mail, Phone, MapPin } from 'lucide-react';

// const sentence1 = "Timeless Hardware for Modern Spaces";
// const sentence2 = "ELEGANT DETAILS FOR HOMES OF CHARACTER AND CHARM";

// const container = {
//   hidden: { opacity: 1 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const wordAnimation = {
//   hidden: { opacity: 0, y: 10 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
// };

// export default function HomePage() {
//   // slider

//   const testimonials = [
//     {
//       text: "Excellent craftsmanship and fast delivery!",
//       name: "– Happy Client",
//     },
//     {
//       text: "Truly premium quality with traditional charm.",
//       name: "– Interior Designer",
//     },
//     {
//       text: "Perfect finishing, packaging, and timely delivery!",
//       name: "– Retail Partner",
//     },
//     {
//       text: "Very impressed by their attention to detail.",
//       name: "– Architect",
//     },
//     {
//       text: "Reliable, elegant, and handcrafted to perfection.",
//       name: "– Loyal Customer",
//     },
//   ];

//   const sliderRef = useRef(null);

//   const categories = [
//     { name: "Door Hardware", image: "/doorlock.webp", price: 1499 },
//     { name: "Window Hardware", image: "/windowlock.webp", price: 699 },
//     { name: "Kitchen Accessories", image: "/cabinet.webp", price: 1299 },
//     { name: "Door Handle", image: "/lock.webp", price: 599 },
//     { name: "Drawer Knobs", image: "/drawer.webp", price: 499 },
//     { name: "Curtain Holders", image: "/curtain.webp", price: 499 },
//   ];

//    const [quantities, setQuantities] = useState(
//       categories.map(() => 1) // default quantity 1 for each product
//     );

//   const updateQuantity = (index, change) => {
//   setQuantities((prev) =>
//     prev.map((q, i) => (i === index ? Math.max(0, q + change) : q))
//   );
// };
//   // Duplicate for looping effect
//   const duplicated = [...categories, ...categories];

//   useEffect(() => {
//     const slider = sliderRef.current;
//     if (!slider) return;

//     const scrollSpeed = 1; // Increase for faster scroll
//     const interval = setInterval(() => {
//       slider.scrollLeft += scrollSpeed;

//       // Reset scroll when reached end
//       if (slider.scrollLeft >= slider.scrollWidth / 2) {
//         slider.scrollLeft = 0;
//       }
//     }, 20); // 20ms = ~50fps smoothness

//     return () => clearInterval(interval); // Cleanup
//   }, []);

//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShow(false); // hide first to retrigger animation
//       setTimeout(() => setShow(true), 100); // show again after short pause
//     }, 5000); // every 5 seconds

//     return () => clearInterval(interval); // cleanup
//   }, []);

//   const images = [
//     "/doorlock1.webp",
//     "/doorlock3.webp",
//     "/cabinet.webp",
//     "/windowlock.webp",
//     "/drawer.webp",
//     "/curtain.webp"
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // 3 seconds

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <main className="flex flex-col text-gray-800 bg-white">
//       {/* navbar */}
//       <Navbar />

//       {/* Hero Banner */}
//       <section className="relative h-[100vh] flex items-center justify-center text-center overflow-hidden">
//         {/* Background Video */}
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover"
//         >
//           <source src="/video3.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Dark Overlay */}
//         <div className="bg-black bg-opacity-60 absolute w-full h-full top-0 left-0"></div>

//         {/* Content */}
//         <div className="z-10 px-4">
//           <AnimatePresence>
//             {show && (
//               <div>
//                 <motion.h1
//                   key="line1"
//                   className="text-4xl md:text-2xl font-cinzel text-white flex flex-wrap gap-2"
//                   variants={container}
//                   initial="hidden"
//                   animate="visible"
//                   exit="hidden"
//                 >
//                   {sentence1.split(" ").map((word, index) => (
//                     <motion.span key={index} variants={wordAnimation}>
//                       {word}
//                     </motion.span>
//                   ))}
//                 </motion.h1>

//                 <motion.p
//                   key="line2"
//                   // style={{ fontFamily: 'Poppins, sans-serif' }}
//                   className=" text-lg md:text-[40px] font-cinzel text-gray-200 mt-4 flex flex-wrap gap-1 md:gap-4"
//                   variants={container}
//                   initial="hidden"
//                   animate="visible"
//                   exit="hidden"
//                 >
//                   {sentence2.split(" ").map((word, index) => (
//                     <motion.span key={index} variants={wordAnimation}>
//                       {word}
//                     </motion.span>
//                   ))}
//                 </motion.p>
//               </div>
//             )}
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="py-2 px-4 md:px-16 flex flex-col gap-10 bg-[#f3e4e6]">
//          <div className="py-10 ">
//       <h2 className="text-3xl font-semibold font-cinzel text-center mb-6">
//         Explore Our Product Categories
//       </h2>

//       <Swiper
//         modules={[Autoplay]}
//         slidesPerView={4}
//         spaceBetween={20}
//         loop={true}
//         autoplay={{ delay: 2000, disableOnInteraction: false }}
//         speed={5000}
//         grabCursor={false}
//         className="px-6"
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           640: { slidesPerView: 2 },
//           1024: { slidesPerView: 4 },
//         }}
//       >
//         {categories.map((cat, i) => (
//           <SwiperSlide key={i}>
//             <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform transform  w-[80%] mx-auto">
//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 className="w-full h-44 object-cover"
//               />
//               <div className="p-4 text-center">
//                 <h3 className="text-lg font-semibold mb-1">{cat.name}</h3>
//                 <p className="text-gray-600 font-medium mb-2">₹{cat.price}</p>

//                 {/* Quantity controls */}
//                 <div className="flex items-center justify-center gap-3 mb-3">
//                   <button
//                     onClick={() => updateQuantity(i, -1)}
//                     className="px-2 py-1 bg-gray-200 rounded"
//                   >
//                     –
//                   </button>
//                   <span className="font-semibold">{quantities[i]}</span>
//                   <button
//                     onClick={() => updateQuantity(i, 1)}
//                     className="px-2 py-1 bg-gray-200 rounded"
//                   >
//                     +
//                   </button>
//                   <button className="bg-black font-poppins text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
//                   Add to Cart
//                 </button>
//                 </div>

//                 {/* Add to cart */}

//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//       </section>

//       <section
//         className="relative h-[100vh] flex items-center justify-center text-center transition-all duration-1000"
//         style={{
//           backgroundImage: `url(${images[currentIndex]})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Dark overlay */}
//         <div className="absolute w-full h-full bg-black bg-opacity-50 top-0 left-0"></div>

//         {/* Content */}
//         <div className="relative z-10 px-4 text-white">
//           <h2 className="text-4xl font-cinzel md:text-6xl font-bold">BE INSPIRED</h2>
//           <button className="mt-6 bg-white font-cinzel text-black px-6 py-2 rounded-full font-semibold">
//             VIEW GALLERY
//           </button>
//         </div>

//         {/* Dots */}
//         <div className="absolute bottom-6 flex justify-center gap-2 z-10">
//           {images.map((_, index) => (
//             <span
//               key={index}
//               className={`w-3 h-3 rounded-full ${
//                 index === currentIndex ? "bg-white" : "bg-white/50"
//               }`}
//             ></span>
//           ))}
//         </div>
//       </section>

//       {/* Vision & Mission */}
//       <section className="bg-[#f3e4e6] md:py-16 py-8 px-6 md:px-20 text-center border-t border-gray-200">
//         <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
//           <h2 className="text-4xl font-cinzel font-bold tracking-wide uppercase text-gray-900">
//             Our Vision & Mission
//           </h2>
//           <div className="w-16 h-[2px] bg-gray-600 mb-2" />

//           <p className="text-lg leading-relaxed font-cinzel text-gray-600">
//             We take pride in preserving the timeless heritage of Indian
//             craftsmanship — a tradition built on passion, precision, and
//             artistry passed down through generations. Our creations are a
//             seamless fusion of cultural richness and contemporary innovation,
//             designed to bring character and elegance into modern living spaces.
//             Each piece we craft is more than just a product; it is a reflection
//             of integrity, beauty, and enduring quality. We aim to celebrate and
//             elevate traditional techniques while shaping them into forms that
//             resonate with today’s lifestyles, ensuring that India’s artistic
//             soul continues to shine on a global stage.
//           </p>
//         </div>
//       </section>

//       <section
//         className="relative h-[100vh] flex items-center justify-center text-center"
//         style={{
//           backgroundImage: "url('/windowarea.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

//         {/* Content */}
//         <div className="relative z-10 px-4 text-white flex flex-col items-center">
//           <h2 className="text-4xl md:text-6xl font-cinzel font-bold">HOW TO BUY</h2>
//           {/* <p className="text-lg md:text-xl mt-2">From The Anvil Products</p> */}
//           <button className="mt-6 bg-white text-black px-6 py-2 font-cinzel rounded-full font-semibold hover:bg-gray-200 transition">
//             SHOP NOW
//           </button>
//         </div>
//       </section>

//       {/* Journey Video / Slideshow */}
//       <section className="py-12 px-4 md:px-16 bg-[#f3e4e6] text-center md:text-left">
//         <h2 className="text-3xl font-semibold mb-10 font-cinzel text-center">
//           Journey of <span className="text-yellow-700">BrassMan India</span>
//         </h2>

//         <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
//           {/* Left: Milestones */}
//           <div className="flex flex-col gap-6 w-full md:w-1/2">
//             <div className="bg-[#e4f2f3] p-6 rounded-lg shadow hover:shadow-md transition">
//               <h3 className="text-xl font-cinzel font-bold text-yellow-700 mb-2">
//                 20+ Years Legacy
//               </h3>
//               <p className="text-gray-600 font-poppins text-sm">
//                 Serving quality brassware products globally since 2004.
//               </p>
//             </div>

//             <div className="bg-[#e4f2f3] font-poppins p-6 rounded-lg shadow hover:shadow-md transition">
//               <h3 className="text-xl font-bold text-yellow-700 mb-2">
//                 Global Reach
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Trusted by over 300+ retailers and distributors worldwide.
//               </p>
//             </div>

//             <div className="bg-[#e4f2f3] font-poppins p-6 rounded-lg shadow hover:shadow-md transition">
//               <h3 className="text-xl font-bold text-yellow-700 mb-2">
//                 Modern Craftsmanship
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Blending traditional Indian craft with modern design.
//               </p>
//             </div>
//           </div>

//           {/* Right: YouTube Video */}
//           <div className="w-full md:w-1/2">
//             <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
//               <iframe
//                 className="w-full h-full"
//                 src="https://www.youtube.com/embed/your_video_id"
//                 title="BrassMan Journey"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Inquiry Form */}

//      <section
//       className="relative md:h-[100vh] flex items-center justify-center bg-cover bg-center px-4"
//       style={{ backgroundImage: "url('/accessories.webp')" }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Main Container */}
//       <div className="relative z-10 bg-black bg-opacity-60 p-8 rounded-md w-full md:w-[60%] grid md:grid-cols-2 gap-8 items-center">
//         {/* Contact Form */}
//         <div>
//           <h2 className="text-white text-3xl font-cinzel font-semibold uppercase text-center md:text-left">
//             HAVE A <span className="text-blue-400">QUESTION?</span>
//           </h2>
//           <div className="h-1 w-20 bg-blue-400 my-4 mx-auto md:mx-0"></div>

//           <form className="grid grid-cols-1 gap-4">
//             <input
//               type="text"
//               placeholder="Name *"
//               className="bg-transparent border p-3 text-white focus:outline-none"
//             />
//             <input
//               type="email"
//               placeholder="Email *"
//               className="bg-transparent border p-3 text-white focus:outline-none"
//             />
//             <input
//               type="text"
//               placeholder="Phone Number *"
//               className="bg-transparent border p-3 text-white focus:outline-none"
//             />
//             <input
//               type="text"
//               placeholder="Subject *"
//               className="bg-transparent border p-3 text-white focus:outline-none"
//             />
//             <textarea
//               rows="4"
//               placeholder="Message"
//               className="bg-transparent border p-3 text-white focus:outline-none"
//             ></textarea>
//             <div className="text-center md:text-left">
//               <button
//                 type="submit"
//                 className="px-8 py-2 mt-2 border text-white hover:bg-white hover:text-black transition"
//               >
//                 SEND REQUEST
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Contact Info */}
//         <div className="text-white flex flex-col gap-6 text-center md:text-left">
//           <div className="flex items-start gap-4">
//             <Mail className="text-blue-400 mt-1" size={24} />
//             <div className="flex md:flex-col gap-4">
//               <h3 className="text-xl font-semibold mb-1 text-blue-400">Email</h3>
//               <p className="text-sm">support@brassman.com</p>
//               <p className="text-sm hidden md:block">sales@brassman.com</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <Phone className="text-blue-400 mt-1" size={24} />
//             <div className="flex md:flex-col gap-4">
//               <h3 className="text-xl font-semibold mb-1 text-blue-400">Phone</h3>
//               <p className="text-sm">+91 98765 43210</p>
//               <p className="text-sm hidden md:block">+91 91234 56789</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <MapPin className="text-blue-400 mt-1 hidden md:block" size={24} />
//             <div className="hidden md:block">
//               <h3 className="text-xl font-semibold mb-1 text-blue-400">Office</h3>
//               <p className="text-sm leading-relaxed">
//                 BrassMan India Pvt. Ltd. <br />
//                 123 Heritage Lane,<br />
//                 Jaipur, Rajasthan – 302001
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>


//       {/* Testimonials */}
//       <section className="py-12 px-4 md:px-16 bg-[#f3e4e6] text-center">
//         <h2 className="text-3xl font-cinzel font-semibold mb-8">What Our Clients Say</h2>

//         <Swiper
//           modules={[Autoplay]}
//           slidesPerView={3}
//           spaceBetween={30}
//           loop={true}
//           autoplay={{ delay: 0, disableOnInteraction: false }}
//           speed={3000}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {testimonials.map((item, i) => (
//             <SwiperSlide key={i}>
//               <div className="w-full bg-white p-6 shadow-md rounded-xl max-w-xs mx-auto">
//                 <p className="italic text-gray-600">"{item.text}"</p>
//                 <p className="mt-3 font-semibold text-gray-800">{item.name}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 px-4 md:px-16 bg-black text-white text-center flex flex-col items-center gap-4">
//         <div className="flex gap-4">
//           <a href="#">Instagram</a>
//           <a href="#">Facebook</a>
//           <a href="#">LinkedIn</a>
//         </div>
//         <p>
//           &copy; {new Date().getFullYear()} BrassMan India. All rights reserved.
//         </p>
//       </footer>
//     </main>
//   );
// }

import React from "react";
import { Search, ShoppingCart } from "lucide-react";
import { PackageCheck, Truck, Briefcase, Settings } from "lucide-react";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header className="w-full border-b bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="text-xl font-bold text-slate-800">
            Your <span className="text-sky-700">Logo</span>
          </div>

          <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-700">
            <a href="#">Sash Cords</a>
            <a href="#">Window Fittings</a>
            <a href="#">Period Door Furniture</a>
            <a href="#">Weatherseals</a>
            <a href="#">Accessories</a>
            <a href="#" className="text-red-600 font-semibold">Clearance</a>
            <a href="#">About</a>
          </nav>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="hidden md:block border px-3 py-1 rounded-md text-sm"
            />
            <button className="bg-sky-700 text-white px-4 py-1 rounded-md">
              Search
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-12 gap-6">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
              Timeless Fittings  <br /> for Windows & Doors
            </h1>
            <p className="text-slate-600 mb-6">
              Crafted for those who appreciate enduring quality, we’re the  trusted trade-only importer and distributor of solid brass ironmongery.
              From classic sash windows to period-style doors — our fittings combine traditional craftsmanship with modern precision.
            </p>
            <button className="bg-sky-700 text-white px-5 py-2 rounded-md hover:bg-sky-800">
              Get in touch
            </button>
          </div>

          <div className="flex-1">
            <img
              src="/windowlock.webp"
              alt="Hero"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 px-6 py-10 text-center">
        {/* Item 1 */}
        <div className="flex flex-col items-center">
          <PackageCheck className="w-10 h-10 text-sky-700 mb-3" />
          <p className="font-semibold text-slate-700">
            Over 1500 quality items <br /> to choose from
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center">
          <Truck className="w-10 h-10 text-sky-700 mb-3" />
          <p className="font-semibold text-slate-700">
            Free delivery on all <br /> orders £100+
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center">
          <Briefcase className="w-10 h-10 text-sky-700 mb-3" />
          <p className="font-semibold text-slate-700">
            We're a Trade <br /> Only Business
          </p>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center">
          <Settings className="w-10 h-10 text-sky-700 mb-3" />
          <p className="font-semibold text-slate-700">
            Custom orders <br /> available
          </p>
        </div>
      </section>

      {/* Popular Products */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Our most popular products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Period Slim Doctor Door Knocker",
            "Victorian LETTERS Plate",
            "Beehive Finger Plate",
            "Privacy Indicator Door Bolt",
          ].map((item, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 flex flex-col items-center text-center bg-white shadow-sm hover:shadow-md transition"
            >
              <img
                src="/doorlock1.webp"
                alt={item}
                className="mb-3"
              />
              <p className="text-sm font-medium">{item}</p>
            </div>
          ))}
        </div>
        <button className="mt-6 px-4 py-2 border rounded-md">Next</button>
      </section>

      {/* New Items */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">New items</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {[
            "Brighton Fastener",
            "Victorian Sash Bars",
            "Brass Wheel Faceplate",
            "Square Steel Faceplate",
          ].map((item, idx) => (
            <div
              key={idx}
              className="min-w-[200px] border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition"
            >
              <img
                src="/lock2.webp"
                alt={item}
                className="mb-3"
              />
              <span className="text-xs bg-sky-600 text-white px-2 py-1 rounded-md">
                NEW
              </span>
              <p className="text-sm mt-2 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold text-lg">Timeless Direct</p>
            <p className="mt-2 text-sm">
              Unit 2a, Hall Mss Business P0, Boll Road, Bull Hill, Darwen
              BB3 2TT
            </p>
            <p className="mt-2 text-sm">📞 01254 773945</p>
            <p className="text-sm">✉ info@titlehardwaree.com</p>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>
          </div>
        </div>
        <div className="text-center text-xs py-3 border-t border-slate-600">
          © 2025 Traditional Hardware Direct Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

