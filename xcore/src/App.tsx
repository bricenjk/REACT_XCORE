import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
  <div>
    <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
    </span>
  </div>
  <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    Hello World
  </p>
</div>
    </div>
  )
}

export default App
