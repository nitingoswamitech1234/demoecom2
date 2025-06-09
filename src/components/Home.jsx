import React from "react";
import Footer from "../layout/Footer";
import {Link} from 'react-scroll';
import Disclaimer from "../layout/Disclaimer";
import Disclaime from "../layout/Disclame";

const LawFirmPage = () => {
  const blogs = [
    {
      image: "/blog11.jpg",
      title: "We Won Against Criminal",
      highlight: "Against Criminal",
      description:
        "In this Kidnapping the unlawful taking away or transportation of person against that person’s will unlawfully...",
      buttonText: "READ MORE",
    },
    {
      image: "/blog22.jpg",
      title: "Legal Issues Paternity",
      highlight: "Paternity",
      description:
        "In this Kidnapping the unlawful taking away or transportation of person against that person’s will unlawfully...",
      buttonText: "READ MORE",
    },
    {
      image: "/blog23.jpg",
      title: "Judgement Unfair Business",
      highlight: "Unfair Business",
      description:
        "In this Kidnapping the unlawful taking away or transportation of person against that person’s will unlawfully...",
      buttonText: "READ MORE",
    },
  ];
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed top-0 w-full z-40">
        <div className="text-2xl font-bold text-yellow-800 flex items-center gap-2">
          ⚖️ <span>Law Firm</span>
        </div>
        <ul className="hidden md:flex gap-6 font-medium text-gray-800">
          {[
            { label: "HOME", to: "home" },
            { label: "ABOUT", to: "about" },
            { label: "PRACTICE AREAS", to: "practice" },
            { label: "ATTORNEY", to: "attorneys" },
            { label: "BLOG", to: "blog" },
            { label: "CONTACT", to: "contact" },
          ].map(({ label, to }, i) => (
            <li key={i}>
              <Link
                activeClass="text-yellow-700 font-bold"
                to={to}
                spy={true}
                smooth={true}
                offset={-80} // Adjust based on navbar height
                duration={500}
                className="cursor-pointer hover:text-yellow-600"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
       <Disclaime/>
      {/* Hero Section */}
      <header
        id='home'
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/parliament.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-white text-4xl md:text-6xl font-semibold mb-4">
              Earn More with us.
            </h1>
            <p className="text-white text-lg md:text-xl mb-6">
              Aenean tellus vitae ex rhoncus Sollicitudin
            </p>
            <Link to ='/contact' className="bg-yellow-600 text-white text-2xl px-6 py-3 rounded hover:bg-yellow-700 transition">
              Talk to us
            </Link>
          </div>
        </div>
      </header>
       <Disclaimer/>

      {/* About Section */}
      <section id="about" className="flex flex-col md:flex-row items-center justify-center py-16 px-32 bg-white">
        <img
          src="/laywer1.jpg"
          alt="lawyer"
          className="w-[50%]  h-[40%] md:w-[40%] rounded-xl"
        />
        <div className="md:ml-12 mt-6 md:mt-0 flex flex-col gap-4 justify-center items-start w-[60%]">
          <h2 className="text-5xl font-semibold mb-4">
            OVER 20 YEARS OF EXPERIENCE
          </h2>
          <h2 className="text-3xl font-semibold mb-4">FOUNDER IN 2014</h2>
          <p className="mb-4 text-gray-600">
            We’ve proudly provided services to many clients with integrity and
            expertise. With a dedicated team and over 15 years of experience, we
            ensure the best outcomes for our clients.
          </p>
          <button className="bg-yellow-600 text-white px-5 py-2 rounded hover:bg-yellow-700">
            READ MORE
          </button>
        </div>
      </section>
 
      {/* Practice Areas */}
      <section id="practice"  className="bg-gray-50 py-16 px-10">
        <h2 className="text-center text-3xl font-bold mb-10">PRACTICE AREAS</h2>
        <div className="flex w-full flex-col md:flex-row justify-center flex-wrap gap-6">
          {["Family Law", "Accident Law", "Business Law"].map((area, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden  flex-col md:w-[30%]"
            >
              <img
                src={`/practice${i + 1}.jpg`}
                alt={area}
                className="w-full h-50 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-xl">{area}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Consultation Available
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Attorneys */}
      <section id="attorneys" className="bg-gray-50 py-16 px-10">
        <h2 className="text-center text-3xl font-bold mb-10">
          Know the attorneys
        </h2>
        <div className="flex w-full flex-col md:flex-row justify-center flex-wrap gap-6">
          {["Thi Nguyet", "Soph Hime", "Bich Dang"].map((area, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden  flex-col md:w-[30%]"
            >
              <img
                src={`/attorney${i + 1}.jpg`}
                alt={area}
                className="w-full h-50 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-xl">{area}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Consultation Available
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

          {/* Blogs */}
      <section id="blog" className="py-12 px-4 md:px-12 lg:px-24 bg-white">
        <div className="flex flex-col gap-8">
          {blogs.map((blog, index) => {
            const parts = blog.title.split(blog.highlight);
            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full md:w-1/2 h-64 object-cover"
                />
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    {parts[0]}
                    <span className="text-orange-500">{blog.highlight}</span>
                    {parts[1]}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {blog.description}
                  </p>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                    {blog.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Map + Contact */}
      <section id="contact"  className="flex flex-col lg:flex-row gap-10 py-16 px-20 bg-gray-50">
        <div className="flex-1 gap-6">
          <h3 className="text-5xl font-bold mb-4">LAW-FIRM COUNTRY</h3>
          <p className="text-gray-600 mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <ul className="text-gray-800">
            <li>📍 Miami, Florida, US</li>
            <li>📞 +1 234 567 890</li>
            <li>✉️ info@lawfirm.com</li>
          </ul>
        </div>
        <iframe
          className="flex-1 w-full h-72 rounded-lg"
          src="https://www.google.com/maps/embed?..."
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 px-6 bg-white">
        <h2 className="text-center text-3xl font-bold mb-10">CONTACT US</h2>

        <form className="max-w-3xl mx-auto flex flex-wrap gap-6">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded w-full md:w-[48%]"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="border p-3 rounded w-full md:w-[48%]"
          />

          {/* Subject - full width */}
          <input
            type="text"
            placeholder="Subject"
            className="border p-3 rounded w-full"
          />

          {/* Message - full width */}
          <textarea
            placeholder="Your Message"
            className="border p-3 rounded w-full h-32"
          ></textarea>

          {/* OTP & Verify Button */}
          <div className="flex w-full gap-4">
            <input
              type="text"
              placeholder="Enter OTP"
              className="border p-3 rounded-md w-[80%] text-black"
            />
            <button
              type="button"
              className="bg-[#b6a03d] w-[20%] px-3 py-2 text-white rounded-md"
            >
              Verify
            </button>
          </div>

          {/* Submit Button - full width */}
          <button
            type="submit"
            className="bg-yellow-600 text-white px-6 py-3 rounded hover:bg-yellow-700 w-full"
          >
            SEND YOUR MESSAGE
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default LawFirmPage;

