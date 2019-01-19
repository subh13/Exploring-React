import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-249ea.firebaseio.com/'
});

export default instance;