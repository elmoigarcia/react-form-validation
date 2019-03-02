import React, { Component } from 'react';

export default class Form extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: "",
      touch: false,
      error:{
        email: false,
      }
    }
  }

  onBlurChange = (e) => {
    this.setState({
      touch: true,
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addEmail(this.state.email);
    this.setState({ 
      email: ""
     });
  };

  handleChange = (e) => (
    this.setState({
      [e.target.name]: e.target.value,
    })
  )

  render = () => (
  <form onSubmit={this.handleFormSubmit}>
    <div className="Form" >
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success"  name="email" type="text" placeholder="Text input" 
          value={this.state.email}
          onChange={e => this.handleChange(e)}
          onBlur={this.onBlurChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>

          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        <p className="help is-success">This username is available</p>
        <p className="help is-danger">This email is invalid</p>
      </div>

      <div className="control">
        <button className="button is-link">Submit</button>
      </div>
    </div>
    </form>
  );
}