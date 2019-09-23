import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import styled from 'styled-components';



ReactDOM.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>,
 
  document.getElementById('root')
);

// const Page = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   background: blue;
//   `