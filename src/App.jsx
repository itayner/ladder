import { useState } from 'react'

import NavMob from './components/mobile/NavMob'
import NavDesk from './components/desktop/NavDesk.jsx'
import LadderMob from './components/mobile/content/LadderMob'
import LadderDesk from './components/desktop/content/LadderDesk'
import RegisterMob from './components/mobile/content/RegisterMob/RegisterMob.jsx'
import RegisterDesk from './components/desktop/content/RegisterDesk'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <NavMob />
      <NavDesk />
      <RegisterMob />
      <RegisterDesk />
      {/*<LadderMob /> */}
      {/*<LadderDesk /> */}
    </div>
  )
}

export default App
