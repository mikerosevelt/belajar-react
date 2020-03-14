import React, { Component } from 'react';
import '../Product.css';
import Counter from './Counter';

class CardProduct extends Component {
    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/BSB.jpg" alt="" />
                </div>
                <p className="product-title">Dada Ayam Frozen Tanpa Tulang [1 Carton - 5 Pack x 1Kg]</p>
                <p className="product-price">Rp 240,000</p>
                <Counter />
            </div>
        );
    }
}

export default CardProduct;