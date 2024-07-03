


const TaskListComponent = ({ taskList, setTaskList }) => {
  const deleteItemHandler = (index) => {
    const updatedList = [...taskList];
    updatedList.splice(index, 1);
    setTaskList(updatedList);
  }
  return <div>
    <ul className="todo-list">
          {taskList.length==0 ? "No tasks found"
          
          :taskList.map((ele,i) => 
          
          <li key={i}>{ele.task}
              <button className="delete-button" onClick={deleteItemHandler}><i className="fa-solid fa-trash"></i> </button>
          </li>)
          
       }
        </ul>
  </div>;
};

export default TaskListComponent;
