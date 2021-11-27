import React, { Component } from 'react';
import './CreateProduct.css';

class CreateProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productname:"",
            productdescription:"",
            productprice:"",
            category:"",
         };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const product = {
            productname: this.state.productname,
            productdescription: this.state.productdescription,
            productprice:this.state.productprice,
            category: this.state.category,
        };
        this.props.addNewProduct(product);
        this.setState({
            productname: "",
            productdescription: "",
            productprice: "",
            category: "",
        });
    }

render() {
    return (
        <div class="card position-absolute end-0 translate-middle-" style={{width: "15%"}}>
            <form onSubmit={this.handleSubmit} className="form-addProduct">
                <ul class="list-group list-group-flush">
                    <input type="text" name = "productname" id="typeProductNameX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.productname} />
                    <label class="form-label fs-6 fw-bold" for="typeProductNameX">Product Name</label>
                    <input type="text" name = "productdescription" id="typeProductDescriptionX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.productdescription} />
                    <label class="form-label fs-6 fw-bold" for="typeProductDescriptionX">Product Description</label>
                    <input type="text" name = "productprice" id="typeProductPriceX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.productprice} />
                    <label class="form-label fs-6 fw-bold" for="typeProductPriceX">Product Price</label>
                    <input type="text" name = "category" id="typeCategoryX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.category} />
                    <label class="form-label fs-6 fw-bold" for="typeCategoryX">Category</label>
                
                <div class="card-footer">
                    <button class="btn btn-outline-light btn-lg" type="submit">Add Product</button>
                </div>
                </ul>
                </form>
            </div>

    )
}
}

export default CreateProduct;
