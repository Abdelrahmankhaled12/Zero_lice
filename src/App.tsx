import { BrowserRouter, Routes, Route } from "react-router-dom"; // React Router for routing
import { AboutUs, ContactUs, Faqs, Home, NotFountPage, OurProcess, Pricing, Privacy, Terms } from "./pages"; // Importing page components
import { useEffect } from "react";
import "aos/dist/aos.css"; // AOS styles for animations
import Aos from "aos"; // AOS library for scroll animations
import "sweetalert2/src/sweetalert2.scss"; // SweetAlert2 styles for notifications

function App() {

  useEffect(() => {
    Aos.init({
      once: true, // Ensures animations only happen once
    });
  }, []);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-lice" element={<Faqs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/*" element={<NotFountPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;