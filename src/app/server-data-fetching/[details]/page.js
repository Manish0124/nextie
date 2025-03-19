async function fetchUserDetails(currentId) {
  try {
    const apiResponse = await fetch(`https://dummyjson.com/users/${currentId}`);
    const result = await apiResponse.json();

    return result;
  } catch (error) {
    console.log(error);
  }
}

export default async function UserDetailsPage({ params }) {
  const userDetails = await fetchUserDetails(params.details);
  // console.log(params)
  return (
    <div>
      <p>user profile is here of {userDetails.firstName}</p>
      <p>
        {userDetails.firstName} : {userDetails.lastName}
      </p>
      <p>{userDetails.phone} </p>
      <p>{userDetails.bloodGroup} </p>
    </div>
  );
}
