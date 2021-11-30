import React, {Fragment, useState, useEffect} from "react";
import "./ShoppingCart.css";
import axios from "axios";
import jwtDecode from "jwt-decode";
// import { useHistory } from "react-router";

const ShoppingCart = (props) => {

    // const {cartProducts, setCartProducts } = useState([])

    // useEffect((props) => {
    //     let results = props.getCartProducts()
    //     setCartProducts(results)
    // },[])

    // const { cartProducts } = props;

    const handleChange = async (productId) => {
        let token = localStorage.getItem("token")
        let user = jwtDecode(token);
        console.log(user)
        let deleteProduct = {
            UserId: user.id,
            productId: productId,
            quantity: 1
        }
        const response = await axios.delete('https://localhost:44394/api/ShoppingCart/', deleteProduct, {headers: {Authorization: "Bearer " + token}});
    }

    return (
        <Fragment>
            
            <table className="table-container">
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Description </th>
                        <th> Price </th>
                        <th> Quantity </th>
                        
                    </tr>
                </thead>
                {props.shoppingCart.map((cart) => {   
                    return (
                        
                        <tbody>
                            <tr >                   
                                <td>{cart.product.name}</td>
                                <td>{cart.product.description}</td>
                                <td>${cart.product.price}.00</td>
                                <td>{cart.quantity}</td>
                                <td><button type="button" onClick={() => handleChange(cart.product.id)}>Remove</button></td>

                            </tr>              
                        </tbody>
                    )
                })}
            </table>
        </Fragment>
    );
};

export default ShoppingCart;