import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UseContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext)
    console.log(user);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <span>{user?.email}</span>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user?.email ?
                    <button onClick={signOutUser} className="signOut-btn">Sign Out</button>
                    : <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up </Link>
                    </>
                }
            </div>
        </nav>
    );
};

export default Header;