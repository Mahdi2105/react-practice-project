import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  // const [user, setUser] = useState(users);

  const [userList, setUserList] = useState([]);

  // The name of the parameters here don't matter, the variables that use the
  // addUserHandler via onAddUser names are what are entered into there
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, key: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
}

export default App;
