import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  state = {
    emails: []
  }

  addNewEmail = nEmail => {
    const newEmail = [...this.state.emails];
    newEmail.push(nEmail);
    this.setState({ emails: [...newEmail]});
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <Form addEmail={this.addNewEmail}/>
              </div>
              <div className="column">
                <List emails={this.state.emails}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
