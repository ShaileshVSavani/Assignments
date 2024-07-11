/*  Create a functional component named "TodoList" to manage and display a list of to-do items.
Problem Statement:**: Create a functional component named "TodoList.": Define a state variable, "todos," as an array of to-do items. Each to-do item should have an "id," "text," and "completed" boolean.: Implement a form that allows users to add new to-do items. Ensure that each new to-do item has a unique key (e.g., using a generated uuid).: Render the list of to-do items, allowing users to view and interact with them. Include functionality to mark to-dos as completed and remove them from the list. */




import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleAdd = () => { 
        if (todos) {
          setTodoList([...todoList, { id: todoList.length + 1, text: todos, completed: false }]);
          console.log();
            setTodos("");
        }
  };
  
    const handleDelete = (id) => {
        setTodoList(todoList.filter((todo) => todo.id !== id));
    }
   
    return (
        <div className="todo-list-container">
            <h2>To-Do List</h2>
        <div className="input-container">
        <input
                type="text"
                placeholder="Enter a new to-do item"
                value={todos}
                onChange={(e) => setTodos(e.target.value)}
            />
            <button  onClick={handleAdd}>Add Item</button>
           </div>
        
            <div className="todo-items"> 
                {todoList.map((todo) => (
                    <div key={todo.id} className="todo-item">
                        {/* <p>{todo.text} <button onClick={() => setTodoList(todoList.filter(t => t.id !== todo.id))}>Delete</button></p> */}
                    <p><span className='fs-3'>{todo.text}</span> <button  className='ms-4'  onClick={() => handleDelete(todo.id)}>Delete</button></p>
                    
                    
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoList;
