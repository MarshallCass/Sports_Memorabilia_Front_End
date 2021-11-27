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
                <div className= "search-bar">    
                    <form >
                        <input type="text" name="searchbar" placeholder="Search" id="typeSearchBarX" className="form-control form-control-sm" />
                        <div>
                        <button-nav className="btn btn-outline-light btn-lg" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button-nav>
                        </div>
                    </form>
                </div>    
            </ul>
    </nav>
    )
}

export default NavBar