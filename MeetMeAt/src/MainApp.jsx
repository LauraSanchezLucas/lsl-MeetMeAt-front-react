import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBarComponent } from './components/navbar/NavbarComponent';
import { FooterComponent } from './components/footer/FooterComponent';
import { Home } from './layout/home/Home';
import { Register } from './layout/register/Register';
import { Login } from './layout/login/Login';
import { ProfileUser } from './layout/profile/ProfileUser';
import { UpdateProfile } from './layout/profile/UpdateProfileUser/UpdateProfile';
import { CreateUserByAdmin } from './layout/user/CreateUserByAdmin/CreateUserByAdmin';
import { SeeAllUserByAdmin } from './layout/user/SeeAllUsersByAdmin/SeeAllUserByAdmin';
import { SeeAllAppointment } from './layout/appointment/byUser/SeeAllAppointments';
import { SeeAllAppointmentByProfessional } from './layout/appointment/byProfessional/SeeAllAppointmentByProfessional';
import { SeeAllAppointmentByAdmin } from './layout/appointment/byAdmin/SeeAllAppointmentByAdmin';
import { CreateAppointmentByAdmin } from './layout/appointment/byAdmin/CreateAppointmentByAdmin';
import { SeeEventsUser } from './layout/eventLayout/byUser/SeeEventsUser';
import { CreateEventByAdmin } from './layout/eventLayout/byAdmin/CreateEvents/CreateEventByAdmin';
import { CreateEventByProfessional } from './layout/eventLayout/byProfessional/createEvent/CreateEventByProfessional';
import { SeeEvents } from './layout/eventLayout/byAdmin/SeeEvents/SeeEvents';
import { SeeAllEventsByProfessional } from './layout/eventLayout/byProfessional/seeAllEvents/SeeAllEventsByProfessional';
import { CreateRole } from './layout/role/CreateRole/CreateRole';
import { SeeAllRoles } from './layout/role/SeeRole/SeeAllRoles';
import { Business } from './layout/business/SeeBusiness/Business';
import { CreateBusiness } from './layout/business/CreateBusiness/CreateBusiness';



export const MainApp = () => {
  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<ProfileUser />} />
        <Route path='/update/profile' element={<UpdateProfile/>} />
        <Route path='/allusers' element={<SeeAllUserByAdmin />} />
        <Route path='/newuseradmin' element={<CreateUserByAdmin />} />
        <Route path='/all/events' element={<SeeEvents />} />
        <Route path='/newevent' element={<CreateEventByAdmin />} />
        <Route path='/create/appointment' element={<SeeEventsUser />} />
        <Route path='/neweventprofessional' element={<CreateEventByProfessional />} />
        <Route path='/all/events/professional' element={<SeeAllEventsByProfessional />} />
        <Route path='/appointment' element={<SeeAllAppointment />} />
        <Route path='/getappointment' element={<SeeAllAppointmentByAdmin />} />
        <Route path='/newappointment' element={<CreateAppointmentByAdmin />} />
        <Route path='/getappointmentbyprofess' element={<SeeAllAppointmentByProfessional />} />
        <Route path='/newrole' element={<CreateRole />} />
        <Route path='/role' element={<SeeAllRoles />} />
        <Route path='/business' element={<Business />} />
        <Route path='/newbusiness' element={<CreateBusiness />} />
      </Routes>
      <FooterComponent/>
    </div>
  )
}
