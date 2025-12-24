import { useState } from "react";
import { useTasks } from "../store/taskContext";

export default function TaskInput() {
  const [text, setText] = useState("");
  const { tasks, setTasks } = useTasks();

  const handleAdd = () => {
    if (!text.trim()) return;

    setTasks([
      ...tasks,
      { id: Date.now(), text, completed: false },
    ]);

    setText("");
  };

  return (
    <div className="
      mb-8 p-4 rounded-3xl
      bg-white/60 dark:bg-zinc-900/60
      backdrop-blur-xl
      border border-black/5 dark:border-white/10
      shadow-lg
    ">
      <div className="flex flex-col sm:flex-row gap-4">

        {/* Input */}
        <div className="relative flex-1">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What needs to be done?"
            className="
              w-full px-5 py-4 rounded-2xl
              bg-white/90 dark:bg-zinc-950/70
              text-zinc-800 dark:text-zinc-100
              placeholder-zinc-400
              border border-black/5 dark:border-white/10
              focus:outline-none focus:ring-2 focus:ring-indigo-500
              transition
            "
          />
        </div>

        {/* Button */}
        <button
          onClick={handleAdd}
          className="
            flex items-center justify-center gap-2
            px-6 py-4 rounded-2xl
            bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500
            text-white font-semibold
            shadow-xl shadow-indigo-500/30
            hover:scale-105 active:scale-95
            transition-transform
          "
        >
          <span className="text-lg">＋</span>
          <span>Add Task</span>
        </button>

      </div>
    </div>
  );
}
