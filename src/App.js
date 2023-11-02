import React, { useState } from 'react';
import ToDo from './components/ToDo/ToDo';
import './App.css';

const App = () => {
  const [todoLists, setTodoLists] = useState([<ToDo key={0} />]);

  const addTodoList = () => {
    const newList = <ToDo key={todoLists.length} />;
    setTodoLists([...todoLists, newList]);
  };

  return (
    <div className="App">
      <h1>ToDo Lists</h1>
      <div className="todo-list-container">
        {todoLists}
      </div>
      <br />
      <button onClick={addTodoList}>Add ToDo List</button>
    </div>
  );
}

export default App;
