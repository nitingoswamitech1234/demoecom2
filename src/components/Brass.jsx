import React from "react";
import { useState, useEffect } from "react";
import { Search } from 'lucide-react';
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

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
      <Navbar/>

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
          <>
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
              className="text-lg md:text-[40px] font-semibold text-gray-200 mt-4 flex flex-wrap gap-2"
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
          </>
        )}
      </AnimatePresence>
    </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 md:px-16 flex flex-col gap-10">
        <h2 className="text-3xl font-semibold text-center">
          Explore Our Categories
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              name: "Door Hardware",
              image: "/doorlock.jpg",
            },
            {
              name: "Window Hardware",
              image: "/windowlock.jpg",
            },
            {
              name: "Kitchen Accessories",
              image: "/cabinet.jpg",
            },
            {
              name: "Door Handle",
              image: "/lock.jpg",
            },
          ].map((category, i) => (
            <div
              key={i}
              className="bg-white rounded-lg w-64 overflow-hidden shadow hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-52 object-contain transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-medium">{category.name}</h3>
                <button className="mt-4 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Catalogue */}
      {/* <section className="py-12 px-4 md:px-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Catalogue</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              image: "/doorlock1.jpg",
              name: "Antique Brass Door Lock",
              description:
                "Elegant handcrafted brass door lock with vintage finish.",
              price: 1499,
            },
            {
              id: 2,
              image: "/doorlock3.jpg",
              name: "Classic Door Handle",
              description: "Durable handle with a matte black texture.",
              price: 899,
            },
            {
              id: 3,
              image: "/cabinet.jpg",
              name: "Premium Brass Knob",
              description:
                "Solid brass knob suitable for cabinets and drawers.",
              price: 599,
            },
          ].map((product) => (
            <div key={product.id} className="border p-4 flex flex-col gap-2">
              <img
                src={product.image}
                alt={product.name}
                className="h-40 object-cover"
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-md font-semibold">₹{product.price}</p>

              <form>
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="border px-2 py-1 w-16"
                />
                <button
                  type="submit"
                  className="ml-2 px-4 py-1 bg-black text-white rounded-full"
                >
                  Add to Cart
                </button>
              </form>
            </div>
          ))}
        </div>
      </section> */}

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
      <section className="bg-white py-16 px-6 md:px-20 text-center border-t border-gray-200">
  <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
    <h2 className="text-4xl font-bold tracking-wide uppercase text-gray-900">
      Our Vision & Mission
    </h2>
    <div className="w-16 h-[2px] bg-gray-300 mb-2" />

    <p className="text-lg leading-relaxed text-gray-600">
      We are committed to preserving India’s rich heritage of craftsmanship by blending timeless tradition
      with refined innovation — creating pieces that reflect elegance, integrity, and enduring quality.
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
          <p className="text-lg md:text-xl mt-2">From The Anvil Products</p>
          <button className="mt-6 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
            SHOP NOW
          </button>
        </div>
      </section>


    {/* Journey Video / Slideshow */}
      <section className="py-12 px-4 md:px-16 bg-white text-center">
  <h2 className="text-3xl font-semibold mb-6">
    Journey of <span className="text-yellow-600">BrassMan India</span>
  </h2>

  {/* Embedded YouTube Video */}
  <div className="aspect-video bg-black mx-auto max-w-4xl rounded-lg overflow-hidden shadow-lg mb-8">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/your_video_id"
      title="BrassMan Journey"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

  {/* Company Milestones or Highlights */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    <div className="bg-yellow-50 p-6 rounded-lg shadow hover:shadow-md transition">
      <h3 className="text-xl font-bold text-yellow-700 mb-2">20+ Years Legacy</h3>
      <p className="text-gray-600 text-sm">
        Serving quality brassware products globally since 2004.
      </p>
    </div>

    <div className="bg-yellow-50 p-6 rounded-lg shadow hover:shadow-md transition">
      <h3 className="text-xl font-bold text-yellow-700 mb-2">Global Reach</h3>
      <p className="text-gray-600 text-sm">
        Trusted by over 300+ retailers and distributors worldwide.
      </p>
    </div>

    <div className="bg-yellow-50 p-6 rounded-lg shadow hover:shadow-md transition">
      <h3 className="text-xl font-bold text-yellow-700 mb-2">Modern Craftsmanship</h3>
      <p className="text-gray-600 text-sm">
        Blending traditional Indian craft with modern design.
      </p>
    </div>
  </div>
</section>


      
      {/* Inquiry Form */}

      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
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
      <section className="py-12 px-4 md:px-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2].map((t) => (
            <div key={t} className="w-80 bg-white p-4 shadow rounded-lg">
              <p className="italic text-gray-600">
                "Excellent craftsmanship and fast delivery!"
              </p>
              <p className="mt-2 font-semibold">– Happy Client</p>
            </div>
          ))}
        </div>
      </section>


      {/* Gallery */}
      {/* <section className="py-12 px-4 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-6">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((g) => (
            <div key={g} className="h-40 bg-gray-300"></div>
          ))}
        </div>
      </section> */}

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
