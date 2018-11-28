/*
    This component contains the view for the LoadScriptModal
*/

import React, { Component } from 'react';
import './css/LoadScriptModalComponent.css';

import CellViewer from '../containers/CellViewer';

class LoadScriptModalComponent extends Component {

    handleFileChange = (event) => {
        this.props.handleScriptFileLoad(event.target.files[0])
    }

    render(){

        const showHideClassname = this.props.show ? "modal display-block" : "modal display-none";

        return (
            <div className={showHideClassname} >
                <section className="modal-main">
                    <div>
                        <h2>Test Script Selection</h2>
                    </div>
                    <div id='scriptViewer'>
                        <CellViewer
                            data={this.props.data}
                            selectedRow={this.props.selectedScript}
                            handleRowClick={this.props.handleScriptSelect}
                        >
                        </CellViewer>
                    </div>
                    <span className="LoadScriptModalButtonsSpan">
                        <label htmlFor="script-upload" className="file-upload-button">
                            Browse
                        </label>
                        <input id="script-upload" type="file" hidden
                        accept=".tst"
                            onChange={this.handleFileChange}/>
                        
                        <button 
                            onClick={this.props.handleLoad}
                            className="LoadScriptModalButton"
                            >Load</button>
                        <button 
                            onClick={this.props.handleClose}
                            className="LoadScriptModalButton"
                            >Cancel</button>
                    </span>
                </section>

            </div>
        )
    }
}

export default LoadScriptModalComponent;