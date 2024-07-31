"use client"
import { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { RiExpandDiagonalLine } from "react-icons/ri";
import { CiShare2 } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { DatePickerDemo } from './DatePicker';
import { CiCalendar } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { createTask, editTask } from '../services/taskService';
import { RootState } from '../store/store';

export default function CreateTaskModal({ handleModal, taskId }: { taskId: string,handleModal: () => void }) {
    const token = useSelector((state: RootState) => state.example.token);
    const [task_id, setTaskId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState<Date | null>(null);
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');

    useEffect(()=>{
        setTaskId(taskId)
    })

    async function handleSubmit(e : React.FormEvent){
        e.preventDefault();
        if(task_id === ''){
            const data = {
                title: title,
                description: description,
                dueDate: dueDate ? dueDate.toISOString() : null,
                priority: priority,
                status: status
            }
            const response = await createTask(token, data);
        }else{
            const data = {
                title: title,
                description: description,
                dueDate: dueDate ? dueDate.toISOString() : null,
                priority: priority,
                status: status
            }
            const response = await editTask(token, task_id, data);
        }
    }

    return (
        <div className="min-h-screen p-8 bg-inp-gray text-lg">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-5">
                    <button onClick={handleModal}>
                        <RxCross2 />
                    </button>
                    <RiExpandDiagonalLine />
                </div>
                <div className="flex flex-row items-center gap-5">
                    <div className="flex justify-center items-center gap-3">
                        <p>Share</p>
                        <CiShare2 />
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <p>Star</p>
                        <FaRegStar />
                    </div>
                </div>
            </div>

            <form className='flex gap-5 flex-col mt-5' onSubmit={(e)=> handleSubmit(e)}>
                <input type="text" placeholder="Title" className="text-5xl font-semibold bg-transparent"onChange={(e)=>{ e.preventDefault(); setTitle(e.target.value)}} />
                <table className='w-full'>
                    <tr>
                        <td><CiCalendar /> </td>
                        <td>Deadline</td>
                        <td> <DatePickerDemo  date={dueDate} setDate={setDueDate}/></td>
                    </tr>
                    <tr>
                        <td><CiCalendar /> </td>
                        <td>Status</td>
                        <td> 
                            <select onChange={(e)=>setStatus(e.target.value)} className='p-3 w-72 bg-inp-gray rounded-xl'>
                                <option className='p-6' value={"To do"} >To do</option>
                                <option className='p-6' value={"In progress"} >In Progress</option>
                                <option className='p-6' value={"Under Review"} >Under Review</option>
                                <option className='p-6' value={"Completed"}>Completed</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><CiCalendar /> </td>
                        <td>Priority</td>
                        <td> 
                            <select onChange={(e)=>setPriority(e.target.value)} className='p-3 w-72 bg-inp-gray rounded-xl'>
                                <option className='p-6' value={"High"} >High</option>
                                <option className='p-6' value={"Medium"} >Medium</option>
                                <option className='p-6' value={"Low"}>Low</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><CiCalendar /> </td>
                        <td>Description</td>
                        <td>
                            <input className='p-3 bg-inp-gray' placeholder='Write description here' onChange={(e)=>setDescription(e.target.value)}/>
                        </td>
                    </tr>
                </table>

                <button type='submit' className='bg-green-500 text-white p-3 rounded-xl'>Save</button>
            </form>

        </div>
    );

}