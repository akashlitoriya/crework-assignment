
import { IoHomeOutline,IoSettingsOutline,IoPeopleOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { GoCodeSquare } from "react-icons/go";
export default function Navigation() {
    return (
        <div className="w-full">
            <ul className="text-lg text-sec-text">
                <li className="flex gap-2 items-center p-2 hover:bg-inp-gray transition-all duration-150 rounded-lg"><span><IoHomeOutline /></span>Home</li>
                <li className="flex gap-2 items-center p-2 hover:bg-inp-gray transition-all duration-150 rounded-lg"><span><IoSettingsOutline /></span>Setting</li>
                <li className="flex gap-2 items-center p-2 hover:bg-inp-gray transition-all duration-150 rounded-lg"><span><BsGraphUp /></span>Analytics</li>
                <li className="flex gap-2 items-center p-2 hover:bg-inp-gray transition-all duration-150 rounded-lg"><span><IoPeopleOutline /></span>Teams</li>
                <li className="flex gap-2 items-center p-2 hover:bg-inp-gray transition-all duration-150 rounded-lg"><span><GoCodeSquare /></span>Board</li>
                
            </ul>
        </div>
    )
}