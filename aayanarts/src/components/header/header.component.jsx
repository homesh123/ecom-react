import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';

const Header = ( ) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="navs">
        <Link className="nav" to="/shop">Shop</Link>
        <Link className="nav" to="/contact">Contact</Link>
        </div>
    </div>
)

export default Header;