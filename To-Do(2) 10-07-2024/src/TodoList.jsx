/* Create a functional component named "TodoList" to manage and display a list of to-do items.
Problem Statement:**: Create a functional component named "TodoList.": Define a state variable, "todos," as an array of to-do items. Each to-do item should have an "id," "text," and "completed" boolean.: Implement a form that allows users to add new to-do items. Ensure that each new to-do item has a unique key (e.g., using a generated uuid).: Render the list of to-do items, allowing users to view and interact with them. Include functionality to mark to-dos as completed and remove them from the list. */

import React from 'react'
import { useState } from 'react'
import TodoItems from './TodoItems'

const TodoList = () => {
    const [todos, setTodos] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleAdd = () => {
      let newTodo ={
        id: todoList.length + 1,
        text: todos,
        completed: false
      }
        if(todos){
            setTodoList([...todoList, newTodo ])
            console.log(todoList)
            console.log(todos);
            setTodos("")
     }
    }
    

  return (
    <div>
        <div>
        <input type="text"  value={todos}   onChange={(e)=>setTodos(e.target.value)} />
        <br />
        <button className='mt-3' onClick={handleAdd}>Add ToDo</button>
       
    </div>
    
    <TodoItems todoList={todoList} setTodoList={setTodoList}/>
    </div>
  )
}

export default TodoList