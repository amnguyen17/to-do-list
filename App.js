import React from 'react'
import {motion} from "framer-motion"
import "./App.css"

const App = () => {

const [tasks, setTasks] = useState([]);
const [newTask, setnewTask] = useState("");

const addTask = () =>{
  if(newTask.trim() !== ""){
    setTasks([...tasks,{id:Date.now(),text:newTask,completed:false}]);
    setnewTask("");
  }
}

const togglecomplete = (id) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? {...task, completed : !task.completed} : task
    )
  );
};

const removetask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id ));
};

  return (
    <div className='app'>
      <h1 className='title'> To Do List -- React </h1>
<div className='input-container'>
<input type="text" placeholder='Add a New Task.....' value={newTask} onChange={(e) => setnewTask(e)} />
<motion.button
  whileHover={{scale:1.1}}
  whileTap={{scale : 0.9}}
  onClick={addTask}
  className='add-task-btn' >Add</motion.button>
</div>      
<div class name='task-container'>
    {tasks.map((task) => (
      
    ))}
</div>

    </div>
  )
}

export default App