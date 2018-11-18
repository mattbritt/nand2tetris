/*
    This component contians the view for the Slider
*/

import React, { Component } from 'react';
import './css/SliderComponent.css'

class SliderComponent extends Component {
    
    constructor(props){
        super(props);

        this.handleSliderChange = this.handleSliderChange.bind(this);
    }

    handleSliderChange(event){
        this.props.handleValueChange(event.target.value)
    }
    
    render() {
        return (
            <div className='Slider'>
                <input type='range' min='0' max='5'
                    onChange={event => this.handleSliderChange(event)}></input>
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