import axios from "axios"
import { axiosInstance } from "../service/axios_instance"
import { HTTP_REST_URLS } from "../urls"
import { ActiveEnv, Envs } from "../env"

axios.defaults.baseURL = Envs[ActiveEnv].host;

export const getData = async (api_url) => {
    try {
        const responce = await axios.get(api_url)
        console.log('responce', responce);
        return responce
    } catch (err) {
        console.log('err', err);
    }
}

export const getCommonData = async (api_url, params) => {
    try {
        const responce = await axiosInstance.post(api_url, params)
        console.log('responce', responce);
        return responce
    } catch (err) {
        console.log('err', err);
    }
} 