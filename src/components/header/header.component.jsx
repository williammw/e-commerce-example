import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

import {ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import {HeaderContainer, LogoContainer, OptionDiv, OptionsContainer, OptionLink} from './header.styles';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer >
            <OptionLink  to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink  to='/contact'>
                CONTACT
            </OptionLink>
            {
                currentUser ? 
                <OptionDiv  onClick={()=>auth.signOut()}>SIGN OUT</OptionDiv>
                :
                <OptionLink  to='/signin'>SIGN IN</OptionLink>            
            }
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown/> }

        
    </HeaderContainer>
)

// const mapStateToProps = (state) => ({
//     currentUser : selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// })

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden:selectCartHidden,
})

export default connect(mapStateToProps)(Header);