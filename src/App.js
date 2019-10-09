import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      decimalCount: 0
    };
    this.handleClear = this.handleClear.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.addNumber = this.addNumber.bind(this);
    this.addDec = this.addDec.bind(this);
    this.handleOp = this.handleOp.bind(this);
  }
  handleClear() {
    this.setState({
      display: "0",
      decimalCount: 0
    });
  }
  handleOp(e) {
    let display = this.state.display;
    if (display == 0) {
      return;
    }
    switch (display[display.length - 1]) {
      case "-":
      case "+":
      case "*":
      case "/":
        return;
        break;
      default: {
        this.addNumber(e);
      }
    }
  }
  addDec(e) {
    if (this.state.decimalCount == 0) {
      this.addNumber(e);
    }
    this.setState({
      decimalCount: this.state.decimalCount + 1
    });
  }

  addNumber(e) {
    let value = e.target.value;
    let display = this.state.display;
    if (display == 0 && value == ".") {
      this.setState({
        display: display + value
      });
    } else if (display == "0.") {
      this.setState({
        display: display + value
      });
    } else if (display == 0) {
      this.setState({
        display: value
      });
    } else if (value == "." && this.state.decimalCount > 0) {
      return;
    } else if (value == "+" || value == "-" || value == "*" || value == "/") {
      this.setState({
        display: display + value,
        decimalCount: 0
      });
    } else {
      this.setState({
        display: display + value
      });
    }
  }
  handleEquals() {
    var compute = eval(this.state.display);
    if (compute < 1000000000) {
      this.setState({
        display: parseFloat(compute.toFixed(5))
      });
    } else {
      this.setState({
        display: compute.toExponential(5)
      });
    }
  }

  render() {
    const numbers = [];
    return (
      <div id="container">
        <div id="calc-container">
          <div id="calc-buttons">
            <div id="display">{this.state.display}</div>
            <button class="number" id="clear" onClick={this.handleClear}>
              AC
            </button>
            <button class="number" id="decimal" value="." onClick={this.addDec}>
              .
            </button>
            <button class="number" id="zero" value="0" onClick={this.addNumber}>
              0
            </button>
            <button
              class="operand"
              id="multiply"
              value="*"
              onClick={this.handleOp}
            >
              X
            </button>
            <button class="number" id="one" value="1" onClick={this.addNumber}>
              1
            </button>
            <button class="number" id="two" value="2" onClick={this.addNumber}>
              2
            </button>
            <button
              class="number"
              id="three"
              value="3"
              onClick={this.addNumber}
            >
              3
            </button>
            <button
              class="operand"
              id="subtract"
              value="-"
              onClick={this.handleOp}
            >
              -
            </button>
            <button class="number" id="four" value="4" onClick={this.addNumber}>
              4
            </button>
            <button class="number" id="five" value="5" onClick={this.addNumber}>
              5
            </button>
            <button class="number" id="six" value="6" onClick={this.addNumber}>
              6
            </button>
            <button class="operand" id="add" value="+" onClick={this.handleOp}>
              +
            </button>
            <button
              class="number"
              id="seven"
              value="7"
              onClick={this.addNumber}
            >
              7
            </button>
            <button
              class="number"
              id="eight"
              value="8"
              onClick={this.addNumber}
            >
              8
            </button>
            <button class="number" id="nine" value="9" onClick={this.addNumber}>
              9
            </button>
            <button
              class="operand"
              id="divide"
              value="/"
              onClick={this.handleOp}
            >
              /
            </button>
            <button
              class="operand"
              id="equals"
              value="="
              onClick={this.handleEquals}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;