import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import ServicePage from "./Components/Home/ServicesPages/ServicePage";
import Gallery from "./Components/Home/Gallery";
import About from "./Components/Home/About";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services/:id/:title" element={<ServicePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
