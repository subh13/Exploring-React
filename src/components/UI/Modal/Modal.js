import React, { Component } from 'react';
import classes from './Modal.module.css';
import MyAux from '../../../hoc/MyAux';
import Backdrop from '../../UI/Backdrop/Backdrop';
class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        // optimizing performance
        return nextProps.show !== this.props.show
    }
    render () {
        return (
            <MyAux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal} 
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
    
                }}>{this.props.children}</div>
            </MyAux>
            
        );
    }
}
export default Modal;