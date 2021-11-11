import { useState, useEffect } from "react";
//su dung useEffect
//1 useEffect(callback)
//-goi lai moi lan khi component re-render
//- goi callback sau khi component them element vao dom
//2 useEffect(callback,[])
//- chi goi call back  1 lan sau khi component render
//3 useEffect(callback,[deps])
//callback se goi lai khi deps thay doi
// 1 tat ca useEffect luon duoc goi sau khi component mounted
// 2 clean up function luoon duoc goi truoc khi component mounted
// 3 clean up function luoon duoc goi truoc khi callback duoc goi (tru lan mounted)

const Content = () => {
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    console.log("mounted");
    return () => {
        URL.revokeObjectURL(avatar?.preview);
        console.log("remove")
    }
  },[avatar])
  const handleAvatar = (e) => {
    const file = e.target.files[0]; // co the chon nhieu anh
    file.preview = URL.createObjectURL(file); //tao ra 1 url và thêm thuộc tính preview cho object file
    setAvatar(file);
  };
  return (
    <div>
      <input type="file" onChange={handleAvatar} />
      {avatar && <img src={avatar.preview} alt="hello" width="80%"/>}
    </div>
  );
};
export default Content;
