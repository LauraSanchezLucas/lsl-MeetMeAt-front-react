import axios from 'axios';

const root = "http://localhost:3000"

// REGISTER
export const registerMe = async (body) => {
  return await axios.post(`${root}/register`, body);
};
// LOGIN
export const logMe = async (body) => {
  return await axios.post(`${root}/login`, body);
};
// ----------------------------------USERS-----------------------------------------------------
// SEE PROFILE BY USER
export const getUserProfile = async (token) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return await axios.get(`${root}/profile`, config);
};
// SEE ALL USERS BY ADMIN
export const getAllUsers = async (token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.get(`${root}/allusers`, config);
};
// REGISTER USER BY ADMIN
export const registerByAdmin = async (body, token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.post(`${root}/newuseradmin`, body, config);
};
// UPDATE PROFILE USER
export const updateProfileUser = async (body, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.put(`${root}/update/profile`, body, config);
};
// DELETE USER BY ADMIN
export const deleteUserByAdmin = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.delete(`${root}/cancelluser/${id}`, config);
};
// UPDATE USER BY ADMIN
export const updateUserByAdmin = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.put(`${root}/updateuserprofile/${id}`, config);
};
// ------------------------------------EVENTS--------------------------------------------------
// GET ALL EVENTS ALL
export const getAllEvents = async () => {
  return await axios.get(`${root}/all/events`);
};
// CREATE EVENTS BY ADMIN
export const createEvents = async (body, token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.post(`${root}/newevent`, body, config);
};
// CREATE EVENTS BY PROFESIONAL
export const createEventsByProfessional = async (body, token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.post(`${root}/neweventprofessional`, body, config);
};
// SEE MY OWN EVENTS BY PROFESSIONAL
export const getAllEventsProfessional = async (token) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return await axios.get(`${root}/all/events/professional`, config);
};
// DELETE EVENTS BY PROFESSIONAL
export const deleteEventByProfessional = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.delete(`${root}/deleteeventprofessi/${id}`, config);
};
// DELETE EVENTS BY ADMIN
export const deleteEventByAdmin = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.delete(`${root}/deleteevent/${id}`, config);
};
// -----------------------------------APPOINTMENTS--------------------------------------------
// CREATE APPOINTMENTS BY USER
export const getAppointment = async (body, token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.post(`${root}/create/appointment`, body, config);
};
// SEE ALL APPOINTMENTS BY ADMIN
export const getAllAppointmentsAdmin = async (token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.get(`${root}/getappointment`, config);
};
// CREATE APPOINTMENTS BY ADMIN
export const createAppointmentAdmin = async (body, token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.post(`${root}/newappointment`, body, config);
};
// SEE ALL APPOINTMENTS BY PROFESSIONAL
export const getAllAppointmentsProfessional = async (token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.get(`${root}/getappointmentbyprofess`, config);
};
// SEE ALL APPOINTMENTS BY USER
export const seeAppointment = async (token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.get(`${root}/appointment`, config);
};
// DELETE APPOINTMENTS BY USER
export const deleteAppointmentUser = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.delete(`${root}/cancelappointment/${id}`, config);
};
// DELETE APPOINTMENTS BY ADMIN
export const deleteAppointmentById = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.delete(`${root}/deleteappointment/${id}`, config);
};
// ----------------------------------ROLES-----------------------------------------------------
// CREATE ROLES BY ADMIN
export const createRole = async (body, token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.post(`${root}/newrole`, body, config);
};
// SEE ALL ROLES BY ADMIN
export const getAllRoles = async (token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.get(`${root}/role`, config);
};
// UPDATE ROLES ADMIN
export const updateRoleByAdmin = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.put(`${root}/updateuserrole/${id}`, id, config);
};
// ---------------------------------BUSINESS-------------------------------------------------
// SEE ALL BUSINESSES BY ADMIN
export const getAllBusinesses = async () => {
  return await axios.get(`${root}/business`);
};
// CREATE BUSINESSES BY ADMIN
export const createBusinesses = async (body, token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.post(`${root}/newbusiness`, body, config);
};
// DELETE BUSINESSES BY ADMIN
export const deleteBusinessById = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.delete(`${root}/deletebusiness/${id}`, config);
};