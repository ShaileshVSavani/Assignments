import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormLocalStorage from './FormLocalStorage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormLocalStorage/>
    </>
  )
}

export default App
