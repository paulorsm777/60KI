import "./css/style.css";
import "./css/component.css";
import Navbar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';

export default function App() {
  return (
    <>
    <Navbar/>
    {/*Content Routes*/}
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* Adicione mais rotas conforme necessário */}
        </Routes>
    </Router>
    {/**/}
    <Footer/>
    </>
  )
};