import React, { Component } from "react";
import logo from "../../assets/chair.png";
import "./table.css";

interface TableProps {
  seats: string;
  location: string;
  busy: string;
  count: number;
}

interface TableState {
  selected: boolean;
}

class Table extends Component<TableProps, TableState> {
  static index: number = 0;

  constructor(props: TableProps) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  handleTableClick = () => {
    const { busy } = this.props;

    if (busy !== "Yes") {
      this.setState((prevState) => ({
        selected: !prevState.selected,
      }));

      if (!this.state.selected) {
        Table.index++;
      } else {
        Table.index--;
      }

      console.log(Table.index);
    }
  };

  render() {
    const { seats, busy, count } = this.props;
    const { selected } = this.state;

    return (
      <div
        className={`table ${busy === "Yes" ? "disabled" : ""} `}
        onClick={this.handleTableClick}
      >
        <div className="allContent">
          <div className="seatsImg">
            <img src={logo} style={{ height: "2rem" }} alt="Chair Icon" />
            <div className="seatsCount">{seats}</div>
          </div>
          <div className={`deskBody ${selected ? "selected" : ""}`}>
            <p>{count}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
