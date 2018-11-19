/*
    This container handles the view for the CellViewerWithTitle component
*/

import React, { Component } from 'react';
import './css/CellViewerWithTitleComponent.css';

import CellViewer from '../containers/CellViewer';

class CellViewerWithTitleComponent extends Component {

    render() {
        return (
            <div className='CellViewerWithTitle'>
                <span>
                    <p>{this.props.title}</p>
                </span>
                <CellViewer
                    data={this.props.data}
                ></CellViewer>
            </div>
        )
    }
}

export default CellViewerWithTitleComponent;