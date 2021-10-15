import { useState } from 'react';

const gifts = [
  'CPU I9',
  'CART RTX 3060 TI',
  'RAM 32G RGB'
]
function App() {
  const [name, setName] = useState('');
 const handleChange = () => {
      setName('duong van hung');
 }
 console.log(name)
  return (
    <div className="App">
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleChange}>Change</button>
    </div>
  );
}

export default App;
