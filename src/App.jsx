import { useEffect, useState } from "react";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};
const defaultList = JSON.parse(localStorage.getItem("list") || "[]");
const App = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const id = nanoid();
    const newItem = {
      name: itemName,
      id: id,
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item added to list");
  };
  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item removed from list");
  };
  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };
  return (
    <main className="section-center">
      <Form addItem={addItem} />
      <ItemList items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer position="top-center" />
    </main>
  );
};

export default App;
