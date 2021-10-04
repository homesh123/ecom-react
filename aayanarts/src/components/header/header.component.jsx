import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

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
            hidden? null : <CartDropdown /> 
        }
        
    </div>
)

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);