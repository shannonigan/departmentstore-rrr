import React from "react";
import axios from "axios";
import { Link }  from 'react-router-dom'
import { Segment, Header, Button, Icon, } from "semantic-ui-react";
import { HeaderText, } from "../styles/shared";
import styled, { keyframes } from "styled-components";



class ItemView extends React.Component {
  state = { item: {}, };


  componentDidMount() {
    
    axios.get(`/api/departments/${this.props.match.params.department_id}/items/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ item: res.data, });
      })
      .catch(err =>{
        console.log(err)})
  };

  deleteItem(id) {
    axios.delete(`/api/departments/${this.props.match.params.department_id}/items/${id}`)
      .then( res => {
        this.props.history.push(`/departments/${this.props.match.params.department_id}/items`);
      })
      .catch( err => {
        console.log(err);
      })
  };

 


  render() {
    const { name, price } = this.state.item;

    return (
       <div>
        <Segment as={Transparent}>
        <Header as={ HeaderText } fontSize="large">{ name }</Header>
        <Header as={ HeaderText } fontSize="small">${ price }</Header>
        </Segment>
        <br/>
        <br/>
       

        <br/>
        <Link to={`/departments/:department_id/items/${this.props.match.params.id}/edit`}>
          <EvButton> Edit </EvButton>
        </Link>
        <EvButton onClick={this.props.history.goBack}> Back </EvButton>
        <DeleteButton onClick={() => this.deleteItem(this.props.match.params.id)}>
          Delete
        </DeleteButton>
       </div>
    );
  };
};


const Transparent = styled.div`
background: rgba(54, 128, 121, 0.87) !important;
`;

const EvButton = styled.button`
  background: rgba(7, 73, 156, 0.6);
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


export default ItemView;