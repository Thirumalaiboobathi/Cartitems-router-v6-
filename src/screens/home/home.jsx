import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const todosFromStorage = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(todosFromStorage);
  }, []);

  const handleAddTodo = () => {
    navigate('/additems');
  };

  const handleLogout = () => {
    // Perform any logout actions (e.g., clear user session, reset local storage)
    // For example: localStorage.clear();
    navigate('/');
  };

  return (
    <div className="container">
      <h1 style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={handleLogout} style={{ marginRight: '10px' }}>Logout</button>
        Todo List
      </h1>
      <ul>
        {todos.length === 0 ? (
          <li>No items yet</li>
        ) : (
          todos.map((todo, index) => (
            <li key={index}>
              Title: {todo.title}, Due Date: {todo.date}
            </li>
          ))
        )}
      </ul>
      <hr />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default Home;
