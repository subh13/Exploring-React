import React from 'react';

const Persons = (props) => {
    return (
        <div>
            <p>{props.name} is of {props.age}</p>
            <button type="button" onClick={props.clickFromChild}>click in child change in parent</button>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
}
export default Persons;