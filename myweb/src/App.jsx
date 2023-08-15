import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headers from './header page/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
<Headers/>


  </div>
    </>
  )
}

export default App
