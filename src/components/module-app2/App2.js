import React, { Component } from 'react';
class App2 extends Component {
    render() {
        return (
            <div className="person">
                <p>Dynamic data with props</p>
                <h1>{ this.props.name }</h1>
                <h2>Age: { this.props.age }</h2>
            </div>
        );
    }
}
export default App2