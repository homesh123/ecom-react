import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({currentUser,hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="navs">
        <Link className="nav" to="/shop">Shop</Link>
        <Link className="nav" to="/contact">Contact</Link>
        {
            currentUser ?
            <div className="nav" onClick={() => auth.signOut()}>Sign Out</div>
            : 
            <Link className='nav' to='/signin'>Sign In</Link>
        }
                <CartIcon />

        </div>
        {
            hidden ? null : <CartDropdown /> 
        }
        
    </div>
)
/*
old code 

const mapStateToProps = (state) => ({
    currentUser:selectCurrentUser(state),
    hidden:selectCartHidden(state)
})

*/

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})


export default connect(mapStateToProps)(Header);