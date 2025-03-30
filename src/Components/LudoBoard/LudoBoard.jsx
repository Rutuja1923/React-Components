import Cube from './Cube'

function LudoBoard() {
  return (
    <div className='borad' style={{backgroundColor: "#4b4b4b", padding: "15px", margin: "10px auto" ,borderRadius: "20px"}}>
        <h2>(A) Game Begins</h2>
        <Cube color='blue'/>
        <Cube color='green'/>
        <Cube color='red'/>
        <Cube color='yellow'/>
    </div>
  )
}

export default LudoBoard