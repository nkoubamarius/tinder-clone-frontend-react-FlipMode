import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-reactjs.herokuapp.com'
})

export default instance;