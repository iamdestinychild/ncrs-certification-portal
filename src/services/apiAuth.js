import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function signUpUser(userData) {
  console.log(userData);
  const response = await axios.post(`${BASE_URL}/auth/registration`, userData, {
    withCredentials: true,
  });
  return response.data;
}

export async function logInUser(userDetails) {
  const response = await axios.post(`${BASE_URL}/auth/login`, userDetails, {
    withCredentials: true,
  });
  return response.data;
}

export async function logOutUser() {
  const response = await axios.delete(`${BASE_URL}/auth/logout`, {
    withCredentials: true,
  });

  return response;
}
