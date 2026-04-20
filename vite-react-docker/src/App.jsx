import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ padding: '2rem' }}>
        <h1>Vite + React + Docker (proximamente)</h1>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Incrementar
        </button>
      </div>
    </>
  )
}

export default App
