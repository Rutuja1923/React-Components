import './App.css';
import ProdDetails from './Components/ProductCard/ProdDetails';

function App(){
  return <>
    <ProdDetails title="Phone" description="A sleek and powerful smartphone with an all-day battery." idx={2} image='phone.png'/>
    <ProdDetails title="Laptop" description="A high-performance laptop for work and entertainment." idx={1} image='laptop.png'/>
    <ProdDetails title="Mouse" description="A smooth and responsive wireless mouse for effortless navigation." idx={3} image='mouse.png'/>
  </>;
}
export default App;
