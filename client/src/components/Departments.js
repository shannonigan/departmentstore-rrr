import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Header, Card, } from "semantic-ui-react";
import styled, { keyframes } from "styled-components";
import { HeaderText, } from "../styles/shared";


class Departments extends React.Component {
  state = { departments: [], };

  componentDidMount() {
    //TODO make get request with axios
    axios.get("/api/departments")
    .then ( res => {
      this.setState({ departments: res.data, });
      
    })
    .catch ( err => {
      console.log("error caught");
    })
    //update state
  };

  renderDepartments = () => {
    const { departments, } = this.state;
    
    if (departments.length <= 0)
      return <Header as="h2"> No Departments </Header>
    return departments.map( department => (
      // <StyledCard> 

      <StyledCard key={department.id}>
        <Card.Content>
          <Card.Header>{ department.name }</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/departments/${department.id}`}>
            <ViewButton> View </ViewButton>
          </Link>
        </Card.Content>
      </StyledCard>
      // </StyledCard>
    
    ));
  };


  render() {
    return(
      <div>
       
       <Header as={ HeaderText } fontSize="large">Departments</Header>
        
        <Link to="/departments/new">
          <StyledButton> New Department </StyledButton>
        <br/>
        <br/>
        <br/>
        </Link>
        <Card.Group>
        { this.renderDepartments() }
        </Card.Group>
      </div>
    );
  };
};

const StyledButton = styled.button`
  background: rgba(22, 100, 130, 0.87);
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

export default Departments;