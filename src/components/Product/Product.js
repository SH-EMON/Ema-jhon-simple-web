import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const { img, name, seller, wholePrice, stock, } = props.product;
    return (
        <div className="product-wrapper">
            <div className="left-side">
                <img src={img} alt="" />
            </div>
            <div className="right-side">
                <h3 className="p-title">{props.product.name}</h3>
                <p><small>by: {seller}</small></p>
                <h4>${wholePrice}</h4>
                <p><small>only {stock} left in stock -order soon</small></p>
                
                <button className="shoping-btn" onClick={() => props.addProductHandler(props.product)}> 
                <FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>

            </div>

        </div>
    );
};

export default Product;