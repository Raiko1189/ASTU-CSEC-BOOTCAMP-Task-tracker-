import { useTasks } from "../store/taskContext";

export default function TaskItem({ task }) {
  const { tasks, setTasks } = useTasks();

  const toggle = () => {
    setTasks(
      tasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const remove = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <li
      className={`
        animate-fade-up
        group relative
        flex items-center justify-between gap-4
        rounded-2xl p-5
        bg-white/70 dark:bg-slate-900/70
        backdrop-blur-xl
        border border-black/5 dark:border-white/10
        shadow-sm hover:shadow-lg
        transition-all duration-300
        ${task.completed ? "opacity-70" : ""}
      `}
    >
      {/* Left section */}
      <div className="flex items-center gap-4">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggle}
          className="w-5 h-5 accent-indigo-500 cursor-pointer"
        />

        {/* Task text */}
        <span
          className={`
            text-sm leading-relaxed transition
            ${
              task.completed
                ? "line-through text-slate-400"
                : "font-medium text-slate-800 dark:text-slate-100"
            }
          `}
        >
          {task.text}
        </span>
      </div>

      {/* Delete button (trash icon) */}
      <button
        onClick={remove}
        aria-label="Delete task"
        className="
          opacity-0 group-hover:opacity-100
          text-slate-400 hover:text-red-500
          hover:scale-110
          transition-all duration-200
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 7h12M9 7V5h6v2M9 11v6M12 11v6M15 11v6M6 7l1 13h10l1-13"
          />
        </svg>
      </button>

      {/* Completed badge */}
      {task.completed && (
        <span className="absolute right-14 top-1/2 -translate-y-1/2 text-xs font-semibold text-emerald-500">
          Done
        </span>
      )}
    </li>
  );
}
