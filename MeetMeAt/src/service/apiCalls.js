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
