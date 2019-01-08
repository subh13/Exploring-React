import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
      <div id="bg1">
        <p>Static data</p>
        <div className="person">
          <h1>Subhankar</h1>
          <h2>Age: 25</h2>
        </div>
        <div className="person">
          <h1>Ujjwal</h1>
          <h2>Age: 29</h2>
        </div>
      </div>
    );
  }
}
export default App;
