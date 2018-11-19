/*
    This component contains the view for the LoadChipModal
*/

import React, { Component } from 'react';
import './css/LoadChipModalComponent.css';

import CellViewer from '../containers/CellViewer';

class LoadChipModalComponent extends Component {

    handleFileChange = (event) => {
        this.props.handleChipFileLoad(event.target.files[0])
    }

    render(){

        const showHideClassname = this.props.show ? "modal display-block" : "modal display-none";

        return (
            <div className={showHideClassname} >
                <section className="modal-main">
                    <div>
                        <h2>Chip Selection</h2>
                    </div>
                    <div id='chipViewer'>
                        <CellViewer
                            data={this.props.data}
                            selectedRow={this.props.selectedChip}
                            handleRowClick={this.props.handleChipSelect}
                        >
                        </CellViewer>
                    </div>
                    <span className="loadChipModalButtonsSpan">
                        <label htmlFor="chip-upload" className="file-upload-button">
                            Browse
                        </label>
                        <input id="chip-upload" type="file" hidden
                        accept=".hdl"
                            onChange={this.handleFileChange}/>
                        
                        <button 
                            onClick={this.props.handleLoad}
                            className="loadChipModalButton"
                            >Load</button>
                        <button 
                            onClick={this.props.handleClose}
                            className="loadChipModalButton"
                            >Cancel</button>
                    </span>
                </section>

            </div>
        )
    }
}

export default LoadChipModalComponent;