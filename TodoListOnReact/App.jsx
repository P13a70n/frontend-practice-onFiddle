import React from 'react';
import { useState } from 'react'

function App() {
  const [name, setName] = useState('');
  const [tasks, setTasks] = useState([]);
  
  let tasksId = 0;
  
  // to handle the changes on input tag 
  function handleChange(event){
    setName(event.target.value);
  }
  
  // add the task
  function handleAdd(){
    if(name.trim() !== ''){
    setTasks(
      [...tasks, {id:tasksId++, name: name}]
      );
    setName('');
    }else{
      alert(`task name can't be empty`);
      return;
    }
  }

  // delete button
  function handleDelete(id){
     setTasks(prev => prev.filter(task => task.id !== id));
  }

  // clear all
  function handleClearAll(){
    setTasks([]);
  }
  

  return (
    <>
      <input type='text' placeholder='Add to do list'value={name} onChange={handleChange}/>
      <button type='button' onClick={handleAdd}>Add</button>
      <button type='button' onClick={handleClearAll}>Clear</button>
      <div>
        <ul>
          {tasks.map(task =>(
             <li key={task.id}>{task.name} <button onClick={() => handleDelete(task.id)}
             >Delete</button> 
             </li>
          ))}
        </ul>
        
      </div>
    </>
  )
}

export default App
