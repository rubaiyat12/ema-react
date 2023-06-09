import React from 'react';
import './Cart.css';



const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    for (let product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
        
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = (total + shipping + tax).toFixed(2);
    
    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <p>selected Item:{cart.length}</p>
            <p>Total Price:${ total}</p>
            <p>Total Shipping:${ shipping}</p>
            <p>Tax:${ tax}</p>
            <h5>Grand Total:${ grandTotal}</h5>
        </div>
    );
};

export default Cart;
