import { useState } from "react";
import './Calculator.css';
import DisplayScreen from "./DisplayScreen";
import ButtonContainer from "./ButtonContainer";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleNumberClick = (value) => setInput((prev) => prev + value);
  const handleOperationClick = (value) => setInput((prev) => prev + value);
  const handleClear = () => {
    setInput("");
    setResult("");
  };
  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleSafeCalculation = (input) => {
    try {
      if (!input) return 'Error';
      
      let expression = input.replace(/\^/g, '**');
 
      if (expression.includes('/0')) {
        return 'Error: Division by Zero';
      }

      let calcResult = new Function(`return (${expression})`)();

      return isNaN(calcResult) ? 'Error' : calcResult;
    } 
    catch (err) {
      return `Error : ${err.message}`;
    }
  };
  
  const handleCalculate = () => {
    setResult(handleSafeCalculation(input));
  };

  return (
    <div className="main-container">
      <DisplayScreen input={input} result={result} />
      <ButtonContainer
        onNumberClick={handleNumberClick}
        onOperationClick={handleOperationClick}
        onClear={handleClear}
        onCalculate={handleCalculate}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Calculator;
