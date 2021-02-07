import axios from 'axios';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 1/2/2021.
 */

const instance = axios.create({
    //  production
    baseURL: 'https://weather.msc-ais.site/'
    //  development
    // baseURL: 'http://localhost:9000/'
});

export default instance;