import React from 'react';
import '../styles/ProductInfo.scss'

import addToCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
    return (
        <>
        <img src="https://images.pexels.com/photos/7900343/pexels-photo-7900343.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="porsche" />
        <div className="productInfo">
            <p>35,00</p>
            <p>porsche</p>
            <p>with its functional and practical interior, this refrigerator also fulfills a decorative function, adding perssonality and retro-vintage aesthetic to your kitchen or workplace</p>
            <button className="primary-button add-to-cart-button">
                <img src={addToCart} alt="add to cart" />
                Add to cart
            </button>
        </div>
        </>
    );
}

export default ProductInfo;