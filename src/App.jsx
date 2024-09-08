import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen w-screen flex flex-col justify-center items-center text-center'>
    <h1 className='text-4xl'>Vite + React + Tailwind</h1>
      <div className="card">
        <button className='text-2xl' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-xl">
        Click on the Vite and React logos to learn more
      </p>

    </div>
    </>
  )
}

export default App
