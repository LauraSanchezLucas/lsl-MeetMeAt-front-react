import axios from 'axios';

const root = "http://localhost:3000"


export const registerMe = async (body) => {
    return await axios.post(`${root}/register`, body);
};
