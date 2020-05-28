import React from 'react';
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component';

import { connect } from 'react-redux'
import { createStructedSelector } from 'reselect';
import { withRouter } from 'react-router-dom'
import {toggleCartHidden } from '../../redux/cart/cart.action'

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ?
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
                ))
                :
                <span className='empty-message' >your cart is empty</span>
            }            
        </div>
        <CustomButton onClick={() => {
            history.push('./checkout');
            dispatch(toggleCartHidden());
        }} >GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
}  )

export default withRouter(connect(mapStateToProps)(CartDropdown));