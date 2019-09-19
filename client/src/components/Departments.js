import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Header, Card, } from "semantic-ui-react";


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

      <Card key={department.id}>
        <Card.Content>
          <Card.Header>{ department.name }</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/departments/${department.id}`}>
          <Button color="black">
            View
          </Button>
          </Link>
        </Card.Content>
      </Card>
    
    ));
  };


  render() {
    return(
      <div>
       
        <Header as="h1">Departments</Header>
        
        <Link to="/departments/new">
          <Button style={{ marginLeft:"800px", }} color="blue"> 
          New department 
          </Button>
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

export default Departments;