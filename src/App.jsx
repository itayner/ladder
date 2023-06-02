import { useState } from 'react'
import './App.css'

import NavMob from './components/mobile/NavMob'
import NavDesk from './components/desktop/NavDesk'
import LadderMob from './components/mobile/content/LadderMob'
import LadderDesk from './components/desktop/content/LadderDesk'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavMob />
      <NavDesk />
      <LadderMob />
      <LadderDesk />
    </div>
  )
}

export default App
