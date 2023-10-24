import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Form } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  submitForm = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  changeInput = input => {
    this.setState({
      [input.name]: input.value,
    });
  };

  nameIinputIid = nanoid(5);
  numberInputIid = nanoid(5);

  render() {
    return (
      <Form onSubmit={this.submitForm}>
        <label htmlFor={this.nameIinputIid}>Name</label>
        <input
          type="text"
          id={this.nameIinputIid}
          name="name"
          placeholder="Enter name ..."
          onChange={e => {
            return this.changeInput(e.target);
          }}
          value={this.state.name}
          required
        />
        <label>Number</label>
        <input
          type="tel"
          id={this.numberInputIid}
          name="number"
          placeholder="XXX-XX-XX"
          onChange={e => {
            return this.changeInput(e.target);
          }}
          value={this.state.number}
          required
        />
        <button type="submit">Add contatct</button>
      </Form>
    );
  }
}
