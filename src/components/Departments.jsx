import HomeLayout from "../layout/HomeLayout";
import {
  BsPhone,
  BsPerson,
  BsClipboardCheck,
  BsHospital,
} from "react-icons/bs";
import {
  BsJournalMedical,
  BsPersonBadge,
  BsCalendarCheck,
} from "react-icons/bs";
import Footer from "../layout/Footer";

function Department() {
  return (
    <HomeLayout>
      <div
        className="relative w-full h-[400px] md:h-[400px] flex items-end bg-cover bg-center"
        style={{ backgroundImage: "url('/departments.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Angled Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gray-200 transform skew-y-[-2deg] origin-bottom"></div>

        {/* Content */}
        <div className="relative z-10 w-full bg-gray-200 py-10 px-6 md:px-[100px]">
          <h2 className="text-gray-900 text-3xl md:text-4xl font-bold">
            DEPARTMENTS
          </h2>
          <p className="text-gray-600 text-lg">A list of all our Departments</p>
        </div>
      </div>
      <div className="bg-white ">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:justify-center p-8">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/cosmetics.webp" // Replace with actual image URL
              alt="Cosmetic Surgery"
              className="rounded-lg w-[80%]"
            />
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pr-[40px]">
            <h1 className="md:text-3xl text-xl font-bold">COSMETIC SURGERY DEPARTMENT</h1>
            <p className="text-lg text-gray-600 mt-2">
              Specialized in Rhinoplasty
            </p>
            <p className="text-gray-500 mt-4">
              Our Cosmetic Surgery Department specializes in advanced
              rhinoplasty and facial enhancements. We are dedicated to providing
              safe, personalized, and effective surgical solutions to enhance
              your natural beauty.
            </p>
            <button className="mt-4 bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold">
              VISIT DEPARTMENT
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 bg-blue-500 text-white p-8 gap-4">
          <div className="text-center">
            <BsPerson className="text-4xl mx-auto" />
            <h3 className="font-bold text-lg mt-2">HEAD OF DEPARTMENT</h3>
            <p>Dr. Ema Stankovic</p>
          </div>

          <div className="text-center">
            <BsHospital className="text-4xl mx-auto" />
            <h3 className="font-bold text-lg mt-2">COSMETIC SURGERY DEP.</h3>
            <p>Hall C, floor 4</p>
          </div>

          <div className="text-center">
            <BsClipboardCheck className="text-4xl mx-auto" />
            <h3 className="font-bold text-lg mt-2">FREE EVALUATION</h3>
            <p>A meeting to discuss your case</p>
          </div>

          <div className="text-center">
            <BsPhone className="text-4xl mx-auto" />
            <h3 className="font-bold text-lg mt-2">DIRECT CONTACT</h3>
            <p>9am - 5pm Helpdesk</p>
          </div>
        </div>
      </div>
      <div className="bg-white">
        {/* Top Section */}
        <div className="relative w-full flex flex-col md:flex-row items-center md:justify-center p-6">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/microbiology.webp" // Replace with actual lab image
              alt="Microbiology Lab"
              className="w-[80%] rounded-lg"
            />
          </div>
          <div className="md:w-1/2 pr-[30px]">
            <h2 className="md:text-3xl text-xl font-bold">MICROBIOLOGY LAB</h2>
            <p className="text-lg text-gray-600 mt-2">
              High-end equipment at your service
            </p>
            <p className="mt-4 text-gray-700">
              Our Microbiology Lab specializes in diagnosing infections,
              bacterial cultures, and antibiotic susceptibility testing. We
              ensure accurate, rapid, and reliable results for effective
              treatments.
            </p>
            <button className="mt-4 bg-blue-900 text-white px-6 py-3 rounded-md font-semibold">
              VISIT DEPARTMENT
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-blue-500 text-white flex flex-wrap md:flex-nowrap justify-center items-center mt-[10px]">
          <div className="flex flex-col items-center p-6 w-full md:w-1/4">
            <BsClipboardCheck className="text-4xl mb-3" />
            <h3 className="font-bold">DEPARTMENTS</h3>
            <p className="text-sm">The Backbone of our Clinic</p>
          </div>

          <div className="flex flex-col items-center p-6 w-full md:w-1/4">
            <BsJournalMedical className="text-4xl mb-3" />
            <h3 className="font-bold">MEDICAL SERVICES</h3>
            <p className="text-sm">A list of all available</p>
          </div>

          <div className="flex flex-col items-center p-6 w-full md:w-1/4">
            <BsPersonBadge className="text-4xl mb-3" />
            <h3 className="font-bold">FIND A DOCTOR</h3>
            <p className="text-sm">All our staff by department</p>
          </div>

          <div className="flex flex-col items-center p-6 w-full md:w-1/4">
            <BsCalendarCheck className="text-4xl mb-3" />
            <h3 className="font-bold">REQUEST AN APPOINTMENT</h3>
            <p className="text-sm">Call us or fill in a form</p>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col md:flex-row items-center px-6 py-12">
        {/* Left Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/giano.webp" // Replace with actual gynecology-related image
            alt="Gynecology and Birth"
            className="w-[80%] rounded-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 md:text-left pr-[40px]">
          <h2 className="md:text-3xl text-xl font-bold">GYNAECOLOGY & BIRTH</h2>
          <p className="text-lg text-gray-600 mt-2">
            Specialized alternative care
          </p>
          <p className="mt-4 text-gray-700">
            Our Gynaecology & Birth department provides specialized care for
            women's health, pregnancy, and childbirth. From prenatal checkups to
            postnatal support, our expert team ensures the best care for mothers
            and babies.
          </p>
          <button className="mt-4 bg-blue-900 text-white px-6 py-3 rounded-md font-semibold">
            VISIT DEPARTMENT
          </button>
        </div>
      </div>
      <Footer />
    </HomeLayout>
  );
}
export default Department;
