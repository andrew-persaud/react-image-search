import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers : {
        Authorization : 'Client-ID 3fac3847326a3355f9dc4a51fe757d9de723d60ace3401445fcb584da8f174c7'
    }
});