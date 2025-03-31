import { useState } from "react";
import NumberCard from "./NumberCard";
import LotteryResult from "./LotteryResult";
import { genTicket } from "../../../public/js/lotteryHelper";

function LotteryCard({ n, winningSum }) {
  let [number, setNumber] = useState(genTicket(n));
  return (
    <div>
      <h1>Lottery Game</h1>
      <NumberCard number={number} setNumber={setNumber} n={n} />
      <LotteryResult number={number} winningSum={winningSum} />
    </div>
  );
}

export default LotteryCard;
