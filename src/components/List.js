import React from 'react';

const List = (props) => (

    <article className="media">
      <div className="field is-horizontal">
        <div className="box">
          <div className="media-content">
            <div className="content">
              <h1>List</h1>
            </div>
              <ul>{props.emails.map((f,index) => (
                  <li key={index}>{f}</li>
                  ))}
              </ul>
          </div>
        </div>
      </div>
    </article>  
)

export default List
