/**
 * Hoc is nothing but a wrapper class in React
 * @param {*} props 
 */
 // not preferable does not work with React 16
 import React from 'react';
 import { AuthContext } from '../state-management/App3';
const mainContainer = (props) => { 
    return (
        <AuthContext.Consumer>
            { auth => auth ? props.children : 'I am a guest cannot render children' }
        </AuthContext.Consumer>
    )
};
export default mainContainer;