import axios from "axios";

export async function fetchCertificates() {
  const response = await axios.get("http://localhost:3000/certificates");
  return response?.data;
}
