import React, { useState } from "react";
import "./deskSelect.css";
import { useTableData } from "../../Hooks/useTableData";
import Table from "../../components/tables/table";
import { Link } from "react-router-dom";

function DeskSelect() {
  const { data } = useTableData();
  const maxItemsPerRow = 4;
  let buttonDisabled = true;
  
  

  const handleButtonClick = () => {
    if (!buttonDisabled) {
      console.log("Mesa reservada!");
    }
  };
  const generateRows = () => {
    if (!data) {
      return null;
    }
    const rows = [];
    for (let i = 0; i < data.length; i += maxItemsPerRow) {
      const rowItems = data.slice(i, i + maxItemsPerRow).map((tableData, index) => (
        <Table
          key={tableData.id}
          seats={tableData.seats}
          location={tableData.location}
          busy={tableData.busy.toString()}
          count={i + index + 1}
        />
      ));

      rows.push(
        <div className="deskRow" key={`row-${i / maxItemsPerRow}`}>
          {rowItems}
        </div>
      );
    }

  
    
    return rows;
  };

  return (
    <div className="deskSelect">
      <h1>Selecione a mesa</h1>
      <div className="deskGrid">{generateRows()}</div>
      <Link to={buttonDisabled ? "/" : "/success"}>
        <button
          className={`selectDeskButton ${buttonDisabled ? "disabled" : ""}`}
          onClick={handleButtonClick}
          disabled={buttonDisabled}
        >
          Reservar
        </button>
      </Link>
    </div>
  );
}

export default DeskSelect;
