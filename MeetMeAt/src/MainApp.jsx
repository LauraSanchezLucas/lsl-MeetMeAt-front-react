import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './layout/home/Home'
import { Register } from './layout/register/Register'
import { Login } from './layout/login/Login'
import { NavBarComponent } from './components/navbar/NavbarComponent'
import { ProfileUser } from './layout/profile/ProfileUser'
import { Event } from './layout/eventLayout/Event'
import { SeeAllAppointment } from './layout/user/SeeAllAppointments'
import { BookAppointment } from './layout/user/BookAppointment'
import { CreateEventByAdmin } from './layout/eventLayout/CreateEventByAdmin'
import { CreateRole } from './layout/role/CreateRole'
import { SeeAllRoles } from './layout/role/SeeAllRoles'
import { Business } from './layout/business/business'




export const MainApp = () => {
  return (
    <div>
      <NavBarComponent/>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path= '/register' element={ <Register/> }/>
      <Route path= '/login' element={ <Login/> }/>
      <Route path= '/profile' element={ <ProfileUser/> }/>
      {/* eliminar la ruta de todos los eventos porque ya sale al reservar y cambiarle el nombre en el navbar de new appointment a todos los eventos */}
      <Route path= '/all/events' element={ <Event/> }/>
      <Route path= '/create/appointment' element={ <BookAppointment/> }/>
      <Route path= '/appointment' element={ <SeeAllAppointment/> }/>
      <Route path= '/newevent' element={ <CreateEventByAdmin/> }/>
      <Route path= '/newrole' element={ <CreateRole/> }/>
      <Route path= '/role' element={ <SeeAllRoles/> }/>
      <Route path= '/business' element={ <Business/> }/>
    </Routes>
    </div>
  )
}
