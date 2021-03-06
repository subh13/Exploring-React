import React, {Component} from 'react';
import Persons from '../Persons/Persons';
import ErrorBoundary from '../ErrorHandling/ErrorBoundary';
import MainContainer from '../HOC//MainContainer';
import HocAsFunc from '../HOC/HocAsFunc';
import './App3.css';
export const AuthContext = React.createContext(false);
class App3 extends Component {
    // constructor () {
    //     super();
    //     // declare global variable for this component here react new feature in 16.7.0 release
    // }
    state = {
        persons: [
            {id: 1, name: 'Subhankar', age: 25},
            {id: 2, name: 'Vidyotma', age: 25},
            {id: 3, name: 'Goutam', age: 29}
        ],
        showPersons: false,
        togglePersonsCounter: 0,
        isAuthenticated: false
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
                {name: 'Vidhan', age: 27},
                {name: 'Ravi', age: 45},
                {name: 'Dhruba', age: 50}
            ]
        })
    }
    twoWayCheck = (event) => {
        console.log(event.target.value);
    }
    showPersonsList = () => {
        const doesShow = this.state.showPersons;
        this.setState((prevState, props) => {
            return {
                showPersons: !doesShow,
                togglePersonsCounter: prevState.togglePersonsCounter + 1
            }
        });
    }
    deletePerson = (personIndex) => {
        // const persons = this.state.persons; // DO NOT do this directly accessing state variable will mutate state
        // create a copy of state variable and use 
        // method one 
        // const persons = this.state.persons.slice();
        // method 2 spread operator and recommended
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }
    myLoop() {
        // note map function if in jsx callback does not need a braces else in js it needs
        this.state.persons.map((fn, i) => {
            return console.log(fn);
        });
    }
    /**
     * React Life cycle hook
     */
    componentDidMount = () => {
        this.myLoop();
    }
    render() {
        return (
            <div id='bg1'>
                <button onClick={this.changeStateHandler.bind(this,'thug')}>Change State Single</button>
                <button onClick={this.changeStateHandlerAll}>Change State All</button>
                <button onClick={this.showPersonsList}>Toggle Persons</button>
                <p>Persons through js function Toggle {this.state.showPersons ? 'true': 'false'}</p>
                {this.state.showPersons ? 
                    <div>
                        <ErrorBoundary>
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
                            age={this.state.persons[2].age}/> </ErrorBoundary>
                    </div> : null   
                }
                <hr/>
                <p>Persons through list</p>
                {this.state.persons.map((person, i) => 
                    <Persons name={person.name} 
                            age={person.age} 
                            clickFromChildDelete={this.deletePerson.bind(this, i)}
                            key={person.id}/>
                )}
                <AuthContext.Provider value={this.state.isAuthenticated}>
                    <MainContainer>Some Super Hero</MainContainer>
                </AuthContext.Provider>
            </div>
        )
    }
}
export default HocAsFunc(App3, 'bg1Cls');