import React, { useState } from "react";
import Header from "./components/heaader";
import Maintodolist from "./components/Maintodolist";
import { CountContext } from "./components/contextcount";

function App() {
  const [done, setDone] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ done, setDone, count, setCount }}>
      <div className="min-h-screen bg-[#0f0e17] px-4 py-10">
        <div className="max-w-xl mx-auto flex flex-col gap-6">
          <Header />
          <Maintodolist />
        </div>
      </div>
    </CountContext.Provider>
  );
}

export default App;