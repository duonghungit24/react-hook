import { useState, useEffect } from "react";
//su dung useEffect
//1 useEffect(callback)
//-goi lai moi lan khi component re-render
//- goi callback sau khi component them element vao dom
//2 useEffect(callback,[])
//- chi goi call back  1 lan sau khi component render
//3 useEffect(callback,[deps])
//callback se goi lai khi deps thay doi
// tat ca useEffect luon duoc goi sau khi component mounted
const listChange = ["posts", "albums", "todos", "photos"];
const Content = () => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState("posts");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${change}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [change]);
  return (
    <div>
      {listChange.map((item) => (
        <button 
            onClick={() => setChange(item)}
            key={item}>
                {item}
        </button>
      ))}
      {data.map((item) => (
               <li key={item.id}>{item.title}</li>
           ))}
    </div>
  );
};
export default Content;