import React, { useContext } from "react";
import { CountContext } from "./contextcount";

const Header = () => {
  const { count, done } = useContext(CountContext);
  const total = count;
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4.5 9.5l3 3 6-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <h1 className="text-white text-lg font-semibold leading-tight tracking-tight">Taskr</h1>
          <p className="text-[#6e6d7a] text-xs leading-none">
            {total === 0 ? "no tasks yet" : `${done} of ${total} done`}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {total > 0 && (
          <div className="flex items-center gap-2">
            <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-violet-500 rounded-full transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
            <span className="text-[#6e6d7a] text-xs font-mono">{percent}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
