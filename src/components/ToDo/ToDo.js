import React from 'react';
import { useState } from 'react';

const ToDo = () => {

  const [toDoTasksList, setToDoTasksList] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [newTask, setNewTask] = useState('');


  const addTask = (task) => {
    setToDoTasksList([...toDoTasksList,{ 
        id: Date.now(), 
        text: task 
    }]);
    setNewTask('');
  };

  const editTask = (updatedText) => {
    const updatedToDoTasksList = toDoTasksList.map((task) => {
      if (task.id === selectedTask) {
        return { ...task, text: updatedText };
      }
      return task;
    });
    setToDoTasksList(updatedToDoTasksList);
    setSelectedTask(null);
    setEditingTask(null);
  };

  const deleteTask = (taskID) => {
    const updatedToDoTasksList = toDoTasksList.filter((task) => task.id !== taskID);
    setToDoTasksList(updatedToDoTasksList);
  };

  return (
    <div>
      <h2>ToDo List</h2>
      <ul>
        {toDoTasksList.map((task) => (
          <li key={task.id}>
            <div>
              {selectedTask === task.id ? (
                <div>
                  <input
                    type="text"
                    value={editingTask !== null ? editingTask : task.text}
                    onChange={(e) => setEditingTask(e.target.value)}
                  />
                  <button onClick={() => editTask(editingTask)}>Update</button>
                </div>
              ) : (
                <div>
                  <span>{task.text}</span>
                  <button onClick={() => setSelectedTask(task.id)}>Edit</button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={() => addTask(newTask)}>Add Task</button>
      </div>
    </div>
  );
}

export default ToDo;
