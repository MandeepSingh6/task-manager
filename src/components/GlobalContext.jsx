import React, { createContext, useState, useEffect } from "react";

export const Context = createContext(null);

const GlobalContext = ({ children }) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Context.Provider value={{ tasks, setTasks, input, setInput }}>
      {children}
    </Context.Provider>
  );
};

export default GlobalContext;
