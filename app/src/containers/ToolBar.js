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
                handleSingleStep={this.props.handleSingleStep}
                handlePlay={this.props.handlePlay}
                handleStop={this.props.handleStop}
                handleReset={this.props.handleReset}
                handleEval={this.props.handleEval}
                handleTickTock={this.props.handleTickTock}
                handleLoadScript={this.props.handleLoadScript}
                handleBreakpoints={this.props.handleBreakpoints}
                handleAnimationSpeedChange={this.props.handleAnimationSpeedChange}
                handleAnimateTypeChange={this.props.handleAnimateTypeChange}
                handleFormatChange={this.props.handleFormatChange}
                handleViewChange={this.props.handleViewChange}
            ></ToolBarComponent>
        )
    }
}

export default ToolBar;