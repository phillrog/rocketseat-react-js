import axios from 'axios';

const api = axios.create({
        baseURL: 'http://app-product-api.herokuapp.com/api'
});

export default api;

