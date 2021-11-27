import React, { Component } from 'react';
import './CreateProduct.css';

class NewProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productname:"",
            productdescription:"",
            productprice:"",
            productcategory:"",
         };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            productName: this.state.productName,
            productDescription: this.state.productDescription,
            productPrice:this.state.productPrice,
            category: this.state.category,
        };
        this.props.addNewProduct();
        this.setState({
            productName: "",
            productDescription: "",
            productPrice: "",
            category: "",
        });
    }

render() {
    return (
        <div class="card position-absolute end-0 translate-middle-" style={{width: "15%"}}>
            <form onSubmit={this.handleSubmit} className="form-addProduct">
                <ul class="list-group list-group-flush">
                    <input type="text" name = "productname" id="typeProductNameX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.productName} />
                    <label class="form-label fs-6 fw-bold" for="typeProductNameX">Product Name</label>
                    <input type="text" name = "productdescription" id="typeProductDescriptionX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.productDescription} />
                    <label class="form-label fs-6 fw-bold" for="typeProductDescriptionX">Product Description</label>
                    <input type="text" name = "productprice" id="typeProductPriceX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.productPrice} />
                    <label class="form-label fs-6 fw-bold" for="typeProductPriceX">Product Price</label>
                    <input type="text" name = "category" id="typeProductCategoryX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.productCategory} />
                    <label class="form-label fs-6 fw-bold" for="typeProductCategoryX">Category</label>
                
                <div class="card-footer">
                    <button class="btn btn-outline-light btn-lg" type="submit">Add Product</button>
                </div>
                </ul>
                </form>
            </div>

    )
}
}

export default NewProduct;
