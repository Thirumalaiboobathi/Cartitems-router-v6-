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
      <header style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
        <h1 style={{ margin: '0', fontSize: '24px' }}>Todo List</h1>
        <br></br>
        <button onClick={handleLogout} style={{ marginLeft: '50px', padding: '8px 16px' }}>Logout</button>
      </header>
      <div>
        {todos.length === 0 ? (
          <p style={{ fontStyle: 'italic' }}>No items yet</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: '0' }}>
            {todos.map((todo, index) => (
              <li key={index} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
                <strong>Title:</strong> {todo.title}, <strong>Due Date:</strong> {todo.date}
              </li>
            ))}
          </ul>
        )}
      </div>
      <hr style={{ margin: '20px 0' }} />
      <button onClick={handleAddTodo} style={{ padding: '8px 16px', fontSize: '16px' }}>Add Todo</button>
    </div>
  );
};

export default Home;
