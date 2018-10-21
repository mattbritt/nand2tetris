/*
    This component contains the view for the NameBox
*/

import React, { Component } from 'react';
import './css/NameBoxComponent.css'

class NameBoxComponent extends Component {
    render() {
        return (
            <div className='NameBox'>
                <p>Chip Name: </p> 
                <input type='text' disabled
                    placeholder='ALU'></input>
                <div>
                    <p>Time:</p>
                    <input type='text' disabled
                        placeholder='0'></input>
                </div>
            </div>

        );
    }
}

export default NameBoxComponent;