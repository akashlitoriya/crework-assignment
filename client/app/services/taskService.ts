import {backendUrl, apiConnector} from '../services/apiConnector';
import {setTodoList, setDoneList, setInProgressList,setUnderReviewList} from '../store/taskSlice'
import { AppDispatch } from '../store/store';

interface Task{
    title: string,
    description: string | null,
    status: string,
    dueDate: string | null,
}
export const createTask = async(token:string | null, data: Task)=>{
    
        try{
            const url = `${backendUrl}/api/v1/task/create`
            const headers = {
                Authorization: `Bearer ${token}`
            }
            const response = await apiConnector(url, 'POST', data, headers, '')
            console.log("TASK CREATED : ",response)
            return response;
        }catch(err){
            console.log("ERROR IN CREATING TASK : ",err)
        }
    
}

export const editTask = async(token: string | null, taskId: string, data: Task)=>{
    
        try{
            const url = `${backendUrl}/api/v1/task/${taskId}`
            const headers = {
                Authorization: `Bearer ${token}`
            }
            const response = await apiConnector(url, 'POST', data, headers, '')
            console.log("TASK EDITED : ",response)

        }catch(err){
            console.log("ERROR IN EDITING TASK : ",err)
        }
    
}


export const getTodoTask = async(token:string | null) => {
    
        try{
            const url = `${backendUrl}/api/v1/task/todo`
            const headers = {
                Authorization: `Bearer ${token}`
            }
            const response = await apiConnector(url, 'GET', {}, headers, '')
            console.log("TODO TASKS : ",response)
            return response.data;
        }catch(err){
            console.log("ERROR IN GETTING TODO TASKS : ",err)

        }
    
}

export const getDoneTask = async(token:string | null) => {
    
        try{
            const url = `${backendUrl}/api/v1/task/completed`
            const headers = {
                Authorization: `Bearer ${token}`
            }
            const response = await apiConnector(url, 'GET', {}, headers, '')
            console.log("TODO TASKS : ",response)
            return response.data;
        }catch(err){
            console.log("ERROR IN GETTING TODO TASKS : ",err)
            
        }
    
}

export const getInProgressTask = async(token:string| null) => {

        try{
            const url = `${backendUrl}/api/v1/task/in-progress`
            const headers = {
                Authorization: `Bearer ${token}`
            }
            const response = await apiConnector(url, 'GET', {}, headers, '')
            console.log("TODO TASKS : ",response)
            return response.data
        }catch(err){
            console.log("ERROR IN GETTING TODO TASKS : ",err)
            
        }
    
}

export const getUnderReviewTask = async(token:string| null) => {
    
        try{
            const url = `${backendUrl}/api/v1/task/under-review`
            const headers = {
                Authorization: `Bearer ${token}`
            }
            const response = await apiConnector(url, 'GET', {}, headers, '')
            console.log("TODO TASKS : ",response)
            return response.data
        }catch(err){
            console.log("ERROR IN GETTING TODO TASKS : ",err)
            
        }
    
}