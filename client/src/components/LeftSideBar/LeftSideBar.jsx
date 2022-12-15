import React from 'react';
import { NavLink } from 'react-router-dom';

import globe from '../../assets/Globe.svg'

import './LeftSideBar.css';

const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
        <nav className="side-nav">
            <NavLink to="/" className="side-nav-links" activeclassname="active">
                <p style={{paddingLeft: '10px'}}>Home</p>
            </NavLink>
            <div className="side-nav-div">
                <div><p>PUBLIC</p></div>
                <NavLink to="/Questions" className="side-nav-links" activeclassname="active">
                    <img src={globe} alt="Globe" />
                    <p>Questions</p>
                </NavLink>
                <NavLink to="/Tags" style={{paddingLeft: '30px'}}  className="side-nav-links" activeclassname="active">
                    <p>Tags</p>
                </NavLink>
                <NavLink to="/Users" style={{paddingLeft: '30px'}}   className="side-nav-links" activeclassname="active">
                    <p>Users</p>
                </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default LeftSideBar