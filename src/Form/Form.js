import React, { Component } from 'react';
import './Form.css'

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  submitNewIdea = e => {
    e.preventDefault();
    const { addIdea } = this.props;
    const newIdea = { ...this.state, id: Date.now()};
    addIdea(newIdea);
    this.resetInputs();
  }

  resetInputs = () => {
    this.setState({
      title: '',
      description: '',
      password: ''
    })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Person'
          value={this.state.title}
          name='title'
          onChange={this.handleChange}
        />
        <input
          type='text'
          placeholder='How They Are Awesome'
          value={this.state.description}
          name='description'
          onChange={this.handleChange}
        />
        <input
          type='text'
          placeholder='password'
          value={this.state.password}
          name='password'
          onChange={this.handleChange}
        />
        <button
          onClick={this.submitNewIdea}
        >
          Shout!
        </button>
      </form>
    )
  }
}
