import axios from 'axios';

const comboFlash = axios.create({
  baseURL: 'https://api-comboflash.adveloz.me/api/',
  // baseURL: 'http://localhost:9000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default comboFlash;
