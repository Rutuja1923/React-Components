import { useState } from "react";

function LudoBorad2() {
  let [moves, setMoves] = useState({ red: 0, green: 0, blue: 0, yellow: 0 });
  let [movesArr, setMovesArr] = useState(["no moves"]);

  function handleUpdateBlue() {
    // moves.blue += 1;
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });
    // console.log(`blue moves : ${moves.blue}`)
    movesArr.push("Blue moves");
    setMovesArr([ ...movesArr ]);
    console.log(movesArr);
  }

  function handleUpdateYellow() {
    // moves.yellow += 1;
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
    // console.log(`yellow moves : ${moves.yellow}`)
    movesArr.push("Yellow moves");
    setMovesArr([ ...movesArr ]);
    console.log(movesArr);
  }

  function handleUpdateRed() {
    // moves.red += 1;
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
    // console.log(`red moves : ${moves.red}`)
    movesArr.push("Red moves");
    setMovesArr([ ...movesArr ]);
    console.log(movesArr);
  }

  function handleUpdateGreen() {
    // moves.green += 1;
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
    // console.log(`green moves : ${moves.green}`)
    // movesArr.push("Green moves");
    setMovesArr( prevMovesArr => {
        return [ ...prevMovesArr, "Green Moves"]
    });
    console.log(movesArr);
  }

  return (
    <div
      className="borad"
      style={{
        backgroundColor: "#4b4b4b",
        padding: "15px",
        margin: "10px auto",
        borderRadius: "20px",
      }}
    >
      <h2>(B) Game Begins</h2>
      <p>Blue Moves : {moves.blue}</p>
      <button style={{ backgroundColor: "blue" }} onClick={handleUpdateBlue}>
        +1
      </button>
      <p>Red Moves : {moves.red}</p>
      <button style={{ backgroundColor: "red" }} onClick={handleUpdateRed}>
        +1
      </button>
      <p>Green Moves : {moves.green}</p>
      <button style={{ backgroundColor: "green" }} onClick={handleUpdateGreen}>
        +1
      </button>
      <p>Yellow Moves : {moves.yellow}</p>
      <button
        style={{ backgroundColor: "yellow", color: "black" }}
        onClick={handleUpdateYellow}
      >
        +1
      </button>
    </div>
  );
}

export default LudoBorad2;
