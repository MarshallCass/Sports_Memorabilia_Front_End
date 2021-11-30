import React from "react";
import "./ShoppingCart.css";
import { useHistory } from "react-router";

const ShoppingCart = (props) => {
    
    const { cartProducts } = props;

    const handleDelete = (prodId) => {
        // handle Delete here
        alert ("Deleting product : ", prodId)
        // add callback function as a refactor
    }

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
                {cartProducts.map((cart) => {   
                    return (
                        <tbody>
                            <tr>                        
                                {/* <td>{cart.UserId}</td> */}
                                <td>{cart.ProductId}</td>
                                <td>{cart.quantity}</td>
                                <td><button type="button" onClick={() => handleDelete(cart.ProductId)}>Remove</button></td>

                            </tr>              
                        </tbody>
                    )
                })} */}
            </table>
        </div>
    );
};

export default ShoppingCart;