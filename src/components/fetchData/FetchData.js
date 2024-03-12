import React, { useEffect, useState } from 'react'
import UserTable from './UserTable';


export default function FetchData() {

    const [users, setUsers] = useState(null);

    const getUsersData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/users');
            const obj = await response.json();
            const data = obj.users;
            if (data && data.length > 0) {
                setUsers(data.slice(0, 5));
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        getUsersData();
    }, []);

  return (
    
     <div style={{ paddingTop: '60px', paddingLeft: '15%', paddingRight: '15%' }} id="Callback1">

        <h1> Fetch Data </h1>

        <div className=''>
                {!users?<h2 style={{color:'red'}}>Loading</h2>:<UserTable users={users}></UserTable>}
             
            </div>
   
    </div>
      
    
  )
}
