import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./components/ProductDetails";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
