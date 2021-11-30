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
                        <th> Quantity </th>
                        
                    </tr>
                </thead>
                {props.cartProducts.map((cart) => {   
                    return (
                        <tbody>
                            <tr>                        
                                <td>{cart.UserId}</td>
                                <td>{cart.ProductId}</td>
                                <td>{cart.quantity}</td>
                                {/* <td><button type="button" onClick={() => props.deleteCartProduct(ProductId)}>Remove</button></td> */}

                            </tr>              
                        </tbody>
                    )
                })}
            </table>
        </div>
    );
};

export default ShoppingCart;