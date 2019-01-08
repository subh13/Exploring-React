import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { AuthContext } from '../state-management/App3';
const Persons = (props) => {
    const styles = {
        border: '1px solid #ccc',
        margin: '8px 0 8px 4px',
        padding: '4px 0 10px 4px',
        borderRadius: '5px',
        textAlign: 'center',
        boxShadow: '0 5px 5px darkblue',
        ':hover' : {
            backgroundColor: 'lightblue',
            color: 'black'
        },
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    }
    return (
        <div style={styles}>
            <p>{props.name} is of {props.age}</p>
            <button type="button" onClick={props.clickFromChild}>click in child change in parent</button>
            <button type="button" onClick={props.clickFromChildDelete}>Delete Person</button>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
}
Persons.propTypes = {
    clickFromChild: PropTypes.func,
    clickFromChildDelete: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
export default Radium(Persons);