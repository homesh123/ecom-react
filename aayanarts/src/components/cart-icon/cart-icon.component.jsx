import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({toogleCartHidden,itemCount}) => (
    <div className='cart-icon' onClick={toogleCartHidden}>
        <ShoppingIcon />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
});

const mapStateToProps =(state) => ({
    itemCount : selectCartItemsCount(state)
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);