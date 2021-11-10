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
//clean up function luoon duoc goi truoc khi component mounted


const Content = () => {
  const [countdown, setCountdown] = useState(200);
  //set timeout
//  useEffect(() => {
//  const set =  setTimeout(() => {
//     setCountdown(countdown-1);
//   },1000)
//   return () => clearTimeout(set);
//  },[countdown])
//set interval
 useEffect(() => {
   const setCount = setInterval(() => {
    setCountdown(prev => prev - 1);
  },1000)
  return () => clearInterval(setCount)
 })
  return (
    <div>
       {countdown}
    </div>
  );
};
export default Content;
