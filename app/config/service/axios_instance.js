import axios from "axios";
import { ToastAndroid } from "react-native";
import { ActiveEnv, Envs } from "../env";

export const axiosInstance = axios.create({
    baseURL: Envs[ActiveEnv].host,
    headers: {
        'Clientapikey': 'defaultKey',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
});

axiosInstance.interceptors.request.use(
    function (config) {
        config.params = {
             ...config.params,
            access_token: 'f24196a2-b1b2-4817-b6f1-d52935027e5a',
        };
        console.log('config', config);
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (!error.response) {
            ToastAndroid.show('Something went Wrong !', ToastAndroid.SHORT);
            return Promise.reject(error);
        }
        else if (error.response.status === 401) {
            ToastAndroid.show('Unotherized Access !', ToastAndroid.SHORT);
            return Promise.reject(error);
        }
        return Promise.reject(error);
    }
);


// import axios from 'axios';
// import { Alert, Platform } from 'react-native';
// import { apiURL } from '../config';

// import { useDispatch, useSelector } from 'react-redux';
// import helper from './helper.js';
// import IsEmpty from '../utils/IsEmpty';
// import { store, persistor } from '../store/index';

// var qs = require('qs');

// class axiosService {
//     constructor() {
//         let service = axios.create({
//             baseURL: apiURL,
//             Accept: 'application/json',
//             headers: { 'SportName': '' },
//             'Content-Type': 'application/json',
//         });
//         service.interceptors.request.use(async function (config) {

//             config.params = { access_token: 'get token from store' };
//             return config;
//         });

//         service.interceptors.response.use(
//             function (response) {
//                 return response;
//             },
//             async error => {
//                 console.warn("error interceptors", error);
//                 let originalRequest = error.config;
//                 if (!error.response) {
//                     return helper.errorToast(`Something went wrong`);
//                 } else if (
//                     !IsEmpty(error.response) &&
//                     !IsEmpty(error.response.data) &&
//                     !IsEmpty(error.response.data.message)
//                 ) {
//                     return helper.errorToast(error.response.data.message);
//                 } else if (error.response.status === 401) {
//                     let { dispatch } = store;
//                     let refresh_token = ''
//                 }
//             },
//         );
//         this.service = service;
//     }
// }

// export default new axiosService();