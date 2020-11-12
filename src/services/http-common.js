import axios from 'axios';

export default axios.create({
    //baseURL: 'http://localhost:3000/',
    baseURL: 'https://restcodewebapplication.azurewebsites.net/api',
    headers: {
        'Content-type': 'application/json'
    }
});

