import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}
                style={{
                    width: '100%'
                }}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <Logo/>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
};
export default toolbar;
