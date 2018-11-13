/*
    This container manages the logic for the LoadChipModal
*/

import React, { Component } from 'react';
import LoadChipModalComponent from '../components/LoadChipModalComponent.js'


class LoadChipModal extends Component {

    constructor(props){
        super(props);

        this.state = { chips: {} }
    }

    componentDidMount(){
        if(!this.props.chips)
            return;

        var newChips = {
            columnTitle: ["Chip Name", "File"],
            dataArray: this.props.chips
        }

    }

    render(){
        console.log("render")
        return (
            <LoadChipModalComponent
                show={this.props.show}
                handleClose={this.props.handleClose}
                data={this.state.chips}
            ></LoadChipModalComponent>
        )
    }
}

export default LoadChipModal;