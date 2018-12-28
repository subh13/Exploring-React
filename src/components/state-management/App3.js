import React, {Component} from 'react';
import Persons from '../Persons/Persons';
class App3 extends Component {
    state = {
        persons: [
            {name: 'Subhankar', age: '25'},
            {name: 'Vidyotma', age: '25'},
            {name: 'Goutam', age: '29'}
        ]
    }
    /**
     * A normal ES6 funtion to chnage the stateS
     */
    /**
     * for a particular state variable change
     */
    changeStateHandler = (newName) => {
        let statePersons = [...this.state.persons];
        let statePerson = statePersons[1];
        statePerson.name = newName;
        statePerson.age = 30;
        statePersons[1] = statePerson;
        this.setState({ statePersons });
    }
    /**
     * for a particular array of objects all value change rather a targeted one
     */
    changeStateHandlerAll = () => {
        this.setState({
            persons: [
                {name: 'Vidhan', age: '27'},
                {name: 'Ravi', age: '45'},
                {name: 'Dhruba', age: '50'}
            ]
        })
    }
    twoWayCheck = (event) => {
        console.log(event.target.value);
    }
    render() {
        return (
            <div id="bg1">
                <button onClick={this.changeStateHandler.bind(this,'thug')}>Change State Single</button>
                <button onClick={this.changeStateHandlerAll}>Change State All</button>
                <Persons 
                    name={this.state.persons[0].name} 
                    age={this.state.persons[0].age}/>
                <Persons 
                    name={this.state.persons[1].name} 
                    age={this.state.persons[1].age}
                    clickFromChild={this.changeStateHandlerAll}
                    changed={this.twoWayCheck}>Try this for click from child to change parent state</Persons>
                <Persons 
                    name={this.state.persons[2].name} 
                    age={this.state.persons[2].age}/>
            </div>
        )
    }
}
export default App3;