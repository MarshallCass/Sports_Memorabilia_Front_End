import React from "react";
import axios from "axios";
import "./DisplayProducts.css";
import jwtDecode from "jwt-decode";

const DisplayProducts = (props) => {



     const handleChange = async (productId) => {
         let token = localStorage.getItem("token")
         let user = jwtDecode(token);
         console.log(user)
         let NewThing = {
             UserId: user.id,
             productId: productId,
             quantity: 1
         }
         const response = await axios.post('https://localhost:44394/api/ShoppingCart/', NewThing, {headers: {Authorization: "Bearer " + token}});
//         handle add to cart
//         addProductCart = async () => {
//           
//             this.setState({
//                 shoppingCart: response.data
//         })  
// }

        alert ("Add product to Cart: ")
        // add callback function as a refactor
}

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
                {props.products.map((product) => {   
                    return (
                        <tbody>
                            <tr>                        
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>$ {product.price}.00</td>
                                <td>{product.category}</td>
                                <td><button class="btn btn-outline-light btn-lg" type="button" onClick={() => handleChange(product.id)}>Add to Cart</button></td>

                            </tr>              
                        </tbody>
                    )
                })}
            </table>
        </div>
    );
};

export default DisplayProducts;