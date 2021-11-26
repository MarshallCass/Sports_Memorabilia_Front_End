import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
    
   <nav>
            <ul>
                <Link to ='/Login'>
                    <li>Login</li>
                </Link>
                <Link to ='/Register'>
                    <li>Register</li>
                </Link>
                <Link to ='/Home'>
                    <li>Home</li>
                </Link>
                <Link to ='/Products'>
                    <li>Products</li>
                </Link>
                <Link to ='/ShoppingCart'>
                    <li>Shopping Cart</li>
                </Link>
            </ul>
    </nav>
    )
}

export default NavBar