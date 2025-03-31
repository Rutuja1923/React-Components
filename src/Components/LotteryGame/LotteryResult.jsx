import { sumOfDigits } from "../../../public/js/lotteryHelper";

function LotteryResult({ number, winningSum }) {
  const isWinning = sumOfDigits(number) === winningSum;

  return (
    <div>
      <h3>Lottery Result</h3>
      {number === 0 ? (
        <p style={{ backgroundColor: "#899499" }}>
          Click &quot;Generate Number&quot; to Play!
        </p>
      ) : isWinning ? (
        <p style={{ backgroundColor: "#AFE1AF" , color: "#000"}}>
          Congratulations! You won the lottery!
        </p>
      ) : (
        <p style={{ backgroundColor: "#E97451" }}>
          Oops! Better luck next time. Try again!
        </p>
      )}
    </div>
  );
}

export default LotteryResult;
