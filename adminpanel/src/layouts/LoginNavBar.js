import React from 'react';
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from '../styles/NavbarElements';
import Logo from '../images/adminlogo.png';

const loginNavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={Logo} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/signUp' activeStyle>
            SignUp
          </NavLink>
          <NavLink to='/resetPassword' activeStyle>
            Reset Password
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default loginNavBar;