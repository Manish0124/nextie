
'use client'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

// import React, { useEffect, useState } from 'react'

//using client side we we fetching data 


export default function ClientSideDataFetching() {

    //  const[loading,setLoading] = useState(false);
    //  const[users,setUsers]= useState([]);

    const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher)

    if (error) {
      return <h1>{error}</h1>
    }

    if (isLoading) {
      return(
        <h3 className='font-extrabold text-3xl ' >Loading users! please wait </h3>
      )
     
    }


    // async function fetchListOfUsers(){


     

    //  try {
    //   setLoading(true);
    //    const response = await fetch('https://dummyjson.com/users');
    //    const result = await response.json();

    //    if (result?.users) {
    //       setUsers(result.users)
    //       setLoading(false)

    //    }
    //   }
 
    //     catch(error) {
    //     console.log(error)
    //     setUsers([]);
    //     setLoading(false);
    //  }
    // }

    //  useEffect(() => {
      
    //   fetchListOfUsers();
       
    //  }, [])
    // }

  

    

  return (
    <div>
      <h1>client side data fetching </h1>
      <ul>
        {data&& data?.users&& data.users.length>0 ? 
        
        data?.users.map(user=>(
          <li className=' pl-3.5 mt-5 cursor-pointer' key={user.id}  >{user.firstName}{user.lastName}</li>
        ))       
        : null
        
        
        }
        </ul>
    </div>
  );
}

