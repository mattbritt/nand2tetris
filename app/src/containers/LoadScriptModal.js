/*
    This container manages the logic for the LoadScriptModal
*/

import React, { Component } from 'react';
import LoadScriptModalComponent from '../components/LoadScriptModalComponent.js'


class LoadScriptModal extends Component {

    constructor(props){
        super(props);


        var defaultScripts = {
            columnTitles: ["Please Login"],
            dataArray: []
        }

        this.state = { 
                        scripts: defaultScripts,
                        selectedScript: null
                     }

        this.handleScriptSelect = this.handleScriptSelect.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
    }


    componentWillReceiveProps(){
        if(!this.props.scripts)
            return;


        var newScripts = {
            columnTitles: ["Test Script Name", "File"],
            dataArray: this.props.scripts
        }

        this.setState({
                        scripts: newScripts
                        });

    }

    handleLoad()
    {
        if(this.state.selectedScript === null)
            return;

        this.props.handleLoad(this.state.selectedScript);
        this.props.handleClose();
    }

    handleScriptSelect(scriptId){
        this.setState({ selectedScript: scriptId });
    }


    render(){

        return (
            <LoadScriptModalComponent
                show={this.props.show}
                handleClose={this.props.handleClose}
                handleLoad={this.handleLoad}
                handleScriptSelect={this.handleScriptSelect}
                selectedScript={this.state.selectedScript}
                data={this.state.scripts}
                handleScriptFileLoad={this.props.handleScriptFileLoad}
            ></LoadScriptModalComponent>
        )
    }
}

export default LoadScriptModal;