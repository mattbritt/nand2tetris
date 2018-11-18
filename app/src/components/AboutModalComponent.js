import React, { Component } from 'react';
import './css/AboutModalComponent.css'

class AboutModalComponent extends Component {

    render(){

        const showHideClassname = this.props.show ? "modal display-block" : "modal display-none";


        return (
            <div className={showHideClassname}>
                <section className="modal-main">
                    <div className="AboutModal">
                        <h2 style={{textAlign: 'center'}}>About</h2>

                        <p><b>Online Hardware Simulator, Version 0.5</b></p>

                        <p>This app is designed to supplement the program for &nbsp;
                            <a href="https://www.nand2tetris.org" target="_blank" 
                                rel="noopener noreferrer">www.nand2tetris.org</a> 
                                &nbsp; and the book "The Elements of Computing Systems" by  
                                Nisan and Schocken, MIT Press.
                        </p>

                        <p>Based on the original work by Yaron Ukrainitz
                            and Yannai A. Gonczarowski</p>

                        <p>Software Architects:</p>
                        <p> Gurbir Behniwal, Matt Britt, Patrick Kilgore</p>
                

                        <button onClick={this.props.handleClose}
                            style={{ width: '150px'}}
                        >
                            Close
                        </button>
                    </div>
                </section>
            
            
            </div>
        )
    }
}

export default AboutModalComponent;