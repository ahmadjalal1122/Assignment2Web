import React from "react";
import "./WishListMain.css";

const WishListMain = ({ onSubmit }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [priority, setPriority] = React.useState(1);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: inputValue,
      priority: priority
    };
    onSubmit(newItem);
    setInputValue("");
    setPriority(1);
  };

  return (
    <header className="wish-list-header" style={{margin:"40px"}}>
      {/* <h1>Wish List</h1> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your wish"
          style={{margin:"20px"}}
        />
          
        <select value={priority} onChange={handlePriorityChange} style={{margin:"20px"}}>
          <option value="1">High=1</option>
          <option value="2">Medium=2</option>
          <option value="3">Low=3</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </header>
  );
};

export default WishListMain;
