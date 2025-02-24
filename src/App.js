import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import ServicePage from "./Components/Home/ServicesPages/ServicePage";
import Gallery from "./Components/Home/Gallery";
import About from "./Components/Home/About";
import NewHome from "./Components/Home/NewHome/NewHome";
import Scope from "./Components/Home/Scope/Scope";
import ContactPage from "./Components/ContactUs/ContactPage";
import Certification from "./Components/Certification";
import WhoWeAre from "./Components/WhoWeAre";
import KnowledgeBank from "./Components/KnowledgeBank";
import GetQuote from "./Components/Quote";
import MegaMenu from "./Components/Header/MegaMenu";
import ServicePageModel from "./Components/Home/ServicesPages/ServicesPageModel";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<NewHome />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="/knowledge-bank" element={<KnowledgeBank />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/scope" element={<Scope />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/services/:id/:title" element={<ServicePage />} />
          <Route path="/services/:url" element={<ServicePageModel />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
