import { useState } from "react";

// src/components/AddTodo.js
function AddTodo({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newItem = { name, quantity, isChecked: false, id: Date.now() };
    console.log(newItem);
    setName("");
    setQuantity(1);
    onAddItem(newItem);
  }
  return (
    <div className="add-todo-container">
      <form onSubmit={handleSubmit}>
        <select
          value={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
          className="priority-select"
        >
          {/* <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option> */}
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Add a new todo..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
