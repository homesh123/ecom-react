import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { withRouter } from 'react-router';
import './cart-dropdown.styles.scss';
import { toogleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >

            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) :
                (
                    <span className="empty-message" >Your cart is empty</span>
                )}


        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toogleCartHidden());
        }}>Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));