import { useTasks } from "../store/taskContext";

export default function Stats() {
  const { tasks } = useTasks();
  const completed = tasks.filter((t) => t.completed).length;
  const remaining = tasks.length - completed;

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      
      {/* Page Header */}
      <section className="text-center animate-fade-up">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
          Task Overview
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          A quick summary of your productivity and task progress.
        </p>
      </section>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-up">
        <StatCard label="Total Tasks" value={tasks.length} accent="indigo" />
        <StatCard label="Completed" value={completed} accent="emerald" />
        <StatCard label="Remaining" value={remaining} accent="amber" />
      </section>
    </main>
  );
}

/* --- Card Component --- */
function StatCard({ label, value, accent }) {
  const accents = {
    indigo: "from-indigo-500/10 to-blue-500/10",
    emerald: "from-emerald-500/10 to-teal-500/10",
    amber: "from-amber-500/10 to-orange-500/10",
  };

  return (
    <div
      className={`
        animate-fade-up
        relative overflow-hidden
        rounded-3xl p-8
        bg-gradient-to-br ${accents[accent]}
        dark:from-white/5 dark:to-white/10
        backdrop-blur-xl
        border border-black/5 dark:border-white/10
        shadow-sm hover:shadow-lg
        transition-all duration-300
        text-center
      `}
    >
      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
        {label}
      </p>
      <p className="mt-3 text-4xl sm:text-5xl font-black">
        {value}
      </p>
    </div>
  );
}
