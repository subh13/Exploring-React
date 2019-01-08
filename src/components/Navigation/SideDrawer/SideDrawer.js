import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidedrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import MyAux from '../../../hoc/MyAux';
const sideDrawer = (props) => {
    let attchedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attchedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <MyAux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attchedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>  
        </MyAux>
    );
}
export default sideDrawer;