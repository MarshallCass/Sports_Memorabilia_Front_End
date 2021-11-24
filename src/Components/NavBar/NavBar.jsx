import React from 'react';
import './NavBar.css';


function NavBar(props) {
    return (
    
    <div id="header" class="header">
        <div id="nav">
            <ul>
                <a href="#Home">Home</a>
                <a href="#BuyProducts">Buy Products</a>
                <a href="#SellProducts">Sell Products</a>
            </ul>
        </div>
    </div>
    )
}

export default NavBar