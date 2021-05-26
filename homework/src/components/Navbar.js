import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar mt-5">
                <ul className="nav">
                    <li className="nav-item" ><Link to="/" className="nav-link active">Products</Link></li>
                    <li className="nav-item"><Link to="/carts" className="nav-link">Carts : {this.props.numberCart}</Link></li>
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        numberCart: state._todoProduct.numberCart
    }
}

export default connect(mapStateToProps, null)(Navbar)
