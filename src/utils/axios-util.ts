import Axios from 'axios';
import { repository } from '../dependecy-injection';

const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: localStorage.getItem('jwt'),
    'Content-type': 'application/json'
  }
});

export const axiosRequest = async () => {
  const { firebaseAdminRepository } = repository;
  const token = await firebaseAdminRepository!.getFirebaseToken();

  return Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'x-access-token': token,
      'Content-type': 'application/json'
    }
  });
};

export default axiosInstance;
