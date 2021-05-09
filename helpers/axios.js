import axios from 'axios';

const baseURL = `https://superheroapi.com/api/${process.env.ACCESS_TOKEN}/`;

export default axios.create({
  baseURL
});