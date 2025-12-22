import { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    current: 0,
  };

  
  handleButtonClick(btn) {
    this.setState({
      current:this.state.current + btn
    });
  }

  render() {
    const buttons = [
    7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, 'x', 0, '/', '.', 'C', '='
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
