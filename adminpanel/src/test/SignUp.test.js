/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
import React from "react";
import { configure, shallow } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import SignUp from "../authentication/SignUp";
import Login from "../authentication/Login";
import logoImage from "../images/adminlogo.png";
import Image from "../authentication/Login";
import { Container, CssBaseline, Typography, Button, Grid, Link, makeStyles, Card, CardContent } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

configure({
   adapter: new Adapter()
});
describe("Testin <SignUp/> Component", () => {

   // check if a certain image has the right source
   it('should have the image source...', () => {
      const wrapper = shallow(<SignUp />)
      // eslint-disable-next-line jest/valid-expect
      expect(wrapper.find('img').prop("src")).to.equal(logoImage);

   });





   it('should have a login button pressent in the login page', function () {
      const wrapper = shallow(<SignUp />);
      expect(wrapper.find(Button)).to.have.length(1);
   });



   //because the values of login and password are empty the button should be disabled
   it('should disable submit button on submit click', () => {
      const wrapper = shallow(<Login />);
      const submitButton = wrapper.find(Button);

      //checking boolean property 
      expect(submitButton.prop('disabled')).to.be.true;
   });


 


   chai.use(chaiEnzyme());
});

