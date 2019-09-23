import React from "react";
import axios from "axios";
import { Header, Form, } from "semantic-ui-react";
import { HeaderText, } from "../styles/shared";
import styled from "styled-components";


class ItemForm extends React.Component {
  state = { name: "", price: "" };

  componentDidMount() {
    const { match: { params: { id, department_id } } } = this.props
    if (id && department_id)
      axios.get(`/api/departments/${department_id}/items/${id}`)
        .then(res => {
          const { name, price, } = res.data
          this.setState({ name, price, })
        })
        .catch(err => {
          console.log(err.response)
        })
  }

  handleChange = (e) => {
    const { target: { name, value } } = e
    this.setState({ [name]: value })
  }

 
  handleSubmit = (e) => {
    e.preventDefault()
    const item = { ...this.state }
    const { match: { params: { id, department_id } } } = this.props
    
    if (id && department_id) {
      debugger
      axios.put(`/api/departments/${department_id}/items/${id}`, item)
        .then(res => {
          this.props.history.push(`/departments/${department_id}/items/${id}`)
        })
    } else {
      axios.post(`/api/departments/${department_id}/items`, item)
        .then(res => {
          this.props.history.push(`/departments/${department_id}/items`)
        })
    }
  }
  
  
  render() {
    const { name, price, } = this.state
    return (
      <div>
        <Header as={ HeaderText } fontSize="large"> {this.props.match.params.id ? "Edit Item" : "New Item"} </Header>
        <br/>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
            label="Name"
            placeholder="Name"
            name="name"
            required
            value={name}
            onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
            label="Price"
            placeholder="Price"
            name="price"
            required
            value={price}
            onChange={this.handleChange}
            />
          </Form.Group>
          <EvButton> Submit </EvButton>
        </Form>
      </div>
    );
  };
};


const EvButton = styled.button`
  background: rgba(20, 18, 51, 0.6);
  font-family: Arial, Helvetica, sans-serif;
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  margin-left: 1250px;
  border-radius: 25px;

  &:hover {
    background: rgba(30, 85, 90, 0.87);
    transition: background 0.2s ease;
  }

`;

export default ItemForm;