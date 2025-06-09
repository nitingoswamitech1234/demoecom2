import { Link } from "react-router-dom";

const Footer = () => {

  const news = [
    {
      date: "Jan 23",
      title: "Understanding Your Legal Rights",
      description: "When was the last time you reviewed your legal documents or rights?",
    },
    {
      date: "Jan 30",
      title: "Legal Guidance for Families and Businesses",
      description: "From custody battles to contract disputes—legal help tailored for everyone.",
    },
    {
      date: "Feb 15",
      title: "How to Choose the Right Attorney",
      description: "Let’s talk about finding trusted legal help and what to look for in a law firm.",
    },
  ];
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:flex-row md:justify-between md:space-x-8">
        {/* Left Section - Logo & Description */}
        <div className="flex-1">
          <div className="text-2xl font-bold text-white flex items-center gap-2">
          ⚖️ <span>Law Firm</span>
        </div>
          <p className="mt-3 text-gray-300">
            Premium legal-focused theme, flexible enough for any "Law & Justice" related business!
          </p>

          {/* Contact Info */}
          <div className="mt-4 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-700 p-2 rounded">📞</div>
              <span>(+30) 210 1234567</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-blue-700 p-2 rounded">✉️</div>
              <span>info@lawfirmweb.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-blue-700 p-2 rounded">📍</div>
              <span>79 Folsom Ave, San Francisco, CA 94107</span>
            </div>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex-1">
          <h3 className="text-lg font-bold border-b border-white pb-2">
            QUICK LINKS
          </h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            {[
              "All Legal Services  ",
              "Book a Consultation",
              "FAQ",
              "Fees & Payment",
              " Legal Resources  ",
              " Case Studies",
              " Free First Consultation",
            ].map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-400">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex space-x-3">
            {[
              { icon: "🐦", bg: "bg-blue-500", hover: "hover:bg-blue-600" },
              { icon: "📘", bg: "bg-gray-700", hover: "hover:bg-gray-600" },
              { icon: "🔴", bg: "bg-red-300", hover: "hover:bg-red-100" },
              { icon: "🔗", bg: "bg-blue-600", hover: "hover:bg-blue-700" },
              { icon: "💬", bg: "bg-gray-600", hover: "hover:bg-gray-700" },
              { icon: "✉️", bg: "bg-black", hover: "hover:bg-gray-800" },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className={`${social.bg} p-2 rounded ${social.hover}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Social Media */}
        <div className="flex-1">
          <div className="bg-black text-white pb-6 pr-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold border-b pb-2 mb-4">
              LATEST NEWS
            </h2>
            <div className="space-y-4">
              {news.map((item, index) => (
                <div key={index} className="border-b border-white/20 pb-4">
                  <span className="block text-sm font-semibold text-gray-300">
                    {item.date}
                  </span>
                  <h3 className="text-lg font-semibold text-blue-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black text-white border-t-2 flex justify-center text-[20px] items-center pt-3 h-auto mt-4">
        Copyright ©2025 all rights reserved
      </div>
    </footer>
  );
};

export default Footer;
