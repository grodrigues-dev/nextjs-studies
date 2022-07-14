import { useEffect, useState } from "react";

function Dashboard() {
    const [isLoading, setisLoading] = useState(true)
    const [dashboardData, setDashBoardData] = useState([])

    useEffect(() => {
        async function fetchDashBoard() {
            const res = await fetch('http://localhost:4000/dashboard')
            const data = await res.json()
            setDashBoardData(data);
            setisLoading(false);
        }
        fetchDashBoard()
    }, [])

    if (isLoading) { 
        return <h2>loading</h2>
    } 

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Posts - {dashboardData.posts}</p>
            <p>Likes - {dashboardData.likes}</p>
            <p>Following - {dashboardData.following}</p>
            <p>Following - {dashboardData.likes}</p>
        </div>
    )
}

export default Dashboard;