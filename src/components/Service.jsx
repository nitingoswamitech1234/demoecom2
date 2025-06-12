// import Footer from "../layout/Footer";
// import HomeLayout from "../layout/HomeLayout";

// const Service = () => {
//   const departments = [
//     "NEUROLOGY",
//     "PEDIATRICS",
//     "DIAGNOSTIC IMAGING",
//     "CARDIOLOGY",
//     "COSMETIC SURGERY",
//     "MICROBIOLOGY LAB",
//     "GYNAECOLOGY & BIRTH",
//   ];

//   const services = [
//     {
//       title: "FREE CHECKUP",
//       description: "The basis of Wellness",
//       icon: "📋", // Replace with actual image/icon
//     },
//     {
//       title: "DNA TESTING",
//       description: "Accurate Results",
//       icon: "🧬", // Replace with actual image/icon
//     },
//     {
//       title: "CARDIO EXAM",
//       description: "With High-End Equipment",
//       icon: "❤️", // Replace with actual image/icon
//     },
//     {
//       title: "DNA TESTING",
//       description: "Accurate Results",
//       icon: "🧬", // Replace with actual image/icon
//     },
//   ];
//   return (
//     <HomeLayout>
//       <div className="relative w-full h-[400px] md:h-[500px] flex items-end bg-cover bg-center bg-[url('/healthservice.webp')]">
//         <div className="absolute inset-0 bg-black opacity-40"></div>
//         {/* Angled Overlay */}
//         <div className="absolute bottom-0 left-0 w-full h-32 bg-gray-200 transform skew-y-[-3deg] origin-bottom"></div>

//         {/* Content */}
//         <div className="relative z-10 w-full bg-gray-200 py-10 px-6 md:px-12">
//           <h2 className="text-gray-900 text-3xl md:text-4xl font-bold">
//             ALL MEDICAL SERVICES
//           </h2>
//           <p className="text-gray-600 text-lg">Featured by Department</p>
//         </div>
//       </div>
//       <div className="w-full mx-auto border bg-gray-100 py-[60px] p-[50px]">
//         {departments.map((dept, index) => (
//           <div key={index} className="border-b bg-white">
//             <div className="w-full border text-left px-6 py-4 font-semibold text-gray-800">
//               {dept}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="max-w-6xl mx-auto text-center py-10">
//         <h2 className="text-2xl font-bold text-gray-900">FEATURED SERVICES</h2>
//         <p className="text-gray-500">These are our special exams</p>

//         <div className="flex flex-wrap justify-center gap-6 mt-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="border border-blue-300 p-6 rounded-lg shadow-md text-center w-full max-w-[270px]"
//             >
//               <div className="text-5xl text-blue-500">{service.icon}</div>
//               <h3 className="font-bold mt-4">{service.title}</h3>
//               <p className="text-gray-500">{service.description}</p>
//               <div className="mt-4 w-12 h-1 bg-blue-500 mx-auto"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div
//         className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center text-center bg-cover bg-center"
//         style={{ backgroundImage: "url('/microbiology.webp')" }}
//       >
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

//         {/* Content */}
//         <div className="relative z-10 max-w-3xl px-6">
//           <h1 className="text-white text-3xl md:text-5xl font-bold">
//             NEED A PERSONAL HEALTH PLAN?
//           </h1>
//           <p className="text-gray-200 mt-4 text-lg md:text-xl">
//             Call Now (600) 123-4567 and receive Top Quality Healthcare for you
//             and your Family
//           </p>

//           {/* CTA Button */}
//           <div className="mt-6 flex justify-center">
//             <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded flex items-center gap-2">
//               ✅ REQUEST A PLAN
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </HomeLayout>
//   );
// };

// export default Service;
