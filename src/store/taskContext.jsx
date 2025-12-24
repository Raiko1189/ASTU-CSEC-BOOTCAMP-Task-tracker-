import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    const storedDark = localStorage.getItem("darkMode");
    return storedDark ? JSON.parse(storedDark) : false;
  });

  // ✅ Persist tasks (THIS WAS MISSING)
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ✅ Persist dark mode
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
