import axios from 'axios'
import {Dispatch} from "react";

const defaultOptions = {
    withCredentials: true,
    headers: {
        Accept: 'application/json',
    }
}
const axiosInstance = axios.create(defaultOptions);

export const tableAPI = {
    getMessage() {
        return axios.get<any[]>(`https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json`)
            .then(res => res.data)
    }
}

