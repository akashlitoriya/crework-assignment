import MyProfile from "../components/MyProfile";


export default function Dashboard() {

    return (
        <div className="w-screen min-h-screen grid grid-cols-10">
            {/* Profile Section  */}
            <div className="col-span-2 border-2 border-green-500">
                <MyProfile />
            </div>
            <div className="col-span-8 border-red-600 border-2"></div>


        </div>
    )
}