import React from 'react';
import { Header, } from "semantic-ui-react";
import { HeaderText, } from "../styles/shared";
import styled, { keyframes } from "styled-components";



class About extends React.Component {
  render() {
    return (
      <Header as={ HeaderText } fontSize="large"> ~ Odds and Ends and Everything in Between ~ </Header>
    
    );
  };
};

export default About;