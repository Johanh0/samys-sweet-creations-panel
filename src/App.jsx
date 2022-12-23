import { useState } from 'react'
import Login from './pages/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login/>
    </div>
  )
}

export default App
