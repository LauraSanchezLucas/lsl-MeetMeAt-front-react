import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './layout/home/Home'
import { Register } from './layout/register/Register'
import { Login } from './layout/login/Login'
import { NavBarComponent } from './components/navbar/NavbarComponent'



export const MainApp = () => {
  return (
    <div>
      <NavBarComponent/>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path= '/register' element={ <Register/> }/>
      <Route path= '/login' element={ <Login/> }/>
    </Routes>
    </div>
  )
}
