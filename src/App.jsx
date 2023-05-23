import { useState } from 'react'
import './App.css'

import NavMob from './components/mobile/NavMob'
import NavDesk from './components/desktop/NavDesk'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavMob />
      <NavDesk />
    </div>
  )
}

export default App
