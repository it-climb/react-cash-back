'use strict';
import React from "react";
import {Row, Col, Form, FormGroup, FormControl, Button, Alert, ControlLabel, Navbar} from "react-bootstrap";
import {browserHistory} from "react-router";
import _ from "lodash";
import SessionActions from "./../../../actions/session";
import UserActions from "./../../../actions/user";
export default React.createClass({
    propTypes: {
        currentUser: React.PropTypes.object.isRequired
    },
    getInitialState(){
        return {email: '', password: '', errors: []}
    },
    componentWillMount(){
        let {currentUser} = this.props;
        if (!!currentUser) {
            return browserHistory.push('/');
        }
    },
    _handleGoTo(goToPage) {
        return browserHistory.push.bind(browserHistory, goToPage);
    },
    _submitLogin(event){
        event.preventDefault();
        let errors = [],
            {email, password} = this.state,
            $this = this;
        if (_.trim(email).length === 0) {
            errors.push('email');
        }
        if (_.trim(password).length === 0) {
            errors.push('password');
        }
        if (errors.length !== 0) {
            this.setState({errors});
            return;
        }
        SessionActions.createAsync({email, password}, {})
            .then(()=> {
                let {redirect} = $this.props.stores.appState;
                if (!_.isEmpty(redirect)) {
                    window.location.replace(redirect);
                } else {
                    window.location.replace('/dashboard');
                }
            })
            .catch(serverError=> {
                console.log(serverError);
                this.setState({serverError});
            });
    },
    _inputChange(event){
        let {name, value} = event.target,
            {errors} =this.state,
            serverError = null;
        if (errors.indexOf(name) !== -1) {
            let errIdx = errors.indexOf(name);
            errors.splice(errIdx, 1);
        }
        this.setState({[name]: value, errors, serverError});
    },
    render(){
        return <div className="test-login">
            <header className="login-header">
                <Navbar fluid={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/" className="brand_logo" title="logo">
                                Cash-back
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </Navbar>
            </header>
            <div className="container">
                <Row>
                    <Col md={4} mdOffset={4}>
                        <h3 className="form-header">Log Into Your  Account</h3>
                        <Form onSubmit={this._submitLogin.bind(this)}>
                            {
                                this.state.serverError &&
                                <Alert bsStyle="danger">{_.get(this.state.serverError, 'response.body.message')}</Alert>
                            }
                            <FormGroup
                                controlId="email" {...(this.state.errors.indexOf('email') !== -1 ? {validationState: 'error'} : {})}>
                                <ControlLabel>Your Email</ControlLabel>
                                <FormControl type="text" value={this.state.email} name="email" className="text-lowercase"
                                             onChange={this._inputChange.bind(this)}/>
                                <FormControl.Feedback/>
                            </FormGroup>
                            <FormGroup
                                controlId="password"  {...(this.state.errors.indexOf('password') !== -1 ? {validationState: 'error'} : {})}>
                                <ControlLabel>Password</ControlLabel>
                                <FormControl type="password" value={this.state.password} name="password"
                                             onChange={this._inputChange.bind(this)} />
                                <FormControl.Feedback/>
                            </FormGroup>
                            <input type="submit" value="Login" className="login-submit-button btn btn-main btn-big"/>
                            <a href="#" onClick={this._handleGoTo('/forgot-password')}
                               className="btn btn-link btn-forgot">
                                Forgot Password?
                            </a>
                            <p className="text-inform">Don't have an account?&nbsp;
                                <a href="#" onClick={this._handleGoTo('/register')}
                                   className="btn btn-link btn-start">Get Started!</a>
                            </p>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    }
});



/*

import React from 'react';
import {connect}  from 'react-redux';

import {startLoginWithGoogleAction, startLoginWithGitHubAction, startLoginWithEmailAndPassword} from './../../actions/actions';

var Login = React.createClass({

    loginWithGoogle(){
        let {dispatch} = this.props;
        dispatch(startLoginWithGoogleAction());
    },

    loginWithGitHub(){
        let {dispatch} = this.props;
        dispatch(startLoginWithGitHubAction());
    },

    loginEmailAndPassword(){
        let {dispatch} = this.props;

        let emailRef = this.refs.email;
        let passwordRef = this.refs.password;

        dispatch(startLoginWithEmailAndPassword(emailRef.value, passwordRef.value));
    },

    render(){
        return (
            <div className="container">
                <div id="loginbox" style={{marginTop: '50px'}} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                    <div className="panel panel-info" >
                        <div className="panel-heading">
                            <div className="panel-title">Sign In</div>
                            <div style={{float: 'right', fontSize: '80%', position: 'relative', top:'-10px'}}><a href="#">Forgot password?</a></div>
                        </div>

                        <div style={{paddingTop: '30px'}} className="panel-body" >

                            <div style={{display: 'none'}} id="login-alert" className="alert alert-danger col-sm-12"></div>

                            <form id="loginform" className="form-horizontal" role="form">

                                <div style={{marginBottom: '25px'}} className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input id="login-username" type="text" className="form-control" name="email" placeholder="email" ref="email"/>
                                </div>

                                <div style={{marginBottom: '25px'}} className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                    <input id="login-password" type="password" className="form-control" name="password" placeholder="password" ref="password"/>
                                </div>

                                <div style={{marginTop:'10px'}} className="form-group">

                                    <div className="col-sm-12 controls">
                                        <a id="btn-login" className="btn btn-success" onClick={this.loginEmailAndPassword}>Login</a>
                                        <a id="btn-fblogin"  className="btn btn-danger" onClick={this.loginWithGoogle}>Login with Google</a>
                                        <a id="btn-fblogin" className="btn btn-primary" onClick={this.loginWithGitHub}>Login with GitHub</a>

                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-12 control">
                                        <div style={{borderTop: '1px solid#888', paddingTop: '15px', fontSize: '85%'}} >
                                            Don't have an account! <a href="#"> Sign Up Here </a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default connect()(Login);*/
