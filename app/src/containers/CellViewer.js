/*
    This container handles the logic for the CellViewer component
*/

import React, { Component } from 'react';
import CellViewerComponent from '../components/CellViewerComponent.js';

class CellViewer extends Component {

    constructor(props)
    {
        super(props);

        this.state = { selectedRowId: null };

        this.handleRowClick = this.handleRowClick.bind(this);
    }

    handleRowClick(event)
    {
        console.log("handleRowClick");
        console.log(event);
    }

    render() {
        return (
            <CellViewerComponent
                data={this.props.data}
                handleRowClick={this.handleRowClick}
            ></CellViewerComponent>
        )
    }
}

export default CellViewer;