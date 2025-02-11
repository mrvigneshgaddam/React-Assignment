import React from 'react'

const UserList = () => {

    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
      ];
  return (
   <>
   <h1>User List</h1>
   <ol>
        {users.map((x)=>
        <li key={x.id}> 
        id: {x.id} Name: {x.name} Age: {x.age}
        </li>
        )}
    </ol>
   </>
  )
}

export default UserList