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
          console.log(ele);
          return {...ele, completed:!ele.completed}
        }
        return ele;
      })

      setTodoList(updatedDataList)
    }
  return (
    <div className='todo'>
        {todoList.map((todo, index) => (
          <div key={index} className='todoItems'>
            {/* <h3 style={{color: todo.completed ? "green" : "red"}}>{todo.text}</h3> */}
            <h3  className='py-2' style={{textDecoration : todo.completed ? "line-through" : ""}}>{todo.text}</h3>
            <button  className='btn btn-danger' onClick={()=>deleteTodo(index)}>Delete</button>
            <button  className='btn btn-success ms-3' onClick={()=>handleStatus(index)}>{ todo.completed ? "UnComplete" : "Completed"}</button>
          </div>
        ))}
      </div>
   
  )
}

export default TodoItems