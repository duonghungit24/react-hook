import { useState } from 'react';

function App() {
  const [infor, setInfor] = useState({
    name:'hung',
    age: '19',
    address:'ha dong'
  })
  const handleInfor = () => {
    // setInfor({
    //   girlfriend: 'no'   //nếu click thì nó sẽ gán giá trị mới chứ k thêm vào infor,
    // })
    setInfor({
      ...infor,          //cách khắc phục dùng toán tử es6 spread or prevent
      girlfriend:'no'
    })
  }
  return (
    <div className="App">
      <h1>{JSON.stringify(infor)}</h1>
      <button onClick={handleInfor}>update</button>
    </div>
  );
}

export default App;
