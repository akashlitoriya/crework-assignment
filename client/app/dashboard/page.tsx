"use client"
import { useSelector } from "react-redux";
import MyProfile from "../components/MyProfile";
import { RootState } from "../store/store";
import TaskBoard from "../components/TaskBoard";


export default function Dashboard() {
    const {token} = useSelector((state: RootState) => state.example);
    console.log(token);
    if(token === ''){
        return (
            <div className="w-screen min-h-screen flex justify-center items-center bg-gradient-to-b from-gra-purple to-white">
                <div className="px-20 py-14 bg-white rounded-xl text-3xl">
                    <h1>Access Denied</h1>
                    <p className="text-dark-blue text-lg text-center cursor-pointer" >Log in</p>
                </div>
                
            </div>
        )
    }
    return (
        <div className="w-screen min-h-screen grid grid-cols-10">
            {/* Profile Section  */}
            <div className="col-span-2 border-2 border-green-500">
                <MyProfile />
            </div>
            <div className="col-span-8 border-red-600 border-2">
                <h1>Task Board</h1>
                <TaskBoard />
            </div>


        </div>
    )
}