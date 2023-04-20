import axios from 'axios';

const root = "http://localhost:3000"


export const registerMe = async (body) => {
    return await axios.post(`${root}/register`, body);
};

export const logMe = async (body) => {
    return await axios.post(`${root}/login`, body);
};

export const getUserProfile = async (token) => {
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    return await axios.get(`${root}/profile`, config);
};


export const getAllEvents = async () => {

    return await axios.get(`${root}/all/events`);
  }
