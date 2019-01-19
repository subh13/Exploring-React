import React, {Component} from 'react';
import MyAux from '../../hoc/MyAux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
class Layout extends Component{
    constructor() {
        super();
        this.state = {
            showSideDrawer: false
        }
    }
    sideDrawerClosedHandler = () =>  {
        this.setState({
            showSideDrawer: false
        });
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        })
    }
    render () {
        return (
            <MyAux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </MyAux>
        );
    }
}
export default Layout;