import OperationButton from "./OperationButton";
import NumberButton from "./NumberButton";

function ButtonContainer({
  onNumberClick,
  onOperationClick,
  onClear,
  onCalculate,
  onDelete
}) {
  const numbers = [
    "7",
    "8",
    "9",
    "(",
    "4",
    "5",
    "6",
    ")",
    "1",
    "2",
    "3", 
    "0",
    "00",   
    ".",
  ];
  const operations = ["+", "-", "*", "/", "%", "^"];
  return (
    <div className="buttons">
      <button onClick={onClear}>
        <i className="fa fa-refresh"></i>
      </button>
      {numbers.map((num) => (
        <NumberButton key={num} number={num} onClick={onNumberClick} />
      ))}
      {operations.map((op) => (
        <OperationButton key={op} symbol={op} onClick={onOperationClick} />
      ))}
      <button className="equals" onClick={onCalculate}>=</button>
      <button className="delete" onClick={onDelete}><i className="fa fa-chevron-circle-left"></i></button>
    </div>
  );
}

export default ButtonContainer;
