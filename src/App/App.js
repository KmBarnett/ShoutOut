import React, { Component } from 'react';
import Form from '../Form/Form';
import Ideas from '../Ideas/Ideas'
import './App.css';
import { APICall, APIPost, APIDelete } from '../APICalls.js'



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    };
  }

  async componentDidMount() {
    const { ideas } = this.state
    const data = await APICall()
    this.setState({ideas: [...ideas, ...data]})
  }

  addIdea = async newIdea => {
    const idea = await APIPost(newIdea)
    this.setState({ ideas: [...this.state.ideas, idea]})
  }

  removeIdea = id => {
    const ideas = this.state.ideas.filter(idea => idea.id !== id);
    APIDelete(id)
    this.setState({ ideas });
  }

  render() {
    return (
      <main className="App">
        <h1>Shout Outs</h1>
        <Form addIdea={this.addIdea} />
        <Ideas
          ideas={this.state.ideas}
          removeIdea={ this.removeIdea}
        />
      </main>
    )
  }
}
