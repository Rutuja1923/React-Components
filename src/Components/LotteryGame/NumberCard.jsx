import { genTicket } from "../../../public/js/lotteryHelper";

function NumberCard({ number, setNumber, n }) {
  const handleGenerateNumber = () => {
    setNumber( () => genTicket(n));
  };

  return (
    <div>
      <p>Generated Number: {number}</p>
      <button onClick={handleGenerateNumber}>Generate Ticket Number</button>
    </div>
  );
}

export default NumberCard;
