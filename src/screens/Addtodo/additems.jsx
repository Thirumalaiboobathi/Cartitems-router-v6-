import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

function AddTodo({ addItemToList }) {
  const [todoTitle, setTodoTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new item based on the form input
    const newItem = {
      title: todoTitle,
      date: dueDate,
    };

    // Call the function passed from Home and pass the new item
    addItemToList(newItem);

    // Clear the form fields after adding the item
    setTodoTitle('');
    setDueDate('');
  };

  return (
    <div className="container">
      <h1>Add Todo</h1>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Link to="/home">
          <button className="btn btn-light">
            <BsArrowLeft /> Go Back
          </button>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="todoTitle">Todo Title:</label>
          <input
            type="text"
            className="form-control"
            id="todoTitle"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            className="form-control"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
