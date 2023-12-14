import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function Home() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    // Logic to add an item to the list
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <ListGroup variant="flush">
          {items.length === 0 ? (
            <ListGroup.Item>No items yet</ListGroup.Item>
          ) : (
            items.map((item, index) => (
              <ListGroup.Item key={index}>{item}</ListGroup.Item>
            ))
          )}
        </ListGroup>
      </Card>
      <Link to="/add-item">
        <button onClick={addItem}>Add Items</button>
      </Link>
    </div>
  );
}

export default Home;
