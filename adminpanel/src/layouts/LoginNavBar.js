import React from 'react';
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from '../styles/NavbarElements';
import Logo from '../images/adminlogo.png';

const loginNavBar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
        <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
          <NavLink to='/signUp' activeStyle>
            SignUp
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default loginNavBar;