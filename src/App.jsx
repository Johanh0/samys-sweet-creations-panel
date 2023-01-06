import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from './pages/Login/Login'
// import Panel from './pages/Panel/Panel'
import Home from './pages/Panel/Panel-Pages/Home'
import Clients from './pages/Panel/Panel-Pages/Clients'
import Orders from './pages/Panel/Panel-Pages/Orders'
import Calendar from './pages/Panel/Panel-Pages/Calendar'
import Notes from './pages/Panel/Panel-Pages/Notes'

import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>

      <Route path='/admin'>
        <Route path='/admin/login' element={<Login/>}/>

        <Route  element={<Sidebar/>}>
          <Route path='/admin/home' element={<Home/>}/>
          <Route path='/admin/clients' element={<Clients/>}/>
          <Route path='/admin/orders' element={<Orders/>}/>
          <Route path='/admin/calendar' element={<Calendar/>}/>
          <Route path='/admin/notes' element={<Notes/>}/>
        </Route>
      </Route>


      {/* <Route path='/panel' element={<Panel/>}/> */}

      <Route path='*' element={<h1>Not Found!</h1>}/>
    </Routes>
  )
}

export default App
