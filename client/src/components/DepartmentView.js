import React from "react";
import axios from "axios";
import { Link }  from 'react-router-dom'
import { Segment, Header, Button, Container, Items, Card } from "semantic-ui-react";


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
        <Segment>
          <Header as="h1">{ name }</Header>
        </Segment>
        <br/>
        <br/>
       
        {/* <div>

        { this.props.items.map( item => (
          
          <Card key={item.id}>
          <Card.Content>
          <Card.Header>{ item.name }</Card.Header>
          </Card.Content>
          <Card.Content extra>
          <Link to={`/items/${item.id}`}>
          <Button color="black">
            View
          </Button>
          </Link>
          </Card.Content>
          </Card>

        ))};
      
        </div> */}

        

        <br/>
        <Button as={Link} size="tiny" color="teal" to={`/departments/${this.props.match.params.id}/edit`}>
          Edit
        </Button>
        <Link to={`/departments/`}>
            <Button size="tiny" color="black">Back</Button>
        </Link>
        <Button onClick={() => this.deleteDepartment(this.props.match.params.id)} style={{ marginLeft:"920px", }} size="tiny" color="red">
          Delete
        </Button>
       </div>
    );
  };
};

export default DepartmentView;