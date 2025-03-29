import './App.css';
import MsgBox from './Components/MsgBox';
import Intro from './Components/Intro';
import OldApp from './Components/OldApp';
import Compare from './Components/Compare';
import { PrintInfo } from './Components/PrintInfo';
import { MathDemo } from './Components/MathDemo';

function App(){
  return (
    <>
      <MsgBox userName="Reena" textColor="midnightblue"/>
      <Intro />
      <OldApp />
      <Compare />
      <PrintInfo />
      <MathDemo />
    </>
  ); 
  
}
export default App;
