import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter_localStotage from '../public/Counter_localStotage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter_localStotage/>.
    </>
  )
}

export default App
