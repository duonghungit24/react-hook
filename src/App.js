import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "javascript",
  },
  {
    id: 2,
    name: "react-native",
  },
  {
    id: 3,
    name: "react",
  },
];
function App() {
  const [checked, setChecked] = useState([]);
  const handleChange = (id) => {
    const isCheck = checked.includes(id); //kiem tra xem check da co id nao giong vs id truyen chua
    setChecked(prev => {
      if(isCheck) { 
        return  checked.filter(item => item !==id) //loc ra id muon huy  bo va  tra ve mang id moi
      }
      else{
        return [...prev, id]
      }
    })
  };
  const handleSubmit = () => {
    console.log(checked);
  };
  return (
    <div className="App">
      {courses.map((course) => (
        <div key={course.id}>
          <input
            checked={checked.includes(course.id)}
            type="checkbox"
            onChange={() => handleChange(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default App;
