import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("0");
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    if (value === "AC") {
      setInput("0");
    } else if (value === "DE") {
      setInput(input.slice(0, -1) || "0");
    } else if (value === "=") {
      try {
        const result = eval(input.replace("x", "*"));
        setHistory([...history, `${input} = ${result}`]);
        setInput(String(result));
      } catch {
        alert("Expresión inválida");
      }
    } else {
      setInput(input === "0" ? value : input + value);
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="container">
      <div className="calculator">
        <input type="text" value={input} readOnly className="input-display" />
        <div className="button-row">
          <button onClick={() => handleButtonClick("AC")} className="button ac">AC</button>
          <button onClick={() => handleButtonClick("DE")} className="button">DE</button>
          <button onClick={() => handleButtonClick(".")} className="button">.</button>
          <button onClick={() => handleButtonClick("/")} className="button">/</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleButtonClick("7")} className="button">7</button>
          <button onClick={() => handleButtonClick("8")} className="button">8</button>
          <button onClick={() => handleButtonClick("9")} className="button">9</button>
          <button onClick={() => handleButtonClick("x")} className="button">x</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleButtonClick("4")} className="button">4</button>
          <button onClick={() => handleButtonClick("5")} className="button">5</button>
          <button onClick={() => handleButtonClick("6")} className="button">6</button>
          <button onClick={() => handleButtonClick("-")} className="button">-</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleButtonClick("1")} className="button">1</button>
          <button onClick={() => handleButtonClick("2")} className="button">2</button>
          <button onClick={() => handleButtonClick("3")} className="button">3</button>
          <button onClick={() => handleButtonClick("+")} className="button">+</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleButtonClick("00")} className="button">00</button>
          <button onClick={() => handleButtonClick("0")} className="button">0</button>
          <button onClick={() => handleButtonClick("=")} className="button equal">=</button>
        </div>
      </div>

      <div className="history">
        <h2>Historial</h2>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={clearHistory} className="button clear-history">Borrar Historial</button>
      </div>
    </div>
  );
}

export default App;
