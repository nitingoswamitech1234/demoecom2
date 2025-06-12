// import { Link } from "react-router-dom";

// const MedicalDepartments = () => {
//     const departments = [
//       { 
//         name: "SURGERY", 
//         doctor: "Dr. Avis Stankovic", 
//         image: "/surgery.webp" 
//       },
//       { 
//         name: "MICROBIOLOGY", 
//         doctor: "Dr. John Manios", 
//         image: "microbiology.webp" 
//       },
//       { 
//         name: "PATHOLOGY", 
//         doctor: "Dr. Marie Curie", 
//         image: "/pathology.webp" 
//       }
//     ];
  
//     return (
//       <section className="bg-[#2c4167] text-white py-12 px-6 md:px-16">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
//           {/* Left Side - Department Cards */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold">MEDICAL DEPARTMENTS</h2>
//             <p className="text-gray-300 mt-2">The Backbone of our Clinic</p>
  
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
//               {departments.map((dept, index) => (
//                 <div key={index} className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
//                   <img src={dept.image} alt={dept.name} className="w-full h-40 object-cover" />
//                   <div className="p-4 text-center">
//                     <h3 className="font-bold">{dept.name}</h3>
//                     <p className="text-gray-500">{dept.doctor}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
  
//           {/* Right Side - Modern Equipment Section */}
//           <div className="flex flex-col justify-center">
//             <h3 className="text-xl font-bold">MODERN EQUIPMENT</h3>
//             <div className="border-t border-gray-400 my-4"></div>
//             <p className="text-gray-300 leading-relaxed">
//               Personalized patient care is what sets Medicus Medical Center apart. When you visit one of our San Francisco campus locations, you can expect to receive world-class care. 
//             </p>
  
//             {/* CTA Button */}
//             <div className="mt-6">
//               <Link to='/departments' className="flex items-center  md:w-[60%] w-full bg-blue-500 text-white font-bold py-3 md:px-6 px-2 rounded-lg hover:bg-blue-600 transition">
//                 <span className="mr-2">🏥</span> CHECKOUT ALL DEPARTMENTS
//               </Link>
//             </div>
//           </div>
  
//         </div>
//       </section>
//     );
//   };
  
//   export default MedicalDepartments;
  