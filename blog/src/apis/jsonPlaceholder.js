import axios from 'axios';

export default axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com' // specifiy endpoint of base URL
});
