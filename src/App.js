import React, {useState} from 'react'

import './App.css';

import AddUser from './Components/User/AddUser';

import UserList from './Components/User/UsersList';

function App() {
  const [usersList, setuserslist]=useState([])

  const addUserHandler=(uName,uAge)=>{
    setuserslist((prevuserslist)=>{
      return [...prevuserslist ,{name:uName, age:uAge , id:Math.random().toString()}]
    })
  }

  return (
    <div>
    <AddUser onAddUser={addUserHandler}/>
    <UserList users={usersList} />
    </div>
  )
  }
export default App;
