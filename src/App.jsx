import { useState } from 'react'

import NavMob from './components/mobile/NavMob'
import NavDropdown from './components/mobile/NavDropdown'
import NavDesk from './components/desktop/NavDesk.jsx'
import LadderMob from './components/mobile/content/LadderMob'
import LadderDesk from './components/desktop/content/LadderDesk'
import RegisterMob from './components/mobile/content/RegisterMob/RegisterMob.jsx'
import RegisterDesk from './components/desktop/content/RegisterDesk'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app" style={{position: 'absolute'}}>
      <NavMob />
      <NavDropdown />
      <NavDesk />
      <RegisterMob />
      <RegisterDesk />
      {/*<LadderMob /> */}
      {/*<LadderDesk /> */}
    </div>
  )
}

export default App
