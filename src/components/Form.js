import React, { Component } from 'react';

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export default class Form extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: "",
      touch: false,
      error: true,
    }
  }

  // cuando se entra en el input se activa
  onBlurChange = (e) => {
    this.setState({
      touch: true,
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addEmail(this.state.email);
    this.setState({ 
      email: "",
      error: true,
      touch: false
     });
  };

  handleChange = (e) => (
    this.setState({
      [e.target.name]: e.target.value,
      error: !emailRegexp.test(e.target.value) || this.props.emails.includes(e.target.value) //validamos los errores
    })
  )

  render = () => {
    
    let inputClassName = 'input';
    
    if (this.state.touch) {
      inputClassName = inputClassName + ' ' + (this.state.error ? 'is-danger' : 'is-success');
    } //el estado de touch(onblur) es true, cambia la clase dependiendo del state de error(true o false)
    return(
          <form onSubmit={this.handleFormSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input className={inputClassName} name="email" type="text" placeholder="Text input" 
                value={this.state.email}
                onChange={e => this.handleChange(e)}
                onBlur={this.onBlurChange}/>

                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
                <span className="icon is-small is-right">
                    {this.state.touch && !this.state.error && (<i className="fas fa-check"></i>)}

                    {this.state.touch && this.state.error && (<i className="fas fa-exclamation-triangle"></i>)}
                </span>
              </div>
              {this.state.touch && this.state.error && (<p className="help is-danger">This email is invalid</p>)}

              {this.state.touch && !this.state.error && (<p className="help is-success">This email is valid</p>)}
            </div>
                <div className="control">
                  <button className="button is-link" disabled={this.state.error}>Submit</button>
                </div>
          </form>
      );
  }
}
