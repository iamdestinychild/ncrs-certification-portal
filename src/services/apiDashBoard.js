import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;



export async function getDashBoard() {
  // try{
  //     const response = await axios.get(`${BASE_URL}/user/dashboard/`, {
  //         withCredentials: true,
  //       });
  //       console.log(response.data);
  //       return response?.data;
  //     }
  //     catch(err){
  //         console.log(err.message)
  //     }


  const response = await axios.get(`${BASE_URL}/user/dashboard/`, {
    withCredentials: true,
  });
  return response?.data;
}
