import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID g-w02_JyLsFntwDwMWjgRxr5dZGsu7S28QYFs2W5qU8'
    }
});