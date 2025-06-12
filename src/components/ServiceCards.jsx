// const ServiceCards = () => {
//     const services = [
//       { title: "DEPARTMENTS", subtitle: "The Backbone of our Clinic", icon: "🌳" },
//       { title: "MEDICAL SERVICES", subtitle: "A list of all available", icon: "📖" },
//       { title: "FIND A DOCTOR", subtitle: "All our staff by department", icon: "🆔" },
//       { title: "REQUEST AN APPOINTMENT", subtitle: "Call us or fill in a form", icon: "🏥" }
//     ];
  
//     return (
//       <div className="flex justify-center items-center bg-gray-100 py-10">
//         <div className="flex flex-wrap justify-center md:flex-nowrap gap-2">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="relative w-64 md:w-72 h-60 bg-blue-500 text-white p-6 text-center shadow-lg transform transition-all duration-300 hover:-translate-y-2"
//               style={{ transform: `skewY(${index % 2 === 0 ? "-3deg" : "3deg"})` }}
//             >
//               <div className="text-5xl mb-4">{service.icon}</div>
//               <h3 className="font-bold text-lg">{service.title}</h3>
//               <p className="text-sm mt-1">{service.subtitle}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default ServiceCards;
  