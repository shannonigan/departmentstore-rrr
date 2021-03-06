import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Header, Card, } from "semantic-ui-react";
import { HeaderText, } from "../styles/shared";
import styled, { keyframes } from "styled-components";




class Items extends React.Component {
  state = { items: [], };

  componentDidMount() {
    // const { department_id } = this.props.match.params.id

    axios.get(`/api/departments/${this.props.match.params.department_id}/items`)
    .then ( res => {
      debugger
      this.setState({ items: res.data, });
    })
    .catch ( err => {
      debugger
      console.log("error caught");
    })

  };

  

  renderItems = () => {
    const { items, } = this.state;
    
    if (items.length <= 0)
      return <Header as="h2"> No Items </Header>
      
    return items.map( item => (

      <StyledCard key={item.id}>
        <Card.Content>
          <Card.Header>{ item.name }</Card.Header>
          <Card.Meta>${item.price}</Card.Meta>
          <Link to={`/departments/${this.props.match.params.department_id}/items/${item.id}`}>
          <ViewButton> View </ViewButton>
          </Link>
        </Card.Content>
        {/* <Card.Content extra>
        </Card.Content> */}
      </StyledCard>
    
    ));
  };


  render() {
    return(
      <div>
        <Header as={ HeaderText } fontSize="large">Items</Header>
        <br/>
        <Link to={`/departments/${this.props.match.params.department_id}/items/new`}>
          <StyledButton> New item </StyledButton>
        <br/>
        <br/>
        <br/>
        </Link>
        <Card.Group centered>
        { this.renderItems() }
        </Card.Group>
      </div>
    );
  };
};

const StyledButton = styled.button`
  background: rgba(17, 125, 167, 0.87);
  border: none;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  outline: none;
  font-size: 15px;
  margin-left: 80rem;
  border-radius: 25px;

  &:hover {
    background: rgba(30, 85, 90, 0.87);
    transition: background 0.2s ease;
  }
`;


const ViewButton = styled.button`
  background: rgba(22, 100, 130, 0.87);
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  outline: none;
  font-size: 15px;
  border-radius: 25px;
  margin-left: 200px;

  &:hover {
    background: rgba(30, 85, 90, 0.87);
    transition: background 0.2s ease;
  }
`;

const StyledCard = styled(Card)`
  height: 100px;
 

`;


export default Items;