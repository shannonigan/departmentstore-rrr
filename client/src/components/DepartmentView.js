import React from "react";
import axios from "axios";
import { Link }  from 'react-router-dom'
import { Segment, Header, Button, Container, Items, Card } from "semantic-ui-react";
import { HeaderText, } from "../styles/shared";
import styled, { keyframes } from "styled-components";


class DepartmentView extends React.Component {
  state = { department: {}, };


  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ department: res.data, });
      })
  };

  deleteDepartment(id) {
    axios.delete(`/api/departments/${id}`)
      .then( res => {
        this.props.history.push(`/departments`);
      })
      .catch( err => {
        console.log(err);
      })
  };


  render() {
    const { name, } = this.state.department;

    return (
       <div>
        <br/>
        <Header as={ HeaderText } fontSize="small">{ name } </Header>

        <Link to={`/departments/${this.props.match.params.id}/items`}>
          <EvButton style={{ marginLeft:"650px", }} >View Items</EvButton>
        </Link>
        
       
        <br/>
        <br/>
        <br/>
        <Link to={`/departments/${this.props.match.params.id}/edit`}>
          <EvButton>Edit</EvButton>
        </Link>
        <Link to={`/departments/`}>
          <EvButton>Back</EvButton>
        </Link>
        <DeleteButton onClick={() => this.deleteDepartment(this.props.match.params.id)} >
          Delete
        </DeleteButton>
       </div>
    );
  };
};

const Transparent = styled.div`
background: rgba(19, 64, 97, 0.4) !important;
`;

const EvButton = styled.button`
  background: rgba(20, 18, 51, 0.6);
  font-family: Arial, Helvetica, sans-serif;
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  margin-left: 10px;
  border-radius: 25px;

  &:hover {
    background: rgba(30, 85, 90, 0.87);
    transition: background 0.2s ease;
  }

`;


const DeleteButton = styled.button`
  background: rgba(14, 0, 88, 0.94);
  font-family: Arial, Helvetica, sans-serif;
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  margin-left: 1200px;
  margin-bottom: 20px;
  border-radius: 25px;

  &:hover {
    background: rgba(30, 85, 90, 0.87);
    transition: background 0.2s ease;
  }
  
`;



export default DepartmentView;