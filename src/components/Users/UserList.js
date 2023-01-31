import React from "react";

import Card from "../UI/Card";
import "./UserList.css";

const UserList = (props) => {
  return (
    <Card className="user">
      <ul>
        {props.users.map((user) => (
          <li key={user.key}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
