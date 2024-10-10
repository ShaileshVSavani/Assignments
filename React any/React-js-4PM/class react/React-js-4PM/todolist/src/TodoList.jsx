import React, { useState } from "react";

const TodoList = () => {
  let [task, settask] = useState("");
  let [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    let todo = {
      task: task,
      status: false,
    };
    setTaskList([...taskList, todo]);
    settask("");
    console.log(taskList);
  };
  const handleRemoveTask = (index) => {
    let filterdata = taskList.filter((ele, i) => i != index);
    setTaskList(filterdata);
  };
  const handleStatusChange = (index) => {
    let filterdata = taskList.map((ele, i) => {
      if (i == index) {
        ele.status = !ele.status;
        return ele;
      } else {
        return ele;
      }
    });

    setTaskList(filterdata);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => settask(e.target.value)}
        />
        <button onClick={handleAddTask}>add</button>
      </div>
      <hr />
      <div>
        {taskList.map((ele, index) => (
          <div>
            <p style={{ color: ele.status ? "green" : "red" }}>{ele.task}</p>
            <button onClick={() => handleStatusChange(index)}>
              {ele.status ? "unComplete" : "complete"}
            </button>
            <button onClick={() => handleRemoveTask(index)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
