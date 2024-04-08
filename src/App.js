import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import TodoList from "./TodoList";
import AddToDo from "./AddToDo";
import Header from "./Header";
import Footer from "./Footer";
import SortDropdown from "./SortDropdown"; // Import the SortDropdown component

function App() {
  const [items, setItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleRemoveItem(itemId) {
    const updatedItems = items.filter((item) => item.id !== itemId);
    const updatedCompletedItems = completedItems.filter(
      (item) => item.id !== itemId
    );

    setItems(updatedItems);
    setCompletedItems(updatedCompletedItems);
  }

  function handleCompleteItem(itemId) {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });
    setItems(updatedItems);
  }

  function handleEditItem(itemId, editedName, editedQuantity) {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, name: editedName, quantity: editedQuantity };
      }
      return item;
    });
    setItems(updatedItems);
  }

  function sortAlphabetically() {
    const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
    setItems(sortedItems);
  }

  function sortDecrementCount() {
    const sortedItems = [...items].sort((a, b) => b.quantity - a.quantity);
    setItems(sortedItems);
  }

  function sortIncrementCount() {
    const sortedItems = [...items].sort((a, b) => a.quantity - b.quantity);
    setItems(sortedItems);
  }

  function handleSortChange(sortOption) {
    switch (sortOption) {
      case "alphabetically":
        sortAlphabetically();
        break;
      case "decrementCount":
        sortDecrementCount();
        break;
      case "incrementCount":
        sortIncrementCount();
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <Header />
      <SortDropdown onChange={handleSortChange} />{" "}
      {/* Render the SortDropdown component */}
      <AddToDo onAddItem={handleAddItem} />
      <TodoList
        items={items}
        onRemoveItem={handleRemoveItem}
        onCompleteItem={handleCompleteItem}
        onEditItem={handleEditItem}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
