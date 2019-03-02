import React, {Component} from 'react';

export default class List extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const list = this.props.emails.map((f,index) => (
      <li key={index}>{f}</li>
    ));
   
  return (
    <article className="media">
      <div className="field is-horizontal">
        <div className="box">
          <div className="media-content">
            <div className="content">
              <h1>List</h1>
            </div>
              <ul>{list}</ul>
          </div>
        </div>
      </div>
    </article>
  )
}
}