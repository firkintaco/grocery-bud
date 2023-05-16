import React from "react";
import SingleItem from "./SingleItem";

const ItemList = ({ items, removeItem, editItem }) => {
  return (
    <section className="items">
      {items.map((item) => {
        return (
          <SingleItem
            item={item}
            removeItem={removeItem}
            key={item.id}
            editItem={editItem}
          />
        );
      })}
    </section>
  );
};

export default ItemList;
