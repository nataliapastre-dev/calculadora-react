

import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Erro");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "C", "+",
    "=",
  ];

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display" aria-label="Tela da calculadora">
          {input || "0"}
        </div>

        <div className="buttons">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className={
                btn === "="
                  ? "btn-equal"
                  : btn === "C"
                  ? "btn-ca"
                  : ["/", "*", "-", "+"].includes(btn)
                  ? "btn-op"
                  : "btn-num"
              }
              aria-label={`Botão ${btn}`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      <div className="footer">
        <p>Calculadora React • por Natália Baptista 💜</p>
      </div>
    </div>
  );
}

export default App;

