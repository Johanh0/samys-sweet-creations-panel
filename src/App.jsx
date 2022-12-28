import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from './pages/Login/Login'
// import Panel from './pages/Panel/Panel'
import Home from './pages/Panel/Panel-Pages/Home'
import Clients from './pages/Panel/Panel-Pages/Clients'
import Orders from './pages/Panel/Panel-Pages/Orders'
import Notes from './pages/Panel/Panel-Pages/Notes'

import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route  element={<Sidebar/>}>
        {/* <Route index element={<Panel/>}/> */}
        <Route path='/home' element={<Home/>}/>
        <Route path='/clients' element={<Clients/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/calendar' element={<Notes/>}/>
        <Route path='/notes' element={<Notes/>}/>
      </Route>


      {/* <Route path='/panel' element={<Panel/>}/> */}

      <Route path='*' element={<h1>Not Found!</h1>}/>
    </Routes>
  )
}

export default App
