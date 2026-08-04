import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Timer from './Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{
        position: 'fixed',
        right: '20%',
        bottom: '20%'
      }}>
        <Timer />
      </div>
    </>
  )
}

export default App
