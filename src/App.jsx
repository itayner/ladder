import { useState } from 'react'

import NavMob from './components/mobile/NavMob'
import NavDesk from './components/desktop/NavDesk.jsx'
import LadderMob from './components/mobile/content/LadderMob'
import LadderDesk from './components/desktop/content/LadderDesk'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <NavMob />
      <NavDesk />
      <LadderMob />
      <LadderDesk />
    </div>
  )
}

export default App
