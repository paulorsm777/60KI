import { useState } from "react";
import logo from "../../assets/chair.png";
import "./deskSelect.css";
import { Link } from "react-router-dom";

interface AmbientSelectProps {}

export default function AmbientSelect(props: AmbientSelectProps) {
    const [selectedButton, setSelectedButton] = useState<string | null>(null);
  
    const handleButtonClick = (buttonName: string) => {
      // If the clicked button is already selected, deselect it
      setSelectedButton((prevSelected) =>
        prevSelected === buttonName ? null : buttonName
      );
    };
  
    // Check if at least one button is selected
    const isAtLeastOneButtonSelected = selectedButton !== null;

  return (
    <>
      <div className="ambientSelect">
        <img
          src={logo}
          style={{ height: "5rem" }}
          className="logo"
          alt="Chair Logo"
        />
        <h1>Selecione o ambiente:</h1>
        <div className="ambientList">
          <div className="row">
            <button
              className={selectedButton === "Entrada" ? "selected" : ""}
              onClick={() => handleButtonClick("Entrada")}
            >
              Entrada
            </button>
            <button
              className={selectedButton === "Salao1" ? "selected" : ""}
              onClick={() => handleButtonClick("Salao1")}
            >
              Salao 1
            </button>
          </div>
          <div className="row">
            <button
              className={selectedButton === "Salao2" ? "selected" : ""}
              onClick={() => handleButtonClick("Salao2")}
            >
              Salao 2
            </button>
            <button
              className={selectedButton === "Varanda" ? "selected" : ""}
              onClick={() => handleButtonClick("Varanda")}
            >
              Varanda
            </button>
          </div>
          <div className="row">
            <button
              className={selectedButton === "Jardim" ? "selected" : ""}
              onClick={() => handleButtonClick("Jardim")}
            >
              Jardim
            </button>
            <button
              className={selectedButton === "Piscina" ? "selected" : ""}
              onClick={() => handleButtonClick("Piscina")}
            >
              Piscina
            </button>
          </div>
          <div className="row"> 
            {isAtLeastOneButtonSelected && (
              <Link to="/deskSelect1">
                <button className="send">Selecionar</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
