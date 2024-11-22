import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactUs";
import ConsultantsAndPartners from "./components/Consultants";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Footer />
      <ContactSection />
      <Footer />
      <ConsultantsAndPartners />
    </>
  );
}

export default App;
