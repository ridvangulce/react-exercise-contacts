import { useEffect, useState } from 'react'
import axios from "axios";

function Api() {

    const [users, setUsers] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data))
            .catch(e=>console.log(e))
            .finally(()=>setIsLoading(false))
    }, [])
    return (
        <div>
            {isLoading &&<div>Loading...</div>}
            <h1>Users</h1>
            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    )
}

export default Api