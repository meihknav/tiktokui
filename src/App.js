import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0)
  const handleAdd = () => {
    setCount(pre=>pre+1)
  }
  return (
    <div style = {{padding: 20}}className="App">
      <h1>{count} </h1>
      <button onClick={handleAdd}>+</button>
      <h1>HAHAHAHAHAHH</h1>
    </div>
  );
}

export default App;
