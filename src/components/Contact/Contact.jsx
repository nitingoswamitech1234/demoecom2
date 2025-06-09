import HomeLayout from "../../layout/HomeLayout";
import {
  BsInstagram,
  BsWhatsapp,
  BsLinkedin,
  BsEnvelope,
  BsPhone,
} from "react-icons/bs";
import Footer from "../../layout/Footer";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [isdata, setdata] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  // Handle input changes
  function handleUserInput(e) {
    const { name, value } = e.target;
    setdata({
      ...isdata,
      [name]: value,
    });
  }

  // Handle form submission
  async function submitInput(e) {
    e.preventDefault();

    const { fullname, email, phoneNumber, message } = isdata;

    // Validate inputs
    if (!fullname || !email || !phoneNumber || !message) {
      toast.error("Please fill all fields before submitting");
      return;
    }

    try {
      // Send request to backend
      const response = await axios.post(
        "http://localhost:5014/onlinesport/chat",
        isdata
      );

      if (response.data.message === "success") {
        toast.success("Your message sent successfully!");
      } else {
        toast.error(response.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response?.data?.message || "Failed to send message");
    }

    // Reset the form
    setdata({
      fullname: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  }
  const mapContainerStyle = {
    width: "100%",
    height: "400px", // Adjust as per your design
  };

  const center = {
    lat: 28.6448, // Replace with your desired latitude
    lng: 77.216721, // Replace with your desired longitude
  };
  return (
    <HomeLayout>
      <div className="w-full h-[400px] bg-center bg-cover bg-[url('/contactuss.webp')] relative">
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="w-full flex justify-center bg-[#3a1f6fe7] text-white">
        <Toaster position="top-center" reverseOrder={false} />
        {/* <h1 className="md:text-[50px] text-[30px] font-bold">Contact</h1> */}
      </div>
      <section className="w-full flex md:flex-row flex-col md:justify-center p-8 gap-6">
        {/* Left Panel - Contact Info */}
        <div className="lg:w-[40%] md:w-[50%] bg-gray-100 text-black rounded-xl shadow-lg p-6">

          {/* Contact Info & Details */}
          <h2 className="text-xl font-bold mt-4">CONTACT INFO & DETAILS</h2>
          <hr className="border-t my-2" />
          {/* <p className="text-gray-600">
            Premium WordPress Theme mainly Medical Oriented but so flexible that
            lets you build various layouts for any “Health & Beauty” related
            business!
          </p> */}
          <p className="font-bold mt-3">Working hours:</p>
          <p className="text-gray-700">9am – 5pm on weekdays</p>

          <div className="mt-4 flex items-center gap-2">
            <BsPhone className="text-lg text-gray-700" />
            <p className="text-gray-700">(+30) 210 1234567</p>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <BsEnvelope className="text-lg text-gray-700" />
            <p className="text-gray-700">info@healthcareweb.com</p>
          </div>

          <p className="font-bold mt-3">
            79 Folsom Ave, San Francisco, CA 94107
          </p>
          <a href="#" className="text-blue-500 text-sm">
            get directions
          </a>

          {/* Appointment Request */}
          <h2 className="text-xl font-bold mt-6">APPOINTMENT REQUEST</h2>
          <hr className="border-t my-2" />
          <p className="text-gray-600">
            If you wish to book an appointment with a doctor, it is best that
            you visit the
            <a href="/contact" className="text-blue-500">
              {" "}
              Appointment Booking Page{" "}
            </a>
            directly.
          </p>
        </div>

        {/* Right Panel - Contact Form */}
        <div className="md:w-[60%] w-full bg-[#2c4167] text-white rounded-xl shadow-xl shadow-gray-900 p-6">
          <h1 className="text-2xl font-semibold text-center mb-4">
            Hire Our Team / Contact Us
          </h1>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded-md text-black"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded-md text-black"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border p-3 rounded-md text-black"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="border p-3 rounded-md text-black"
            ></textarea>
            <div className="flex gap-4">
              <input
              type="text"
              placeholder="Enter OTP"
              className="border p-3 w-[80%] rounded-md text-black"
            />
            <button className="bg-[#b6a03d] w-[20%] px-3 py-2 text-white rounded-md">Verify</button>
            </div>
            <button className="bg-[#4062a2] text-white p-3 rounded-md text-lg">
              Submit
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </HomeLayout>
  );
}
export default Contact;
