import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/photos/';

const instance = axios.create({
  baseURL,
});

export const request = ({ url, handleSuccess, handleError }) => {
  return instance.get(url).then(handleSuccess).catch(handleError);
};
