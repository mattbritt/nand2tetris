/*
    This Container manages the logic for the Slider
*/

import React, { Component } from 'react';
import SliderComponent from '../components/SliderComponent.js'

class Slider extends Component {

    render() {
        return (
            <SliderComponent
                handleValueChange={this.props.handleValueChange}
            ></SliderComponent>
        );
    }
}

export default Slider;