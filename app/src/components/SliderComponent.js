/*
    This component contians the view for the Slider
*/

import React, { Component } from 'react';
import './css/SliderComponent.css'

class SliderComponent extends Component {
    render() {
        return (
            <div className='Slider'>
                <input type='range' min='0' max='5'></input>
                <br></br>
                <div className='sliderText'>
                    <p style={{float: 'left'}}>Slow</p>
                    <p style={{float: 'right'}}>Fast</p>
                </div>
            </div>

        );
    }
}

export default SliderComponent;