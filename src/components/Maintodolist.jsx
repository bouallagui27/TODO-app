import { useContext, useRef, useState } from 'react'
import { CountContext } from './contextcount'

const Maintodolist = () => {
  const inputRef = useRef(null);
  const [todos, setTodos] = useState([]);
  const { setCount } = useContext(CountContext);
  const [category, setCategory] = useState("work");

  function addTask() {
    const value = inputRef.current.value;
    if (!value.trim()) return;

    setTodos(prev => [...prev, {
      id: Date.now(),
      text: value.trim(),
      done: false,
      category: category
    }]);

    inputRef.current.value = "";
  }

  function toggleTask(id) {
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updated);
    setCount(updated.filter(todo => todo.done).length);
  }

  const categories = [
    { name: 'work', active: 'bg-violet-500 text-white', inactive: 'bg-slate-200 text-slate-600' },
    { name: 'personal', active: 'bg-red-400 text-white', inactive: 'bg-slate-200 text-slate-600' },
    { name: 'other', active: 'bg-blue-400 text-white', inactive: 'bg-slate-200 text-slate-600' },
  ];
   function deleteTask(id) {
    const filtered = todos.filter(todo => todo.id !== id);
    setTodos(filtered);
    setCount(filtered.filter(todo => todo.done).length);
  }
  return (
    <div className='max-w-2xl mx-auto p-6 bg-white rounded-3xl shadow-2xl border border-gray-100'>
      <div className='relative group'>
        <input
          ref={inputRef}
          type="text"
          placeholder="What's your next move?"
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          className='w-full border-2 border-gray-100 rounded-2xl py-4 pl-6 pr-16 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-violet-400 transition-all shadow-sm'
        />
        <button 
          onClick={addTask} 
          className='absolute right-2 top-2 bottom-2 px-6 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-violet-200'
        >
          Add
        </button>
      </div>

      <div className='flex gap-3 mt-6 justify-center'>
        {categories.map(cat => (
          <button
            key={cat.name}
            onClick={() => setCategory(cat.name)}
            className={`rounded-full px-5 py-2 text-xs font-bold tracking-tight uppercase transition-all duration-300 ${
              category === cat.name 
              ? `${cat.active} shadow-md scale-105` 
              : `${cat.inactive} hover:bg-gray-300`
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Todo Items */}
      <ul className='mt-10 space-y-3'>
        {todos.map((todo) => (
          <li key={todo.id} className='group flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-violet-100 hover:bg-white hover:shadow-md transition-all duration-300'>
            <div className="relative flex items-center">
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTask(todo.id)}
                className='w-6 h-6 accent-violet-600 cursor-pointer rounded-lg'
              />
            </div>
            
            <span className={`flex-grow font-medium transition-all ${
              todo.done ? 'line-through text-gray-400 decoration-gray-400/50' : 'text-gray-700'
            }`}>
              {todo.text}
            </span>

            <span className={`text-[10px] font-bold px-2 py-1 rounded-md opacity-70 ${
              todo.category === 'work' ? 'bg-violet-100 text-violet-700' :
              todo.category === 'personal' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
            }`}>
              {todo.category}
            </span>

            <button
              onClick={() => deleteTask(todo.id)}
              className='opacity-0 group-hover:opacity-100 transition-all p-2 hover:bg-red-50 rounded-lg text-red-400 hover:text-red-600'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-400 italic">No tasks yet. Stay productive! 🚀</p>
        </div>
      )}
    </div>
  )
}
export default Maintodolist