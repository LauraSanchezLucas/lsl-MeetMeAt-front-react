import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './layout/home/Home'
import { Register } from './layout/register/Register'
import { Login } from './layout/login/Login'
import { NavBarComponent } from './components/navbar/NavbarComponent'
import { ProfileUser } from './layout/profile/ProfileUser'
import { Event } from './layout/eventLayout/Event'
import { BookAppointment } from './layout/user/BookAppointment'




export const MainApp = () => {
  return (
    <div>
      <NavBarComponent/>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path= '/register' element={ <Register/> }/>
      <Route path= '/login' element={ <Login/> }/>
      <Route path= '/profile' element={ <ProfileUser/> }/>
      <Route path= '/all/events' element={ <Event/> }/>
      <Route path= '/create/appointment' element={ <BookAppointment/> }/>
    </Routes>
    </div>
  )
}
