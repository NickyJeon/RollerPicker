import React, { useState } from 'react';
import './RollerPicker.css'; // Importing RollerPicker.css file

function RollerPicker() {
  // State variables
  const [items, setItems] = useState([]); // Array to store entered items
  const [selectedItem, setSelectedItem] = useState(null); // Currently selected item
  const [newItemText, setNewItemText] = useState(''); // Text for new item input

  // Function to handle adding a new item
  const handleAddItem = (e) => {
    e.preventDefault();
    const trimmedText = newItemText.trim();
    if (trimmedText) {
      setItems([...items, trimmedText]); // Adding new item to the list of items
      setNewItemText(''); // Clearing the input field
    }
  };

  // Function to select a random item
  const handleRoll = () => {
    if (items.length > 0) {
      const randomIndex = Math.floor(Math.random() * items.length);
      const selected = items[randomIndex]; // Selecting a random item from the list
      setSelectedItem(selected); // Setting the selected item
    } else {
      setSelectedItem(null); // Resetting selected item if the list is empty
    }
  };

  // Function to refresh the list and selected item
  const handleRefresh = () => {
    setItems([]); // Clearing the list of items
    setSelectedItem(null); // Resetting selected item
  };

  return (
    <div className="container"> {/* Adding .container class */}
      <h1 className="title">Hyemin's Roller Picker</h1> {/* Adding a title */}
      <img src={process.env.PUBLIC_URL + '/images/download.jpeg'} alt="Hyemin's Roller Picker" style={{ width: '25%', height: 'auto' }} /> {/* Adding an image */}
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          placeholder="Enter an item"
        />
        <button type="submit">Add Item</button>
      </form>
      <div>
        <button onClick={handleRoll}>Roll</button>
        <button onClick={handleRefresh}>Refresh</button> {/* Moving the Refresh button next to the Roll button */}
      </div>
      {selectedItem && <p className="selected-item">Selected Item: <span className="bold-green">{selectedItem}</span></p>} {/* Adding .selected-item class */}

      {/* Display the list of entered items */}
      <div>
        <h2>Entered Items:</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li> // Displaying each item as a list item
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RollerPicker;

