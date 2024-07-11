import React from 'react'

const TodoItems = ({todoList, setTodoList}) => {
    let updatedTodoList =[...todoList]
    const deleteTodo = (index) => {
      console.log(index);
        // updatedTodoList.splice(index, 1)
        // setTodoList(updatedTodoList)
       
        setTodoList(updatedTodoList.filter((ele, i) => i!==index))
        console.log(todoList)
    }
    
    const handleStatus = (index) => {
      let updatedDataList = todoList.map((ele, i) =>{
        if(i===index){
          return {...ele, completed:!ele.completed}
        }
        return ele;
      })

    }
    
  return (
    <div>
        {todoList.map((todo, index) => (
          <div key={index}>
            {/* <h3 style={{color: todo.completed ? "green" : "red"}}>{todo.text}</h3> */}
            <h3 style={{textDecoration : todo.completed ? "line-through" : ""}}>{todo.text}</h3>
            <button onClick={()=>deleteTodo(index)}>Delete</button>
            <button onClick={()=>handleStatus(index)}>{ todo.Completed ? "UnComplete" : "Completed"}</button>
          </div>
        ))}
      </div>
   
  )
}

export default TodoItems