import React from 'react';
import Item from './Item';

const CartPage = ({ items, history }) => (
  <div className="CartPage">
    <h2>Cart</h2>
    {items.length === 0 ? (
      <div>No items in your cart.</div>
    ) : (
      <>
        <ul>
          {items.map(item => (
            <Item key={item.id} item={item}>
              {item.count}
            </Item>
          ))}
        </ul>
        <div className="total">
          Total: $
          {items.reduce((total, item) => {
            return total + item.count * item.price;
          }, 0)}
        </div>
        <button
          onClick={() => {
            history.push({
              pathname: '/checkout'
            });
          }}
        >
          Checkout Now
        </button>
      </>
    )}
  </div>
);

export default CartPage;
