/*
    This container manages the logic for the ToolBar
*/

import React, { Component } from 'react';
import ToolBarComponent from "../components/ToolBarComponent.js"

class ToolBar extends Component {

    render() {
        return (
            <ToolBarComponent
                handleShowLoadChipModal={this.props.handleShowLoadChipModal}
            ></ToolBarComponent>
        )
    }
}

export default ToolBar;