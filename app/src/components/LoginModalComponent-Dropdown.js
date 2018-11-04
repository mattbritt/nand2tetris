/*
    This component contains the view for the LoginModal
*/

import React, { Component } from 'react';
import './css/LoginModalComponent.css'

class LoginModalComponent extends Component {

    constructor(props) {
        super(props);


        this.handleUserSubmit = this.handleUserSubmit.bind(this);
    }

    handleUserSubmit() {
        this.props.handleClose();
    }

    render() {

        const showHideClassname = this.props.show ? "modal display-block" : "modal display-none";

        return (
            <div className={showHideClassname} >

                <section className="modal-main">
                    <div>
                        <h2>Account Login</h2>
                    </div>
                    <div>
                        <form id='loginForm'>
                            <span>
                                <label>Username</label>
                            </span>
                            <span>
                                <select id='usernameInput'>
                                    {this.props.userJson.map(user =>
                                        <option value={user.id}>{user.username}</option>
                                        )}
                                </select>
                            </span>
                            
                            
                        </form>
                    </div>

                    <div>
                        <button onClick={this.handleUserSubmit}>Submit</button>
                    </div>

                    <div>
                        <button onClick={this.props.handleClose}>Close</button>
                    </div>
                </section>

            </div>
        );
    }
}

export default LoginModalComponent;