import axios from 'axios';

const axiosInstance = axios.create({})

type headerType ={
    Authorization: string

}

export const apiConnector = (url:string, method:string, data:object,headers:headerType, params:string) =>{
    return axiosInstance({
        url: `${url}`,
        method: `${method}`,
        data: data? data: null,
        headers: headers,
        params: params? params: null
    })
}

export const backendUrl = "https://crework-assignment-uy6s.onrender.com"