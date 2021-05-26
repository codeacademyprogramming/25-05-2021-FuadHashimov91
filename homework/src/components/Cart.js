import React from 'react'
import { connect } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from '../stores/actions';

const Cart = ({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart }) => {
    let ListCart = [];
    let TotalCart = 0;
    Object.keys(items.Carts).forEach((item) => {
        TotalCart += items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    const TotalPrice = (price, count) => {
        return Number(price * count).toLocaleString('en-US');
    }
    return (
        <div className="row mt-5">
            <div className="col-md-12">
                <table className="table">
                    <thead className='thead-dark'>
                        <tr>
                            <th>Delete</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>-</th>
                            <th>Total</th>
                            <th>+</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListCart.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <td><button className="btn btn-danger" onClick={() => DeleteCart(key)}>X</button></td>
                                    <td>{item.name}</td>
                                    <td><img src={item.image} style={{ width: '100px', height: '80px' }} alt="Image" /></td>
                                    <td>{item.price} $</td>
                                    <td>
                                        <span className="btn btn-primary" style={{ margin: '2px' }} onClick={() => DecreaseQuantity(key)}>-</span>
                                    </td>
                                    <td>   <span className="btn btn-info">{item.quantity}</span></td>
                                    <td>    <span className="btn btn-primary" style={{ margin: '2px' }} onClick={() => IncreaseQuantity(key)}>+</span>
                                    </td>
                                    <td>{TotalPrice(item.price, item.quantity)} $</td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td colSpan="5">Total Carts</td>
                            <td>{Number(TotalCart).toLocaleString('en-US')} $</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    //  console.log(state)
    return {
        items: state._todoProduct
    }
}

export default connect(mapStateToProps, { IncreaseQuantity, DecreaseQuantity, DeleteCart })(Cart)
