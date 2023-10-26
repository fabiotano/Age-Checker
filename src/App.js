import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {

  const [usersList, setUsersList] = useState([])

  const addUserHandler = (name, age) => {
    setUsersList( (prevUserList) => {
      return [...prevUserList, {name, age, id: Math.random().toString() }]
    })
  }

  console.log(usersList);

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
