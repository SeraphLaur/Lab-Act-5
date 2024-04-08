import React, { useState } from "react";
function TodoItem({ itemList, onComplete, onRemove, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(itemList.name);
  const [editedQuantity, setEditedQuantity] = useState(itemList.quantity);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditSubmit = () => {
    onEdit(editedName, editedQuantity);
    setIsEditing(false);
  };

  return (
    <li className={itemList.isChecked ? "completed" : ""}>
      {isEditing ? (
        <div>
          <input
            type="number"
            value={editedQuantity}
            onChange={(e) => setEditedQuantity(e.target.value)}
          />
          <br />
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <button className="action-btn" onClick={handleEditSubmit}>
            Save
          </button>
        </div>
      ) : (
        <div>
          <span
            style={{
              textDecoration: itemList.isChecked ? "line-through" : "none",
            }}
          >
            {itemList.quantity + " " + itemList.name}
          </span>
          <div>
            <button className="action-btn" onClick={onComplete}>
              {itemList.isChecked ? "Undo" : "Complete"}
            </button>
            <button className="action-btn" onClick={handleEdit}>
              Edit
            </button>
            <button className="action-btn remove-btn" onClick={onRemove}>
              Remove
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default TodoItem;
