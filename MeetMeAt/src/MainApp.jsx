import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './layout/home/Home';
import { Register } from './layout/register/Register';
import { Login } from './layout/login/Login';
import { NavBarComponent } from './components/navbar/NavbarComponent';
import { ProfileUser } from './layout/profile/ProfileUser';
import { SeeAllAppointment } from './layout/user/Appointmnts/SeeAllAppointments';
import { BookAppointment } from './layout/user/BookAppointment';
import { CreateEventByAdmin } from './layout/eventLayout/CreateEventByAdmin';
import { CreateRole } from './layout/role/CreateRole';
import { SeeAllRoles } from './layout/role/SeeAllRoles';
import { Business } from './layout/business/business';
import { CreateBusiness } from './layout/business/CreateBusiness';
import { SeeAllUserByAdmin } from './layout/user/SeeAllUserByAdmin';
import { SeeAllAppointmentByAdmin } from './layout/appointment/SeeAllAppointmentByAdmin';
import { CreateAppointmentByAdmin } from './layout/appointment/CreateAppointmentByAdmin';
import { CreateEventByProfessional } from './layout/eventLayout/CreateEventByProfessional';
import { SeeAllAppointmentByProfessional } from './layout/appointment/AppointmentsByProfessional/SeeAllAppointmentByProfessional';
import { CreateUserByAdmin } from './layout/user/CreateUserByAdmin';
import { SeeEvents } from './layout/eventLayout/SeeEvents';
import { SeeAllEventsByProfessional } from './layout/eventLayout/SeeAllEventsByProfessional';
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
        <Route path='/create/appointment' element={<BookAppointment />} />
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
