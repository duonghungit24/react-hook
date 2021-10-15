import { useState } from 'react';

function App() {
  const cost = [1000 , 2000, 3000, 4000];
  const total = cost.reduce((number, value) => number + value);  //tinh total de lm initialValue cho useSate
  const [price , setPrice] = useState(total) //khoi tao total
  const handlePrice = () => {
    setPrice(price + 1000)
  }
  console.log(total); //sẽ bị re render nhiều , cách khắc phục dùng call back cho useSate
  return (
    <div className="App">
      <h1>{price}</h1>
      <button onClick={handlePrice}>click</button>
    </div>
  );
}

export default App;
