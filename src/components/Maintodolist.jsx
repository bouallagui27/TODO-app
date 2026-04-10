import { CountContext } from "./contextcount";
import { useTodos } from "../hooks/usetodo";
const CATEGORIES = [
  { name: "work",     activeClass: "bg-violet-500/20 text-violet-300 border-violet-500/40" },
  { name: "personal", activeClass: "bg-rose-500/20 text-rose-300 border-rose-500/40" },
  { name: "other",    activeClass: "bg-sky-500/20 text-sky-300 border-sky-500/40" },
];

const TAG_STYLES = {
  work:     "bg-violet-500/10 text-violet-400",
  personal: "bg-rose-500/10 text-rose-400",
  other:    "bg-sky-500/10 text-sky-400",
};

const Maintodolist = () => {
  const { 
    todos, 
    category, 
    setCategory, 
    inputRef, 
    addTask, 
    toggleTask, 
    deleteTask 
  } = useTodos();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 bg-white/5 border border-white/10 rounded-2xl p-2">
        <input
          ref={inputRef}
          type="text"
          placeholder="What needs to be done?"
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          className="flex-1 bg-transparent text-white placeholder:text-white/20 text-sm px-3 outline-none"
        />
        <button
          onClick={addTask}
          className="bg-violet-500 hover:bg-violet-400 active:scale-95 transition-all text-white text-sm font-medium rounded-xl px-5 py-2.5 shadow-lg shadow-violet-500/25"
        >
          Add
        </button>
      </div>

      {/* Categories */}
      <div className="flex gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setCategory(cat.name)}
            className={`text-xs font-medium px-4 py-1.5 rounded-full border transition-all duration-200 capitalize ${
              category === cat.name
                ? cat.activeClass
                : "border-white/10 text-white/30 hover:text-white/50"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {todos.length === 0 ? (
          <div className="text-center py-16 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="4" y="4" width="12" height="12" rx="3" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                <path d="M7 10h6M10 7v6" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-white/20 text-sm">No tasks yet</p>
          </div>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="group flex items-center gap-3 bg-white/5 hover:bg-white/[0.07] border border-white/10 rounded-xl px-4 py-3 transition-all duration-200"
            >
              {/* Checkbox */}
              <button
                onClick={() => toggleTask(todo.id)}
                className={`w-5 h-5 rounded-md border flex-shrink-0 flex items-center justify-center transition-all ${
                  todo.done
                    ? "bg-violet-500 border-violet-500"
                    : "border-white/20 hover:border-violet-400"
                }`}
              >
                {todo.done && (
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M2 5.5l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>

              <span
                className={`flex-1 text-sm leading-snug transition-all ${
                  todo.done ? "line-through text-white/25" : "text-white/80"
                }`}
              >
                {todo.text}
              </span>

              {/* Tag */}
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-md capitalize ${TAG_STYLES[todo.category]}`}>
                {todo.category}
              </span>

              {/* Delete */}
              <button
                onClick={() => deleteTask(todo.id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-lg hover:bg-rose-500/10 text-white/20 hover:text-rose-400"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 3.5h10M5.5 3.5V2.5a1 1 0 011-1h1a1 1 0 011 1v1M6 6.5v4M8 6.5v4M3 3.5l.7 7a1 1 0 001 .9h4.6a1 1 0 001-.9l.7-7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer count */}
      {todos.length > 0 && (
        <p className="text-center text-white/20 text-xs">
          {todos.filter((t) => !t.done).length} remaining
        </p>
      )}
    </div>
  );
};

export default Maintodolist;
