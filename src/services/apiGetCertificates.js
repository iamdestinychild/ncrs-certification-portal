import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function fetchCertificates() {
  const response = await axios.get(`${BASE_URL}/certification/`, {withCredentials: true});
  console.log(response.data)
  return response?.data;
}
