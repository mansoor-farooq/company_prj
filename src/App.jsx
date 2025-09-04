import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AddRoutes from './routes/add_routes'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <AddRoutes />

      </BrowserRouter>

      {/* <h1 class="text-3xl font-bold underline shadow-2xl text-white border-4 border-black hover:bg-gray-400">
        Hello world!
      </h1> */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

    </>
  )
}

export default App
