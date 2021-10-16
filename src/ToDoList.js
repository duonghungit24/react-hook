import { useState } from "react";


const ToDoList = () => {
    
    const [list ,setList] = useState(() => {
        const  storeList = JSON.parse(localStorage.getItem('list')); //lay du lieu tu localstorage
        return storeList ?? []; //neu storeList null or underfine
    });
    const [name ,setName] =useState();
    const handleInput = (name) => {
          setName(name)
    }
    const handleAdd = () => {
        setList(prev => {
            const newList = [...prev, name];
            const jsonList = JSON.stringify(newList);
            localStorage.setItem('list',jsonList) //luu du lieu vao list trong localstorage 
           return newList
        })
        setName('')
    }
    return(
        <div>
           <input
                value={name}
                onChange={(e) => handleInput(e.target.value)}
           />
           <button onClick={handleAdd}>ADD</button>
           <ul>
               {list.map((item,index) => (
                   <li key={index}>{item}</li>
               ))}
           </ul>
        </div>
    )
}
export default ToDoList;