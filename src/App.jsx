import './App.css';
import LotteryCard from './Components/LotteryGame/LotteryCard';

function App(){
  return (
    <>
      <LotteryCard n={3} winningSum={15}/>
    </>
  ); 
  
}
export default App;
