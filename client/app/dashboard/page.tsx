"use client"
import { useState } from "react";
import { useSelector } from "react-redux";
import MyProfile from "../components/MyProfile";
import { RootState } from "../store/store";
import TaskBoard from "../components/TaskBoard";
import CreateTaskModal from "../components/CreateTaskModal";


export default function Dashboard() {
    const {token} = useSelector((state: RootState) => state.example);
    const [modal, setModal] = useState(false);
    console.log(token);
    
    return (
        <div className="w-screen overflow-hidden min-h-screen grid grid-cols-10 relative">
            {/* Profile Section  */}
            <div className="col-span-2 border-2 border-green-500">
                <MyProfile />
            </div>
            <div className="col-span-8 border-red-600 border-2">
                <h1>Task Board</h1>
                <button onClick={()=>setModal(true)}>Create Task</button>
                <div className="w-full">
                    <TaskBoard />
                </div>
            </div>

            {
                modal && (
                    <div className={`absolute w-2/5 min-h-screen top-0 right-0 transform transition-all duration-500 ${modal ? 'translate-x-0': 'translate-x-[1000px]'} `}>
                        <CreateTaskModal taskId="" handleModal={()=>setModal(false)}/>
                    </div>
                )
            }
        </div>
    )
}