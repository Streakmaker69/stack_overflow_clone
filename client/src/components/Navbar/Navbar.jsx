import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import Avatar from '../../components/Avatar/Avatar';
import { setCurrentUser } from '../../actions/currentUser';

import logo from '../../assets/Logo.svg'
import search from '../../assets/Search.svg'

import './Navbar.css'

const Navbar = () => {

    var User = useSelector((state) => (state.currentUserReducer));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT'});
        navigate('/');
        dispatch(setCurrentUser(null));
    }

    useEffect(() => {
        const token = User?.token
        if(token){
            const decodedToken =  decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()){
                handleLogout();
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
    }, [dispatch]);


  return (
    <nav className="main-nav">
       <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
            <img src={logo} alt="logo"/>
        </Link>
        <Link to="/About" className="nav-item nav-btn">
            About
        </Link>
        <Link to="/Product" className="nav-item nav-btn">
            Products
        </Link>
        <Link to="/Team" className="nav-item nav-btn">
            For Teams
        </Link>
        <form className="nav-item">
            <input type="text" placeholder="Search ... " />
            <img src={search} alt="search" className="search-icon" />
        </form>
        {User === null ?
            <Link to="/Auth" className="nav-item nav-links">Login</Link> :
            <>
                <Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%"><Link to={`/Users/${User.message._id}`} style={{ color: "white", textDecoration: "none", fontFamily: "Arial"}}>{User.message.name.charAt(0).toUpperCase()}</Link></Avatar>
                <button className="nav-item nav-links" onClick={handleLogout}>Log Out</button>
            </>
        }
       </div>
    </nav>
  )
}

export default Navbar