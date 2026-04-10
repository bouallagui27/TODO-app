import React from 'react'
import { useContext } from 'react'
import { CountContext } from './contextcount'   
const Heaader = () => {
  const { count } = useContext(CountContext);
  return (
  <div className="flex justify-between items-center px-8 py-5 bg-gradient-to-r from-violet-600 to-indigo-700 rounded-b-3xl shadow-md">

  <h1 className="text-white text-xl font-bold tracking-wide">
    Cine Vault <span className="text-violet-200">Todo</span>
  </h1>

  <div className="bg-white/20 px-4 py-1 rounded-full text-white text-sm">
    {count} done
  </div>

</div>
  )
}

export default Heaader