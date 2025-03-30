import {useState} from 'react'

function Cube({color, }) {

  let styles = {
    backgroundColor : color,
    fontWeight : "bold",
    color: "black"
  }

  let [count, setCount] = useState(0);

  function handleOnclick() {
    setCount(prev => prev+1);
  }

  return (
    <div>
        <p>{color.toUpperCase()} Moves : {count} </p>
        <button style={styles} onClick={handleOnclick}>+1</button>
    </div>
  )
}

export default Cube