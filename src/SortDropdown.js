import React from "react";

function SortDropdown({ onChange }) {
  function handleSortChange(event) {
    onChange(event.target.value);
  }

  return (
    <div className="container">
      <select onChange={handleSortChange}>
        <option value="alphabetically">Sort Alphabetically</option>
        <option value="decrementCount">Sort Decrement Count</option>
        <option value="incrementCount">Sort Increment Count</option>
      </select>
    </div>
  );
}

export default SortDropdown;
