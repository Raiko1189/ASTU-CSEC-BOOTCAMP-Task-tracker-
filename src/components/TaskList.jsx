import { useTasks } from "../store/taskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks } = useTasks();

  if (tasks.length === 0) {
    return (
      <div className="animate-fade-up text-center py-20">
        <p className="text-lg font-semibold text-slate-700 dark:text-slate-200">
          No tasks yet
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Add your first task to get started 🚀
        </p>
      </div>
    );
  }

  return (
    <ul
      className="
        space-y-4
        max-w-3xl mx-auto
      "
    >
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
