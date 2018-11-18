/*
    This component contains the view for the LoginModal
*/

import React, { Component } from 'react';
import './css/LoginModalComponent.css'

class LoginModalComponent extends Component {

    constructor(props) {
        super(props);

        // set to null unless we have at least one user in dropdown / select
        var userId = null;

        try{
            userId = this.props.userJson[0].id;
        }
        catch(err){
            
        }

        
        this.state = { 'userId': userId}

        this.updateUsernameSelectValue = this.updateUsernameSelectValue.bind(this);
        this.handleUserSubmit = this.handleUserSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        var userId = null;
        try{
            userId = nextProps.userJson[0].id;
        }
        catch(err){}

        this.setState({userId: userId})
    }

    updateUsernameSelectValue(event){
        this.setState({userId: event.target.value}/*,
            ()=>{console.log(this.state.userId)}*/)   // need callback to ensure we're using updated state

    }

    handleUserSubmit() {
        // ignore if no user
        if(this.state.userId === null) return;

        this.props.handleLogin(this.state.userId);

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
                                <select id='usernameSelect' onChange={this.updateUsernameSelectValue}>
                                    {this.props.userJson.map(user =>
                                        <option key={user.id} 
                                            value={user.id}>{user.username}</option>
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