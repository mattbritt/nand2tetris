/*
    This Container manages the logic for the MenuBar

*/

import React, { Component } from 'react';
import MenuBarComponent from "../components/MenuBarComponent.js"

class MenuBar extends Component {
    
    render() {
        return (
            <MenuBarComponent 
                handleLogin={this.props.handleLogin}
                userInfo={this.props.userInfo}
                handleLogout={this.props.handleLogout}
                >
            </MenuBarComponent>
        );
    }
}

export default MenuBar;