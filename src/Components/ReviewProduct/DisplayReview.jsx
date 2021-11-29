import React from "react";
import "./DisplayReview.css";
import { useHistory } from "react-router";

const DisplayReview = (props) => {

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
                {props.reviews.map((product) => {   
                    return (
                        <tbody>
                            <tr>                        
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>$ {product.price}.00</td>
                                <td>{product.category}</td>
                            </tr>              
                        </tbody>
                    )
                })}
            </table>
        </div>
    );
};

export default DisplayReview;