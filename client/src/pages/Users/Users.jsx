import React from 'react';

import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import UserList from './UserList'

import './Users.css';

const Users = () => {

  return (
    <div className="home-container-1">
      <LeftSideBar />
      <div className="home-container-2" style={{marginTop: '30px'}}>
        <h1 style={{fontWeight: '500'}}>Users</h1>
        <UserList />
      </div>
    </div>
  )
}

export default Users