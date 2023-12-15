import "./css/style.css";
import "./css/component.css";
import Navbar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import DeskSelect from "./pages/DeskSelect/ambientSelect";
import DeskSelect1 from "./pages/DeskSelect/deskSelect";
import Dashboard from "./pages/Dashboard/dashboard";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/deskSelect" element={<DeskSelect/>} />
          <Route path="/deskSelect1" element={<DeskSelect1/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        {/**/}
        <Footer />
      </Router>
    </div>
  );
}
