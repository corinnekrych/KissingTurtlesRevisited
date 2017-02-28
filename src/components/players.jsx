import React from 'react';
import ReactDom from 'react-dom';
import '@material/button/dist/mdc.button.css';
import '../assets/css/kt.css'
var Ink = require('react-ink');

const players = [{name: "Corinne"}, {name: "Emil"}];

class Players extends React.Component {
  render() {
    return <div>
      <h3>Hello {players[0].name}</h3>

      <button className="mdc-button mdc-button--raised mdc-button--primary">
        <Ink />
        new game
      </button>

    </div>
  }
}
ReactDom.render(<Players/>, document.getElementById('content'));
