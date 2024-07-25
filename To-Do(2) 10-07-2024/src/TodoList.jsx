/* Create a functional component named "TodoList" to manage and display a list of to-do items.
Problem Statement:**: Create a functional component named "TodoList.": Define a state variable, "todos," as an array of to-do items. Each to-do item should have an "id," "text," and "completed" boolean.: Implement a form that allows users to add new to-do items. Ensure that each new to-do item has a unique key (e.g., using a generated uuid).: Render the list of to-do items, allowing users to view and interact with them. Include functionality to mark to-dos as completed and remove them from the list. */

import React from 'react'
import { useState } from 'react'
import TodoItems from './TodoItems'

const TodoList = () => {
    const [todos, setTodos] = useState("")
    // const [todoList, setTodoList] = useState([])
//   const [todoList, setTodoList] = useState(() => {
    // return JSON.parse(localStorage.getItem("todoList")) || [];
    
    // const storedTodos = localStorage.getItem("todoList");
    // return storedTodos ? JSON.parse(storedTodos) : [];
    const [todoList, setTodoList] = useState(() => JSON.parse(localStorage.getItem("todoList")) || []);
//   })
  


    const handleAdd = () => {
      let newTodo ={
        id: todoList.length + 1,
        text: todos,
        completed: false
        }
        
       

        //Using the includes method directly isn't suitable for this case because includes checks for the existence of an element in an array but does not allow for a custom comparison function. However, you can map the todoList array to an array of todo texts and then use includes to check if the current input (todos) is already in the list.

        // Convert todos to lowercase for case-insensitive comparison
        //  const lowerCaseTodos = todos.toLowerCase();
        // const todoTexts = todoList.map(todo => todo.text.toLowerCase());
        // if (todoTexts.includes(lowerCaseTodos)) {
        //     console.log("Todo already exists");
        //     setTodos("")
        //     return;
        // }
         
        // another concept

        if (todoList.some((todo) => todo.text.toLowerCase() === todos.toLowerCase())) {
            console.log("Todo already exists");
            setTodos("")
            return;
        }

        if(todos){
            setTodoList([...todoList, newTodo ])
            console.log(todoList)
            console.log(todos);
            setTodos("")
        }
      
    }
    
  localStorage.setItem('todoList', JSON.stringify(todoList))

  return (
    <div>
        <div>
          <input type="text"  value={todos}   onChange={(e)=>setTodos(e.target.value)} />
          <button className='mt-3 ms-2 p-2' onClick={handleAdd}>Add ToDo</button>
        </div>
    
    < TodoItems todoList={todoList} setTodoList={setTodoList}/>
    </div>
  )
}

export default TodoList


