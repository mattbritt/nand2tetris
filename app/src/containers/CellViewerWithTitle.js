/*
    This container handles the logic for the CellViewer component
*/

import React, { Component } from 'react';
import CellViewerWithTitleComponent from '../components/CellViewerWithTitleComponent.js';

class CellViewerWithTitle extends Component {
    render() {
        return (
            <CellViewerWithTitleComponent title={this.props.title}><h1>test</h1></CellViewerWithTitleComponent>
        )
    }
}

export default CellViewerWithTitle;