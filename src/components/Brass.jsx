import React from "react";
import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const sentence1 = "Home of Timeless Craftsmanship";
const sentence2 = "ELEGANT DETAILS FOR HOMES OF CHARACTER AND CHARM";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function HomePage() {
  // slider

  const testimonials = [
    {
      text: "Excellent craftsmanship and fast delivery!",
      name: "– Happy Client",
    },
    {
      text: "Truly premium quality with traditional charm.",
      name: "– Interior Designer",
    },
    {
      text: "Perfect finishing, packaging, and timely delivery!",
      name: "– Retail Partner",
    },
    {
      text: "Very impressed by their attention to detail.",
      name: "– Architect",
    },
    {
      text: "Reliable, elegant, and handcrafted to perfection.",
      name: "– Loyal Customer",
    },
  ];

  const sliderRef = useRef(null);

  const categories = [
    { name: "Door Hardware", image: "/doorlock.jpg", price: 1499 },
    { name: "Window Hardware", image: "/windowlock.jpg", price: 699 },
    { name: "Kitchen Accessories", image: "/cabinet.jpg", price: 1299 },
    { name: "Door Handle", image: "/lock.jpg", price: 599 },
    { name: "Drawer Knobs", image: "/drawer.jpg", price: 499 },
    { name: "Curtain Holders", image: "/curtain.jpg", price: 499 },
  ];

   const [quantities, setQuantities] = useState(
      categories.map(() => 1) // default quantity 1 for each product
    );

  const updateQuantity = (index, change) => {
  setQuantities((prev) =>
    prev.map((q, i) => (i === index ? Math.max(0, q + change) : q))
  );
};
  // Duplicate for looping effect
  const duplicated = [...categories, ...categories];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollSpeed = 1; // Increase for faster scroll
    const interval = setInterval(() => {
      slider.scrollLeft += scrollSpeed;

      // Reset scroll when reached end
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
    }, 20); // 20ms = ~50fps smoothness

    return () => clearInterval(interval); // Cleanup
  }, []);

  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false); // hide first to retrigger animation
      setTimeout(() => setShow(true), 100); // show again after short pause
    }, 5000); // every 5 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  const images = [
    "/doorlock1.jpg",
    "/doorlock3.jpg",
    "/cabinet.jpg",
    "/windowlock.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="flex flex-col text-gray-800 bg-white">
      {/* navbar */}
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[100vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="bg-black bg-opacity-60 absolute w-full h-full top-0 left-0"></div>

        {/* Content */}
        <div className="z-10 px-4">
          <AnimatePresence>
            {show && (
              <div>
                <motion.h1
                  key="line1"
                  className="text-4xl md:text-2xl text-white flex flex-wrap gap-2"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {sentence1.split(" ").map((word, index) => (
                    <motion.span key={index} variants={wordAnimation}>
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>

                <motion.p
                  key="line2"
                  className=" text-lg md:text-[40px] font-semibold text-gray-200 mt-4 flex flex-wrap gap-1 md:gap-4"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {sentence2.split(" ").map((word, index) => (
                    <motion.span key={index} variants={wordAnimation}>
                      {word}
                    </motion.span>
                  ))}
                </motion.p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Categories */}
      <section className="py-2 px-4 md:px-16 flex flex-col gap-10 bg-[#def0dd]">
         <div className="py-10 ">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Explore Our Categories
      </h2>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={5000}
        grabCursor={false}
        className="px-6"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {categories.map((cat, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform transform  w-[80%] mx-auto">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-44 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-1">{cat.name}</h3>
                <p className="text-gray-600 font-medium mb-2">₹{cat.price}</p>

                {/* Quantity controls */}
                <div className="flex items-center justify-center gap-3 mb-3">
                  <button
                    onClick={() => updateQuantity(i, -1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    –
                  </button>
                  <span className="font-semibold">{quantities[i]}</span>
                  <button
                    onClick={() => updateQuantity(i, 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
                  Add to Cart
                </button>
                </div>

                {/* Add to cart */}
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
      </section>

      <section
        className="relative h-[100vh] flex items-center justify-center text-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute w-full h-full bg-black bg-opacity-50 top-0 left-0"></div>

        {/* Content */}
        <div className="relative z-10 px-4 text-white">
          <h2 className="text-4xl md:text-6xl font-bold">BE INSPIRED</h2>
          <button className="mt-6 bg-white text-black px-6 py-2 rounded-full font-semibold">
            VIEW GALLERY
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 flex justify-center gap-2 z-10">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            ></span>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#e6f6e5] md:py-16 py-8 px-6 md:px-20 text-center border-t border-gray-200">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-4xl font-bold tracking-wide uppercase text-gray-900">
            Our Vision & Mission
          </h2>
          <div className="w-16 h-[2px] bg-gray-600 mb-2" />

          <p className="text-lg leading-relaxed text-gray-600">
            We take pride in preserving the timeless heritage of Indian
            craftsmanship — a tradition built on passion, precision, and
            artistry passed down through generations. Our creations are a
            seamless fusion of cultural richness and contemporary innovation,
            designed to bring character and elegance into modern living spaces.
            Each piece we craft is more than just a product; it is a reflection
            of integrity, beauty, and enduring quality. We aim to celebrate and
            elevate traditional techniques while shaping them into forms that
            resonate with today’s lifestyles, ensuring that India’s artistic
            soul continues to shine on a global stage.
          </p>
        </div>
      </section>

      <section
        className="relative h-[100vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/windowarea.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 px-4 text-white flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold">HOW TO BUY</h2>
          {/* <p className="text-lg md:text-xl mt-2">From The Anvil Products</p> */}
          <button className="mt-6 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
            SHOP NOW
          </button>
        </div>
      </section>

      {/* Journey Video / Slideshow */}
      <section className="py-12 px-4 md:px-16 bg-[#def0dd] text-center md:text-left">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Journey of <span className="text-yellow-700">BrassMan India</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
          {/* Left: Milestones */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <div className="bg-[#ecf6eb] p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold text-yellow-700 mb-2">
                20+ Years Legacy
              </h3>
              <p className="text-gray-600 text-sm">
                Serving quality brassware products globally since 2004.
              </p>
            </div>

            <div className="bg-[#ecf6eb] p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold text-yellow-700 mb-2">
                Global Reach
              </h3>
              <p className="text-gray-600 text-sm">
                Trusted by over 300+ retailers and distributors worldwide.
              </p>
            </div>

            <div className="bg-[#ecf6eb] p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold text-yellow-700 mb-2">
                Modern Craftsmanship
              </h3>
              <p className="text-gray-600 text-sm">
                Blending traditional Indian craft with modern design.
              </p>
            </div>
          </div>

          {/* Right: YouTube Video */}
          <div className="w-full md:w-1/2">
            <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/your_video_id"
                title="BrassMan Journey"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}

      <section
        className="relative h-[100vh]  flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/lock.jpg')" }}
      >
        {/* Dark transparent overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0"></div>

        {/* Centered Contact Form */}
        <div className="relative z-10 bg-black bg-opacity-70 p-8 rounded-md w-full max-w-2xl">
          <h2 className="text-white text-3xl text-center font-semibold uppercase">
            HAVE A <span className="text-blue-400">QUESTION?</span>
          </h2>
          <div className="h-1 w-20 bg-blue-400 mx-auto my-4"></div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name *"
              className="bg-transparent border p-3 text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email *"
              className="bg-transparent border p-3 text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number *"
              className="bg-transparent border p-3 text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject *"
              className="bg-transparent border p-3 text-white focus:outline-none"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="bg-transparent border p-3 text-white md:col-span-2 focus:outline-none"
            ></textarea>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="px-8 py-2 mt-2 border text-white hover:bg-white hover:text-black transition"
              >
                SEND REQUEST
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 md:px-16 bg-[#ecf6eb] text-center">
        <h2 className="text-3xl font-semibold mb-8">What Our Clients Say</h2>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="w-full bg-white p-6 shadow-md rounded-xl max-w-xs mx-auto">
                <p className="italic text-gray-600">"{item.text}"</p>
                <p className="mt-3 font-semibold text-gray-800">{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-16 bg-black text-white text-center flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} BrassMan India. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
