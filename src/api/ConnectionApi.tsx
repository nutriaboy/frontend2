import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

//'https://backend1-production-d1de.up.railway.app/api' 
const baseURL = 'https://backend1-production-d1de.up.railway.app/api';

const connectionApi = axios.create({ baseURL });

connectionApi.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
        if (token) {
          config.headers!['x-token'] = token;
        }
        return config;
      }
);

export default connectionApi;