import './App.css';
import AmazonList from './Components/ProductCard/AmazonList';
import ProdDetails from './Components/ProductCard/ProdDetails';

function App(){
  return (
    <>
      <ProdDetails title="Phone" description="A sleek and powerful smartphone with an all-day battery." idx={2} image='phone.png' features={["High-resolution", "Long battery life", "Fast charging", "Powerful processor"]}/>
      <ProdDetails title="Laptop" description="A high-performance laptop for work and entertainment." idx={1} image='laptop.png' features={["High-resolution", "High-speed processor", "Full HD display"]}/>
      <ProdDetails title="Mouse" description="A smooth and responsive wireless mouse for effortless navigation." idx={3} image='mouse.png' features={["Ergonomic design", "Long battery life", "Wireless connectivity"]}/>  
      <AmazonList />
    </>
  ); 
  
}
export default App;
