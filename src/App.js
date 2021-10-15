import { useState } from 'react';

const gifts = [
  'CPU I9',
  'CART RTX 3060 TI',
  'RAM 32G RGB'
]
function App() {
 const [gift, setGift] = useState();
 const handleGift  = () => {
      const index = Math.floor(Math.random() * gifts.length);
      setGift(gifts[index]);
 }
  return (
    <div className="App">
      <h1>{gift || 'chưa có phần thưởng'}</h1>
      <button onClick={handleGift}>lấy thưởng</button>
    </div>
  );
}

export default App;
