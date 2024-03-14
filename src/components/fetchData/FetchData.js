import React, { useEffect, useState } from 'react'
import UserTable from './UserTable';
import useFetch from '../CustomHook/useFetch';




export default function FetchData() {

    const [users, setUsers] = useState(null);
    const dataFetch = useFetch("https://dummyjson.com/users");

  
    useEffect(() => {
        const [data] = dataFetch;
        if(data) setUsers(data.users);
    }, [dataFetch]);

  return (
    
     <div style={{ paddingTop: '60px', paddingLeft: '15%', paddingRight: '15%' }} id="Callback1">

        <h1> Fetch Data </h1>

        <div className=''>
                {!users?<h2 style={{color:'red'}}>Loading</h2>:<UserTable users={users}></UserTable>}
             
            </div>
   
    </div>
      
    
  )
}
