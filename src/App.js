import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [userList, setUserslist] = useState([])
  
  const addUserHandler = (uName, uAge) =>{
    setUserslist((preUserList) =>{
      return [... preUserList, {name: uName, age: uAge}]
    })
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
