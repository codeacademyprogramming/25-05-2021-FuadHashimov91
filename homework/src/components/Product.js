import React, { Component } from 'react'
import { productsRequest, AddCart } from '../stores/actions'
import { connect } from 'react-redux';

export class Product extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.productsRequest();
    }

    render() {
        const { _products } = this.props._products;
        if (_products.length > 0) {

            return (
                <div className="row" style={{ marginTop: '10px' }}>
                    <div className="col-md-12">
                        <div className="row">
                            {
                                _products.map((item, index) => (
                                    <div key={index} className="col-3 mt-2 mb-5">
                                        <div className="product-box">
                                            <figure className="product-image">
                                                <img src={item.image} alt="Image" />
                                            </figure>
                                            <div className="product-name">
                                                <span className="productName">Name: {item.name}</span>
                                                <br />
                                                <span className="productSize" >Category: {item.category}</span>
                                            </div>
                                            <p className="product-detail">Price: {item.price}</p>

                                            <br />
                                            <button className="btn btn-primary" style={{ cursor: 'pointer', color: 'black' }} onClick={() => this.props.AddCart(item)}>Add Cart</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="row">
                <h2>Loading...!</h2>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        _products: state._todoProduct,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        productsRequest: () => dispatch(productsRequest()),
        AddCart: item => dispatch(AddCart(item))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)



