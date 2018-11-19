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

        this.state = { 
                        chips: defaultChips,
                        selectedChip: null
                     }

        this.handleChipSelect = this.handleChipSelect.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
    }


    componentWillReceiveProps(){
        if(!this.props.chips)
            return;


        var newChips = {
            columnTitles: ["Chip Name", "File"],
            dataArray: this.props.chips
        }

        this.setState({
                        chips: newChips
                        });

    }

    handleLoad()
    {
        if(this.state.selectedChip === null)
            return;

        this.props.handleLoad(this.state.selectedChip);
        this.props.handleClose();
    }

    handleChipSelect(chipId){
        console.log("handleChipSelect")
        this.setState({ selectedChip: chipId });
    }


    render(){

        return (
            <LoadChipModalComponent
                show={this.props.show}
                handleClose={this.props.handleClose}
                handleLoad={this.handleLoad}
                handleChipSelect={this.handleChipSelect}
                selectedChip={this.state.selectedChip}
                data={this.state.chips}
                handleChipFileLoad={this.props.handleChipFileLoad}
            ></LoadChipModalComponent>
        )
    }
}

export default LoadChipModal;