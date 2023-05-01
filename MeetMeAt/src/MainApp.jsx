import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './layout/home/Home';
import { Register } from './layout/register/Register';
import { Login } from './layout/login/Login';
import { NavBarComponent } from './components/navbar/NavbarComponent';
import { ProfileUser } from './layout/profile/ProfileUser';
import { SeeAllAppointment } from './layout/appointment/byUser/SeeAllAppointments';
import { SeeEventsUser } from './layout/eventLayout/byUser/SeeEventsUser';
import { CreateEventByAdmin } from './layout/eventLayout/byAdmin/CreateEventByAdmin';
import { CreateRole } from './layout/role/CreateRole';
import { SeeAllRoles } from './layout/role/SeeAllRoles';
import { Business } from './layout/business/business';
import { CreateBusiness } from './layout/business/CreateBusiness';
import { SeeAllUserByAdmin } from './layout/user/SeeAllUserByAdmin';
import { SeeAllAppointmentByAdmin } from './layout/appointment/byAdmin/SeeAllAppointmentByAdmin';
import { CreateAppointmentByAdmin } from './layout/appointment/byAdmin/CreateAppointmentByAdmin';
import { CreateEventByProfessional } from './layout/eventLayout/byProfessional/createEvent/CreateEventByProfessional';
import { SeeAllAppointmentByProfessional } from './layout/appointment/byProfessional/SeeAllAppointmentByProfessional';
import { CreateUserByAdmin } from './layout/user/CreateUserByAdmin';
import { SeeEvents } from './layout/eventLayout/byAdmin/SeeEvents';
import { SeeAllEventsByProfessional } from './layout/eventLayout/byProfessional/seeAllEvents/SeeAllEventsByProfessional';
// import { UpdateUserByAdmin } from './layout/user/UpdateUserByAdmin';
import { FooterComponent } from './components/footer/FooterComponent';
import { UpdateProfile } from './layout/profile/UpdateProfileUser/UpdateProfile';




export const MainApp = () => {
  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<ProfileUser />} />
        <Route path='/all/events' element={<SeeEvents />} />
        <Route path='/create/appointment' element={<SeeEventsUser />} />
        <Route path='/appointment' element={<SeeAllAppointment />} />
        <Route path='/newevent' element={<CreateEventByAdmin />} />
        <Route path='/newrole' element={<CreateRole />} />
        <Route path='/role' element={<SeeAllRoles />} />
        <Route path='/business' element={<Business />} />
        <Route path='/newbusiness' element={<CreateBusiness />} />
        <Route path='/allusers' element={<SeeAllUserByAdmin />} />
        <Route path='/getappointment' element={<SeeAllAppointmentByAdmin />} />
        <Route path='/newappointment' element={<CreateAppointmentByAdmin />} />
        <Route path='/neweventprofessional' element={<CreateEventByProfessional />} />
        <Route path='/getappointmentbyprofess' element={<SeeAllAppointmentByProfessional />} />
        <Route path='/newuseradmin' element={<CreateUserByAdmin />} />
        <Route path='/update/profile' element={<UpdateProfile/>} />
        <Route path='/all/events/professional' element={<SeeAllEventsByProfessional />} />
        {/* <Route path='/alvaro' element={<UpdateUserByAdmin />} /> */}
      </Routes>
      <FooterComponent/>
    </div>
  )
}
