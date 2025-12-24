import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      
      {/* Page Intro */}
      <section className="text-center animate-fade-up">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
          Stay productive
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Organize your tasks, track progress, and get things done efficiently.
        </p>
      </section>

      {/* Input Card */}
      <section
        className="
          animate-fade-up
          bg-white/70 dark:bg-slate-900/70
          backdrop-blur-xl
          rounded-3xl
          border border-black/5 dark:border-white/10
          shadow-sm
          p-6 sm:p-8
        "
      >
        <TaskInput />
      </section>

      {/* Task List */}
      <section className="animate-fade-up">
        <TaskList />
      </section>

    </main>
  );
}
