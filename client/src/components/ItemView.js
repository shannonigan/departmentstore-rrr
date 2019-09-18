import React from "react";
import axios from "axios";
import { Link }  from 'react-router-dom'
import { Segment, Header, Button, Icon, } from "semantic-ui-react";


class ItemView extends React.Component {
  state = { department_id: {}, };


  componentDidMount() {
    axios.get(`/api/departments/:department_id/items/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ item: res.data, });
      })
  };

  deleteItem(id) {
    axios.delete(`/api/departments/:department_id/items/${id}`)
      .then( res => {
        this.props.history.push(`/departments/:department_id/items`);
      })
      .catch( err => {
        console.log(err);
      })
  };


  render() {
    const { name, } = this.state.item;

    return (
       <div>
        <Segment>
          <Header as="h1">{ name }</Header>
        </Segment>
        <br/>
        <br/>
       

        <br/>
        <Button as={Link} size="tiny" color="teal" to={`/departments/:department_id/items/${this.props.match.params.id}/edit`}>
          Edit
        </Button>
        <Link to={`/departments/:department_id/items`}>
            <Button size="tiny" color="black">Back</Button>
        </Link>
        <Button onClick={() => this.deleteItem(this.props.match.params.id)} style={{ marginLeft:"920px", }} size="tiny" color="red">
          Delete
        </Button>
       </div>
    );
  };
};

export default ItemView;