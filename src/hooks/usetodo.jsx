import { useState, useRef, useContext } from 'react';
import { CountContext } from "../components/contextcount";
export const useTodos = () => {
  const inputRef = useRef(null);
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState("work");
  const { setCount, setDone } = useContext(CountContext);

  // Function داخلية لتحديث الـ Header
  const syncContext = (updated) => {
    setCount(updated.length);
    setDone(updated.filter((t) => t.done).length);
  };

  const addTask = () => {
    const value = inputRef.current.value.trim();
    if (!value) return;
    const updated = [...todos, { id: Date.now(), text: value, done: false, category }];
    setTodos(updated);
    syncContext(updated);
    inputRef.current.value = "";
  };

  const toggleTask = (id) => {
    const updated = todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
    setTodos(updated);
    syncContext(updated);
  };

  const deleteTask = (id) => {
    const updated = todos.filter((t) => t.id !== id);
    setTodos(updated);
    syncContext(updated);
  };

  // نخرجوا الـ State والـ Functions اللي حشتنا بيهم في الـ UI
  return {
    todos,
    category,
    setCategory,
    inputRef,
    addTask,
    toggleTask,
    deleteTask
  };
};