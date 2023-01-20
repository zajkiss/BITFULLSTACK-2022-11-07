import './App.css';
import React,{useState,useEffect} from 'react';
import Form from './components/Form';


function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState({
    id: Math.floor(Math.random() * 10000),
    name: '',
  });
  useEffect(() => {
    const data = localStorage.getItem('tasks');
    setTasks(JSON.parse(data));
  }, []);
  const handleForm = (e) => {
    e.preventDefault();
    let data;

      data = [...tasks, currentTask];
      setTasks(data);
    

    localStorage.setItem('tasks', JSON.stringify(data));


    console.log(data);
  }
  const handleDelete = (index) => {
    tasks.splice(index, 1);
    const data = [...tasks];
    setTasks(data);
    localStorage.setItem('tasks', JSON.stringify(data));
  }
  return (
    <div className="todo-app">
    <Form
     currentInput={currentTask} 
     setCurrentInput={setCurrentTask} 
     handleForm={handleForm} 
      />
      <div>
      {tasks.map((value, index) => 
          <li 
            key={value.name + index} 

          >
            <div className="todo-row">
              <span>{value.name}</span>
              <div>
              <button 
                  className="btn btn-danger me-2" 
                  onClick={() => handleDelete(index)}
                >Delete</button>
              </div>
            </div>
          </li> 
        )}
      </div>
    </div>

  );
}

export default App;
