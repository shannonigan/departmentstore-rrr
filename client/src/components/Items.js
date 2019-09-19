import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Header, Card, } from "semantic-ui-react";


class Items extends React.Component {
  state = { items: [], };

  componentDidMount() {
    // const { department_id } = this.props.match.params.id
debugger
    axios.get(`/api/departments/${this.props.match.params.department_id}/items`)
    .then ( res => {
      this.setState({ items: res.data, });
    })
    .catch ( err => {
      console.log("error caught");
    })

  };

  

  renderItems = () => {
    const { items, } = this.state;
    
    if (items.length <= 0)
      return <Header as="h2"> No Items </Header>
      
      
    return items.map( item => (

      <Card key={item.id}>
        <Card.Content>
          <Card.Header>{ item.name }</Card.Header>
          <Card.Meta>${item.price}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/departments/${this.props.match.params.department_id}/items/${item.id}`}>
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
        <Header as="h1">Items</Header>
        <br/>
        <Link to={`/departments/${this.props.match.params.id}/items/new`}>
          <Button style={{ marginLeft:"800px", }} color="blue"> 
          New item 
          </Button>
        <br/>
        <br/>
        </Link>
        <Card.Group>
        { this.renderItems() }
        </Card.Group>
      </div>
    );
  };
};

export default Items;