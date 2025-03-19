import Link from "next/link";

async function fetchUser(){
    try {
       const apiResponse = await fetch('https://dummyjson.com/users');
       const result = await apiResponse.json();
       console.log('API Response:', result); // Add this line to log the API response
       return result.users;
    } catch (error) {
       console.log('Error fetching users:', error); // Update this line to provide more context
       return [];
    }
}

export default async function ServerSideDataFetching() {
  const listOfUsers = await fetchUser();

  if(!listOfUsers || listOfUsers.length === 0){
    return <div>No user found</div>
  }

  return (
    <div>
      <h1>list of users</h1>
      <ul>
        {
          listOfUsers && listOfUsers.length > 0 ?   
            listOfUsers.map(user => (
              <li className="cursor-pointer p-3" key={user.id}>
                <Link href={`/server-data-fetching/${user.id}`}>{user.firstName}</Link>
              </li>
            ))
          : null
        }
      </ul>
    </div>
  )
}

