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
                handleShowLoadChipModal={this.props.handleShowLoadChipModal}
                handleSingleStep={this.props.handleSingleStep}
                handlePlay={this.props.handlePlay}
                handleStop={this.props.handleStop}
                handleReset={this.props.handleReset}
                handleEval={this.props.handleEval}
                handleTickTock={this.props.handleTickTock}
                handleLoadScript={this.props.handleLoadScript}
                handleBreakpoints={this.props.handleBreakpoints}
                >
            </MenuBarComponent>
        );
    }
}

export default MenuBar;