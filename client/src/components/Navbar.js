import React from "react";
import { Link, } from  "react-router-dom";
import { Menu, } from "semantic-ui-react";
import styled, { keyframes } from "styled-components";


const Navbar = () => (
  <NavContainer>
    <Menu color="blue">
      <Link to="/">
        <Menu.Item>
          Home
        </Menu.Item>
      </Link>
      <Link to="/about">
        <Menu.Item>
          About
        </Menu.Item>
      </Link>
      <Link to="/departments">
        <Menu.Item>
          Departments
        </Menu.Item>
      </Link>
    </Menu>
  </NavContainer>
);


const NavContainer = styled.div`
  padding-top: 25px;
  padding-left: 25px;
  padding-right: 25px;
`;


export default Navbar;

