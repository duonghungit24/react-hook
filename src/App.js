import { useState } from 'react';

const courses = [
  {
    id:1,
    name:'javascript'
  },
  {
    id:2,
    name:'react-native',
  },
  {
    id:3,
    name:'react'
  }
]
function App() {
  const [checked, setChecked] = useState();
  const handleSubmit = () => {
      console.log(checked)
  }
  return (
    <div className="App">
      {courses.map((course) => (
        <div key={course.id}>
            <input 
              checked = {checked === course.id}
              type ='radio'
              onChange={() => setChecked(course.id)}
            />
            {course.name}
        </div>
      ))}
      <button onClick={handleSubmit} >submit</button>
    </div>
  );
}

export default App;
