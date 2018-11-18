/*
    This component contains the view for the LoadChipModal
*/

import React, { Component } from 'react';
import './css/LoadChipModalComponent.css';

import CellViewer from '../containers/CellViewer';

class LoadChipModalComponent extends Component {
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
                    <span>
                        <button onClick={this.props.handleLoad}>Load</button>
                        <button onClick={this.props.handleClose}>Cancel</button>
                    </span>
                </section>

            </div>
        )
    }
}

export default LoadChipModalComponent;