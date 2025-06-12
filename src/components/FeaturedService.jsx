// import { Link } from "react-router-dom";

// const FeaturedServices = () => {
//     const services = [
//       { 
//         name: "FREE CHECKUP", 
//         description: "The basis of Wellness", 
//         icon: "📋" // Replace with an actual icon/image if needed
//       },
//       { 
//         name: "CARDIO EXAM", 
//         description: "With High-End Equipment", 
//         icon: "💙" 
//       },
//       { 
//         name: "DNA TESTING", 
//         description: "Accurate Results", 
//         icon: "🧬" 
//       }
//     ];
  
//     const workingHours = [
//       { day: "MONDAY", hours: "09:00-20:00" },
//       { day: "TUESDAY", hours: "09:00-21:00" },
//       { day: "WEDNESDAY", hours: "09:00-20:00" },
//       { day: "THURSDAY", hours: "24-HOUR SHIFT" },
//       { day: "FRIDAY", hours: "09:00-21:00" },
//       { day: "SATURDAY", hours: "09:00-18:00" },
//       { day: "SUNDAY", hours: "11:00-19:00" }
//     ];
  
//     return (
//       <section className="bg-gray-100 text-gray-900 py-12 px-6 md:px-16">
//         <div className="max-w-7xl mx-auto">
          
//           {/* Heading */}
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
//             FEATURED SERVICES
//           </h2>
//           <p className="text-gray-600 text-center mt-2">
//             We cover a big variety of medical services
//           </p>
  
//           {/* Service Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
//             {services.map((service, index) => (
//               <div 
//                 key={index} 
//                 className="border border-blue-400 rounded-lg p-6 text-center shadow-md bg-white"
//               >
//                 <div className="text-5xl mb-4">{service.icon}</div>
//                 <h3 className="font-bold text-lg">{service.name}</h3>
//                 <p className="text-gray-500">{service.description}</p>
//                 <div className="mt-3 w-10 mx-auto border-b-4 border-blue-500"></div>
//               </div>
//             ))}
//           </div>
  
//           {/* Bottom Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            
//             {/* Left - Description & Button */}
//             <div>
//               <p className="text-gray-700 leading-relaxed">
//                 Personalized patient care is what sets Medicus Medical Center apart. When you visit one of our San Francisco campus locations, you can expect to receive world-class care. 
//               </p>
  
//               {/* CTA Button */}
//               <div className="mt-6">
//                 <Link to='/service' className="flex items-center  md:w-[60%] w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition">
//                   <span className="mr-2">🧪</span> CHECKOUT ALL MEDICAL SERVICES
//                 </Link>
//               </div>
//             </div>
  
//             {/* Right - Working Hours & Insurance */}
//             <div>
//               {/* Working Hours */}
//               <h3 className="font-bold text-lg">WORKING HOURS</h3>
//               <div className="border-t border-gray-400 my-4"></div>
//               <ul className="text-gray-700">
//                 {workingHours.map((item, index) => (
//                   <li key={index} className="flex justify-between py-1">
//                     <span>{item.day}</span>
//                     <span>{item.hours}</span>
//                   </li>
//                 ))}
//               </ul>
  
//               {/* Fees & Insurance */}
//               <h3 className="font-bold text-lg mt-8">FEES & INSURANCE</h3>
//               <div className="border-t border-gray-400 my-4"></div>
//               <p className="text-gray-700">
//                 For the convenience of our clients, the <strong>Medicus Health Center</strong> and Hospital provides direct insurance billing with all major international insurance providers.
//               </p>
//             </div>
  
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default FeaturedServices;
  