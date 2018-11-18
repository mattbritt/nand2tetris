/*
    This container handles the logic for the CellViewer component
*/

import React, { Component } from 'react';
import CellViewerComponent from '../components/CellViewerComponent.js';

class CellViewer extends Component {


    render() {
        return (
            <CellViewerComponent
                data={this.props.data}
                handleRowClick={this.props.handleRowClick}
                selectedRowId={this.props.selectedRow}
            ></CellViewerComponent>
        )
    }
}

export default CellViewer;