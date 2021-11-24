import React from "react";
import "./DisplayProducts.css";
import { useHistory } from "react-router";

const DisplayProducts = (props) => {
    // const history = useHistory();
    console.log("from DisplayProducts: ", props);

    // const handleDetails = (product) => {
    //     history.push({
    //         pathname: "/productDetails",
    //         state: {
    //             productForDisplay: product,
    //         },
    //     });
    // };
    return (
        <table className="table-container">
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Description </th>
                    <th> Price </th>
                    <th> Category </th>
                </tr>
            </thead>
            <tbody>
                {props.products.map((product) => {
                    return (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table> 
    );
};

export default DisplayProducts;