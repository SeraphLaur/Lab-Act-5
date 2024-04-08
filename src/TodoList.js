import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ items, onCompleteItem, onRemoveItem, onEditItem }) {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          itemList={item}
          onComplete={() => onCompleteItem(item.id)}
          onEdit={(editedName, editedQuantity) =>
            onEditItem(item.id, editedName, editedQuantity)
          }
          onRemove={() => onRemoveItem(item.id)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
