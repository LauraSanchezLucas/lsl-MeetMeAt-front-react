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

// SEE PROFILE BY USER
export const getUserProfile = async (token) => {
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    return await axios.get(`${root}/profile`, config);
};
// GET ALL EVENTS ALL
export const getAllEvents = async () => {

    return await axios.get(`${root}/all/events`);
};
// CREATE APPOINTMENT BY USER
export const getAppointment = async (body, token) => {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return await axios.post(`${root}/create/appointment`, body, config);
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

  // CREATE EVENT BY ADMIN
export const createEvents = async (body, token) => {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return await axios.post(`${root}/newevent`, body, config);
};
  // CREATE EVENT BY PROFESIONAL
  export const createEventsByProfessional = async (body, token) => {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return await axios.post(`${root}/neweventprofessional`, body, config);
};
  // CREATE ROLE BY ADMIN
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

// SEE ALL BUSINESS BY ADMIN
export const getAllBusinesses = async () => {

  return await axios.get(`${root}/business`);
};
  // CREATE BUSINESS BY ADMIN
  export const createBusinesses = async (body, token) => {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return await axios.post(`${root}/newbusiness`, body, config);
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
// SEE ALL APPOINTMENTS BY ADMIN
export const getAllAppointmentsAdmin = async (token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.get(`${root}/getappointment`, config);
};
  // CREATE APPOINTMENT BY ADMIN
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
// REGISTER USER BY ADMIN
export const registerByAdmin = async (body, token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.post(`${root}/newuseradmin`, body, config);
};

// DELETE APPOINTMENT BY USER

export const deleteAppointmentUser = async(id, token) =>{
  const config = {
    headers:{
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.delete(`${root}/cancelappointment/${id}`, config);
};

// UPDATE PROFILE USER
export const updateProfileUser = async(body,token) =>{
  const config = {
    headers:{
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.put(`${root}/update/profile`, body, config);
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

// DELETE EVENT BY PROFESSIONAL

export const deleteEventByProfessional = async(id, token) =>{
  const config = {
    headers:{
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.delete(`${root}/deleteeventprofessi/${id}`, config);
};
// DELETE EVENT BY ADMIN

export const deleteEventByAdmin= async(id, token) =>{
  const config = {
    headers:{
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.delete(`${root}/deleteevent/${id}`, config);
};

// DELETE BUSINESS BY ADMIN

export const deleteBusinessById= async(id, token) =>{
  const config = {
    headers:{
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.delete(`${root}/deletebusiness/${id}`, config);
};
// DELETE USER BY ADMIN

export const deleteUserByAdmin = async(id, token) =>{
  const config = {
    headers:{
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.delete(`${root}/cancelluser/${id}`, config);
};
// DELETE APPOINTMENT BY ADMIN

export const deleteAppointmentById = async(id, token) =>{
  const config = {
    headers:{
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.delete(`${root}/deleteappointment/${id}`, config);
};

// UPDATE ROLE ADMIN
export const updateRoleByAdmin = async(id,token) =>{
  const config = {
    headers:{
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.put(`${root}/updateuserrole/${id}`, id, config);
};