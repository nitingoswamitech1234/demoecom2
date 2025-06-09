import { Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact/Contact";
import Service from "./components/Service";
import Aboutus from "./components/Aboutus";
import Department from "./components/Departments";
import Preloader from "./components/Preloader";

  function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Preloader show={loading} />
      {/* {!loading && <Home />} */}
      {/* Home Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Contact routes */}
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>

       <Routes>
        <Route path="/service" element={<Service/>}/>
        <Route path="/about-us" element={<Aboutus/>}/>
        <Route path="/departments" element={<Department/>}/>
       </Routes>
    </div>
  );
}

export default App;
