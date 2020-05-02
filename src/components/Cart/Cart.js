import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total  = Math.round(total+product.price);
    }

    let shipping = 0;
    if(total>35){
        shipping = 0;
    }else if(total>15){
        shipping = 4.99;
    }else if(total>0){
        shipping = 12.99;
    }

    let tax = Math.round(total/10); 

    return (
        <div>
            <h5>Order summery:</h5>
            <p>Items ordered: {cart.length} </p>
            <p>product price: {total}</p>
            <p>shipping cost: {shipping}</p>
            <p>tax & vat: {tax}</p>
            <p>Total price: {Math.round(total+shipping+tax)}</p>
        </div>
    );
};

export default Cart;
