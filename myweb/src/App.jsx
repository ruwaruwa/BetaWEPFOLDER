import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headers from './header page/Header'
import { Route, Routes } from 'react-router-dom'
import Homelist from './home page/Homelist';
import Homepa from './Menu page/Homepa'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
<Headers/>
<Routes>
  <Route path='/' element={<h6>websites</h6>}></Route>
  <Route>
     <Route path='/home' element={<Homepa/>}></Route>
  {/* <Route path='Header' element={<Headers/>}></Route> */}
  </Route>
 
</Routes>

  </div>
    </>
  )
}

export default App
