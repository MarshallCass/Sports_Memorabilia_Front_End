import React from "react";
import "./ShoppingCart.css";
import { useHistory } from "react-router";

const ShoppingCart = (props) => {

    return (
        <div>
            <table className="table-container">
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Description </th>
                        <th> Price </th>
                        <th> Category </th>
                    </tr>
                </thead>
                {props.cartProducts.map((cart) => {   
                    return (
                        <tbody>
                            <tr>                        
                                <td>{cart.name}</td>
                                <td>{cart.description}</td>
                                <td>$ {cart.price}.00</td>
                                <td>{cart.category}</td>
                            </tr>              
                        </tbody>
                    )
                })}
            </table>
        </div>
    );
};

export default ShoppingCart;