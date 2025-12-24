import { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    current: "0",
  };

  handleButtonClick(btn) {
    switch (btn) {
      case "+":
      case "-":
      case "x":
      case "/":
        this.setState({
          current: "",
          last: this.state.current,
          operator: btn,
        });
        break;
      case "=": {
        let answer = 0;
        switch (this.state.operator) {
          case "+":
            answer = Number(this.state.last) + Number(this.state.current);
            break;
          case "-":
            answer = Number(this.state.last) - Number(this.state.current);
            break;
          case "x":
            answer = Number(this.state.last) * Number(this.state.current);
            break;
          case "/":
            answer = Number(this.state.last) / Number(this.state.current);
            break;
        }
        this.setState({
          last: 0,
          current: answer.toString(),
          operator: btn,
        });
        break;
      }
      case "C":
        this.setState({
          current: "0",
        });
        break;

      case ".":
        if (this.state.current.includes(".")) {
          break;
        }
      /* falls through */
      default:
        if (this.state.operator === "=") {
          this.setState({
            current: "" + btn,
            operator: null,
          });
        } else {
          this.setState({
            current:
              this.state.current === "0" ? "" + btn : this.state.current + btn,
          });
        }
    }
  }

  render() {
    const buttons = [
      7,
      8,
      9,
      "+",
      4,
      5,
      6,
      "-",
      1,
      2,
      3,
      "x",
      0,
      "/",
      ".",
      "C",
      "=",
    ].map((b) => (
      <button onClick={this.handleButtonClick.bind(this, b)}>{b}</button>
    ));

    return (
      <div className="calculator">
        <input value={this.state.current} readOnly />
        {buttons}
      </div>
    );
  }
}
