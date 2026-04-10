import React, { useState } from "react";
import Heaader from "./components/heaader";
import Maintodolist from "./components/Maintodolist";
import { CountContext } from "./components/contextcount";

function App() {
  const [done, setDone] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ done, setDone, count, setCount }}>
      <Heaader />
      <Maintodolist />
    </CountContext.Provider>
  );
}

export default App;