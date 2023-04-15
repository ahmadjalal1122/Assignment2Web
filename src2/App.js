import React, { useState } from 'react';
import './App.css';
import WishList from './WishList';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const updatePriority = (index, priority) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], priority: parseInt(priority) };
    setItems(newItems);
  };

  const moveItemToTop = (index) => {
    const newItems = [...items];
    const item = newItems.splice(index, 1)[0];
    newItems.unshift(item);
    setItems(newItems);
  };

  return (
    <div className="app">
      <WishList
        items={items}
        onAddItem={addItem}
        onRemoveItem={removeItem}
        onUpdatePriority={updatePriority}
        onMoveItemToTop={moveItemToTop}
        onDeleteItem={removeItem}
      />
    </div>
  );
}

export default App;
