import React, { Component } from 'react';
import Moduleasafunc from '../module-component-as-a-func/Moduleasafunc';
import Moduleasafuncprops from '../module-as-a-func-props-children/Moduleasafuncprops';
import './App2.css';
class App2 extends Component {
    render() {
        return (
            <div className="person2">
                <p>Dynamic data with props</p>
                <h1>{ this.props.name }</h1>
                <h2>Age: { this.props.age }</h2>
                <Moduleasafunc/>
                <Moduleasafuncprops name="Subhankar" age="25">26</Moduleasafuncprops>
            </div>
        );
    }
}
export default App2