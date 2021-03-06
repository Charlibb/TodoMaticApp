import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";


function App(props) {
  
  const [ tasks, setTasks] = useState(props.tasks)

  function deleteTask(id){
    const remainingTasks = tasks.filter(lalatask => id !== lalatask.id);
  setTasks(remainingTasks);
  }

  const taskList = tasks.map(task => (
     <Todo 
     id={task.id}
     name={task.name} 
     completed={task.completed}
     key={task.id}
     deleteTask={deleteTask}
     />
     )
     );


     function addTask(name){
      const newTask = { id: "id", name: name, completed: false };
      setTasks([...tasks, newTask]);
    }
  


   const taskCounter = tasks.length <=1 ? "task" : "tasks";
    
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>

     <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">
      {/*   <FilterButton /> */}
        <FilterButton />
       {/*  <FilterButton /> */}
      </div>

      <h2 id="list-heading"> {tasks.length} {taskCounter} remaining</h2>
      
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
       {taskList}
      </ul>
    </div>
  );
}


export default App;