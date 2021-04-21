import React from "react";
import {configure, shallow} from "enzyme";
import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import SignUp from "../authentication/SignUp";


configure({
   adapter: new Adapter()
});
describe("Testin <SignUp/> Component", () => {
   it("test if function is called onclick", () => {
      
      const wrapper = shallow(<SignUp/>)
   });
   chai.use(chaiEnzyme());
});