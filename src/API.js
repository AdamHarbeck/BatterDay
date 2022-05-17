import axios from 'axios';

const API = axios.create({
  baseURL: process.env.DATABASE_URL || 'http://localhost:4000',
});

export default API;
