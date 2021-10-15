import { useState } from 'react';

function App() {
  const cost = [1000 , 2000, 3000, 4000];
  const [price , setPrice] = useState(() => {
   const total = cost.reduce((number, value) => number + value); //sử dụng trong call back của useSate sẽ không bị re render nhiều lần  , vì chỉ lấy biến khởi tao
    return total;
  }) 
  const handlePrice = () => {
    setPrice( prevPrice => prevPrice + 10) ; //sử dụng call back trong setPrice,lấy giá trị price trc cộng với 10 và set thành price hiện tại
    setPrice( prevPrice => prevPrice + 10) ; //giá trị tiếp theo sẽ được cập nhật của setPrice trc 
    setPrice( prevPrice => prevPrice + 10) ;
  }
  return (
    <div className="App">
      <h1>{price}</h1>
      <button onClick={handlePrice}>click</button>
    </div>
  );
}

export default App;
