import { useState } from 'react'
import './App.css'

import NavMob from './components/mobile/NavMob'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavMob />
    </div>
  )
}

export default App
