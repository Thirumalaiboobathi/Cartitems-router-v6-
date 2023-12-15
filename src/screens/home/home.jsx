import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import AddTodo from '../Addtodo/additems';

function Home() {
  const [items, setItems] = useState([]);
  const [showAddTodo, setShowAddTodo] = useState(false);
  const navigate = useNavigate();

  const addItemToList = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                {items.length === 0 ? (
                  <ListGroup.Item>No items yet</ListGroup.Item>
                ) : (
                  items.map((item, index) => (
                    <ListGroup.Item key={index}>{item}</ListGroup.Item>
                  ))
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          {!showAddTodo && (
            <button
              className="btn btn-primary mt-2"
              onClick={() => {
                setShowAddTodo(true);
                navigate('/additems');
              }}
            >
              Add Items
            </button>
          )}
          {showAddTodo && <AddTodo addItemToList={addItemToList} />}
        </div>
      </div>
    </div>
  );
}

export default Home;
