import React, { useState, useEffect } from 'react';

const Question1 = () => {
  // Initialize state for the list of wishes
  const [wishes, setWishes] = useState([]);

  // Initialize state for the input value
  const [inputValue, setInputValue] = useState('');
  const addItem = (newItem, newPriority) => {
    setWishList([...wishList, { item: newItem, priority: newPriority }]);
  };
  
  // Load wishes from local storage on mount
  useEffect(() => {
    const storedWishes = JSON.parse(localStorage.getItem('wishes'));
    if (storedWishes) {
      setWishes(storedWishes);
    }
  }, []);

  // Save wishes to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('wishes', JSON.stringify(wishes));
  }, [wishes]);

  // Handle adding a new wish to the list
  const handleAddWish = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      const newWish = {
        id: Date.now(),
        text: inputValue.trim(),
      };
      setWishes([...wishes, newWish]);
      setInputValue('');
    }
  };

  // Handle removing a wish from the list
  const handleRemoveWish = (id) => {
    setWishes(wishes.filter((wish) => wish.id !== id));
  };

  return (
    <div>
      <h1>My Wish List</h1>
      <form onSubmit={handleAddWish}>
        <input
          type="text"
          placeholder="Enter your wish"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
      {wishList.length > 0 ? (
  <ul>
    {wishList
      .sort((a, b) => a.priority - b.priority)
      .map((wish, index) => (
        <li key={index}>
          {wish.item} (priority: {wish.priority})
          <button onClick={() => removeItem(index)}>Remove</button>
        </li>
      ))}
  </ul>
) : (
  <p>No wishes yet!</p>
)}

      </ul>
    </div>
  );
};

export default Question1;
