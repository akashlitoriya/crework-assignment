"use client"
import { useEffect } from "react"
import { TfiDownload } from "react-icons/tfi";
import Navigation from "./Navigation";

export default function MyProfile(){
    return (
        <div className="flex justify-between flex-col w-full h-full">
            <div className="p-3">
                {/* Profile  */}
                <div></div>
                {/* Navigation  */}
                <div className="w-full">
                    <Navigation />
                </div>
            </div>
            <div className="flex p-3 justify-center items-center gap-4 bg-inp-gray m-3 rounded-xl">
                <TfiDownload className="text-3xl"/>
                <div>
                    <h1 className="text-xl">Download the app</h1>
                    <p className="text-sm">Get the full experience</p>
                </div>
            </div>
        </div>
    )
}