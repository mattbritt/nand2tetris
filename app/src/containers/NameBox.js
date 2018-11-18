/*
    This Container manages the logic for the NameBox
*/

import React, { Component } from 'react';
import NameBoxComponent from '../components/NameBoxComponent.js'

class NameBox extends Component {

    render() {
        return (
            <NameBoxComponent
                chipName={this.props.chipName}
            ></NameBoxComponent>
        );
    }
}

export default NameBox;