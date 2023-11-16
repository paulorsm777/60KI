import "./css/style.css";
import "./css/component.css";
import Navbar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/*Content Routes*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Register />} />
        </Routes>
        {/**/}
        <Footer />
      </Router>
    </>
  );
}
