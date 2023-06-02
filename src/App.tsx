import { useState } from 'react'
import './styles/_main.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
    </>
  )
}

export default App
