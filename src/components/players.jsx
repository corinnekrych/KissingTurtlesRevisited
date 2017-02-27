import React from 'react';
import ReactDom from 'react-dom';

//import 'kt.css'

const players = [{name: "Corinne"}, {name: "Emil"}];

class Players extends React.Component {
  render() {
    return <div>
      <h3>Hello {players[0].name}</h3>
      <div className="topcoat-button-bar">
        <div className="topcoat-button-bar__item">
          <button className="topcoat-button-bar__button--large">One</button>
        </div>
        <div className="topcoat-button-bar__item">
          <button className="topcoat-button-bar__button--large">Two</button>
        </div>
        <div className="topcoat-button-bar__item">
          <button className="topcoat-button-bar__button--large">Three</button>
        </div>
      </div>
    </div>
  }
}
ReactDom.render(<Players/>, document.getElementById('content'));
