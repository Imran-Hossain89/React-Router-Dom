import Navbar from "./Components/Layout/Navbar";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Common from "./Components/Pages/Common";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Common />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
