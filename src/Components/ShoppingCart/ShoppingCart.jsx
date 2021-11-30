import React, {Fragment, useState, useEffect} from "react";
import "./ShoppingCart.css";
// import { useHistory } from "react-router";

const ShoppingCart = (props) => {

    const {cartProducts, setCartProducts } = useState([])

    useEffect(() => {
        let results = props.getCartProducts()
        setCartProducts(results)
    },[])

    // const { cartProducts } = props;

    const handleDelete = (prodId) => {
        // handle Delete here
        alert ("Deleting product : ", prodId)
        // add callback function as a refactor
    }

    return (
        <Fragment>
            <table className="table-container">
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Description </th>
                        <th> Quantity </th>
                        
                    </tr>
                </thead>
                {cartProducts.map((cart, index) => {   
                    return (
                        <tbody>
                            <tr key={index}>                        
                                {/* <td>{cart.UserId}</td> */}
                                <td>{cart.ProductId}</td>
                                <td>{cart.quantity}</td>
                                <td><button type="button" onClick={() => handleDelete(cart.ProductId)}>Remove</button></td>

                            </tr>              
                        </tbody>
                    )
                })}
            </table>
        </Fragment>
    );
};

export default ShoppingCart;