import React from 'react';
import { Header, } from "semantic-ui-react";
import { HeaderText, } from "../styles/shared";
import styled, { keyframes } from "styled-components";



class About extends React.Component {
  render() {
    return (
      <>
      <br/>
      <br/>
      <Header as={ HeaderText } fontSize="large"> ~ The Store of Oddities ~ </Header>
      </>
    );
  };
};

export default About;