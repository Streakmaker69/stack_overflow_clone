import React from 'react';
import { useSelector } from 'react-redux';

import User from './User';

import './Users.css';

const UserList = () => {

  const users = useSelector((state) => state.usersReducer);

  return (
    <div className="user-list-container">
      {
        users.map((user) => (
          <User key={user?._id} user={user}  />
        ))
      }
    </div>
  )
}

export default UserList