import React from 'react';
import { Header, } from "semantic-ui-react";
import { HeaderText, } from "../styles/shared";
import styled, { keyframes } from "styled-components";



class Home extends React.Component {
  render() {
    return (
      <Header as={ HeaderText } fontSize="large"> Shannonigans Shop </Header>
    
    );
  };
};

export default Home;