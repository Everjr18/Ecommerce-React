import React from 'react'
import '@styles/ShoppingCartItem.scss'

const ShoppingCartItem = () => {
    return (
        <div className="ShoppingCartItem">
        <figure>
            <img src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="car" />
      </figure>
      <p>car</p>
      <p>$300,000</p>
    </div>
    );
}

export default ShoppingCartItem;