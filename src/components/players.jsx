import React from 'react';
import ReactDom from 'react-dom';
//import './assets/css/topcoat-mobile-light.css'
//import 'kt.css'

const players = [{name: "Corinne"}, {name: "Emil"}];

class Players extends React.Component {
  render() {
    return <div>
      <h3>Hello {players[0].name}</h3>

    </div>
  }
}
ReactDom.render(<Players/>, document.getElementById('content'));