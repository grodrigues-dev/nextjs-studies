import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = async () => {
    const res = await fetch('http://localhost:4000/dashboard')
    const data = await res.json()
    return data
}
 

function DashboardSWR() {
    const { data, error } = useSWR('dashboard', fetcher)
    
    if (error) return 'An eror has occured'
    if (!data) return 'Loading'

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Posts - {data.posts}</p>
            <p>Likes - {data.likes}</p>
            <p>Following - {data.following}</p>
            <p>Following - {data.likes}</p>
        </div>
    )
}

export default DashboardSWR;