import { useState, useEffect } from "react";
//su dung useEffect 
//1 useEffect(callback)
//-goi lai moi lan khi component re-render
//- goi callback sau khi component them element vao dom
//2 useEffect(callback,[])
//- chi goi call back  1 lan sau khi component render
//3 useEffect(callback,[deps]) 
//
// tat ca useEffect luon duoc goi sau khi component mounted
const Content = () => {
    const [title, setTitle] = useState('');
    //document.title = title; neu k su dung useEffect thi no se thuc hien theo thu tu
     useEffect(() => {     //component se dc goi la thuc hien theo thu tu khi den useEffect thi se vao callback va di chuyen tiep render ra giao dien rooi moi goi den call back
         document.title = title; 
     })
    
    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
        </div>
    )
}
export default Content;