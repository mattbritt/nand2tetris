/*
    This container manages the logic for the LoadChipModal
*/

import React, { Component } from 'react';
import LoadChipModalComponent from '../components/LoadChipModalComponent.js'


class LoadChipModal extends Component {

    constructor(props){
        super(props);


        var defaultChips = {
            columnTitles: ["Please Login"],
            dataArray: []
        }

        this.state = { chips: defaultChips }

    }


    componentWillReceiveProps(){
        if(!this.props.chips)
            return;


        var newChips = {
            columnTitles: ["Chip Name", "File"],
            dataArray: this.props.chips
        }

        this.setState({chips: newChips});

    }

    render(){

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