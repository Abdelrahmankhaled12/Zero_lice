import { BrowserRouter, Routes, Route } from "react-router-dom"; // React Router for routing
import { AboutUs, ContactUs, Faqs, Home, NotFountPage, Pricing } from "./pages"; // Importing page components

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/pricing" element={<Pricing />} />

          <Route path="/*" element={<NotFountPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;