import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function fetchCertificates() {
  const response = await axios.get(`${BASE_URL}/certification/`, {
    withCredentials: true,
  });
  return response?.data;
}

export async function addCertificatesApi(certificate) {
  const response = await axios.post(
    `${BASE_URL}/certification/add-certificate`,
    certificate,
    { withCredentials: true }
  );
  return response?.data;
}

export async function deleteCertificateApi(id) {
  const response = await axios.delete(
    `${BASE_URL}/certification/remove-certificate/${id}`,
    { withCredentials: true }
  );
  return response?.data;
}

export async function suspendCertificateApi(id) {
  
}