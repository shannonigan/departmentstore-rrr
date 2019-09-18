import React from "react";
import axios from "axios";
import { Header, Form, } from "semantic-ui-react";


class ItemForm extends React.Component {
  state = { name: "", price: "" };

  componentDidMount() {
    if (this.props.match.params.id) {
      axios.get(`/api/departments/${this.props.match.params.id}/items/${this.props.match.params.id}`)
        .then( res => {
          this.setState({ name: res.data.name, });
      })
        .catch( err => {
          console.log(err)
        })}
  };

  handleChange = (e, { name, value, }) => {
    this.setState({ [name]: value, });
  };

  handleSubmit = (e) => {
    debugger
    e.preventDefault();
    if (this.props.match.params.id) {
      axios.put(`/api/departments/${this.props.match.params.id}/items/${this.props.match.params.id}`, this.state)
      .then(res => {
        this.props.history.push(`/departments/${this.props.match.params.id}/items/${this.props.match.params.id}`)
      })
      .catch(err => {
        console.log(err)
      })
    }
    else {
      debugger
      axios.post(`/api/departments/${this.props.match.params.id}/items`, this.state)
      .then( res => {
        this.props.history.push(`/departments/${this.props.match.params.id}/items`);
      })
      .catch( err => {
        console.log(err)
      })}
  };

  render() {
    return (
      <div>
        {/* <Header as="h1"> {this.props.match.params.id ? "Edit Item" : "New Item"} </Header> */}
        <Header> New </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
            label="Name"
            placeholder="Name"
            name="name"
            required
            value={this.state.name}
            onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
            label="Price"
            placeholder="Price"
            name="price"
            required
            value={this.state.price}
            onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button> Submit </Form.Button>
        </Form>
      </div>
    );
  };
};

export default ItemForm;