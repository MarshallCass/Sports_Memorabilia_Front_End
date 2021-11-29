import React, { Component } from 'react';
import './CreateProduct.css';

class CreateProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"",
            description:"",
            price:"",
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
            name: this.state.name,
            description: this.state.description,
            price:this.state.price,
            category: this.state.category,
        };
        this.props.addNewProduct(product);
        this.setState({
            name: "",
            description: "",
            price: 0,
            category: "",
        });
    }

render() {
    return (
        <div class="card position-absolute end-0 translate-middle-" style={{width: "15%"}}>
        {console.log("CreateProduct props: ", this.props)}
            <form onSubmit={this.handleSubmit} className="form-addProduct">
                <ul class="list-group list-group-flush">
                    <input type="text" name = "name" id="typeProductNameX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.name} />
                    <label class="form-label fs-6 fw-bold" for="typeProductNameX">Product Name</label>
                    <input type="text" name = "description" id="typeProductDescriptionX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.description} />
                    <label class="form-label fs-6 fw-bold" for="typeProductDescriptionX">Product Description</label>
                    <input type="text" name = "price" id="typeProductPriceX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.price} />
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
