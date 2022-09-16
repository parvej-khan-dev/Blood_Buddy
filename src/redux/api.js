import axios from "axios";

export const searchUserApi = async (query) => {
  await axios.get(
    `https://blood-blood-api1.herokuapp.com/api/users/?q=${query}`
  );
};

export const loadUsersApi = async () =>
  await axios.get(`https://blood-blood-api1.herokuapp.com/api/users/`);
