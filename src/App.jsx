import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";
import Display from "./components/Display/Display";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  function addToDisplay(val) {
    if (val === "." && value.toString().includes(".")) return;
    if (val === "+" && value.toString()[value.toString().length - 1] === "+")
      return;
    if (val === "-" && value.toString()[value.toString().length - 1] === "-")
      return;
    if (val === "*" && value.toString()[value.toString().length - 1] === "*")
      return;
    if (val === "/" && value.toString()[value.toString().length - 1] === "/")
      return;
    setValue((el) => {
      if (el === "Dividedby0") return val;
      return el + val;
    });
  }
  function calculate() {
    setValue((el) => {
      let auxEl = el;
      if (auxEl.toString()[auxEl.toString().length - 1] === "+") {
        auxEl = auxEl.slice(0, -1);
      }
      if (auxEl.toString()[auxEl.toString().length - 1] === "-") {
        auxEl = auxEl.slice(0, -1);
      }
      if (auxEl.toString()[auxEl.toString().length - 1] === "*") {
        auxEl = auxEl.slice(0, -1);
      }
      if (auxEl.toString()[auxEl.toString().length - 1] === "/") {
        auxEl = auxEl.slice(0, -1);
      }
      console.log(auxEl);
      try {
        const newValue = eval(auxEl);
        return newValue;
      } catch (error) {
        return "Dividedby0";
      }
    });
  }
  function clearDisplay() {
    setValue("");
  }
  return (
    <div id="calculator">
      <Display value={value} />

      <div id="keys">
        <Button Click={addToDisplay} isAction>
          +
        </Button>
        <Button Click={addToDisplay}>7</Button>
        <Button Click={addToDisplay}>8</Button>
        <Button Click={addToDisplay}>9</Button>
        <Button Click={addToDisplay} isAction>
          -
        </Button>
        <Button Click={addToDisplay}>4</Button>
        <Button Click={addToDisplay}>5</Button>
        <Button Click={addToDisplay}>6</Button>
        <Button Click={addToDisplay} isAction>
          *
        </Button>
        <Button Click={addToDisplay}>1</Button>
        <Button Click={addToDisplay}>2</Button>
        <Button Click={addToDisplay}>3</Button>
        <Button Click={addToDisplay} isAction>
          /
        </Button>
        <Button Click={addToDisplay}>0</Button>
        <Button Click={addToDisplay}>.</Button>
        <Button Click={calculate} isAction>
          =
        </Button>
        <Button Click={clearDisplay} isAction>
          C
        </Button>
      </div>
    </div>
  );
}

export default App;
