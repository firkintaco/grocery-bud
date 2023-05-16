import React, { useState } from "react";

const SingleItem = ({ item, removeItem, editItem }) => {
  const [isChecked, setIsChecked] = useState(item.completed);

  const handleCheck = (id) => {
    setIsChecked(!isChecked);
    editItem(id);
  };
  return (
    <div className="single-item" key={item.id}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => handleCheck(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: isChecked && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        type="submit"
        className="remove-btn"
        onClick={() => removeItem(item.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default SingleItem;
