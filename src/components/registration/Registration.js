import React from 'react';
import {connect}  from 'react-redux';
import { Link, browserHistory }   from 'react-router';
import {startLogoutAction} from './../../actions/actions';
import _ from 'lodash';
import {Row, Col, Form, FormGroup, FormControl, Button, Alert, ControlLabel, Navbar, Table} from "react-bootstrap";


var Registration = React.createClass({
    getInitialState(){
        return {
            serverError: null,
            errors: [],
            toggleCheckbox:true
        };
    },
    _submitRegistration(e) {

    },
    _inputChange(e) {
        let {name, value} = e.target;
        this.setState({[name]: value});
    },
    componentWillMount(){
        console.log("Registrtion componentWilMount");
    },
    render: function () {
        console.log("Registrtion.js 16");
        return (
            <div className = "title-top-nav">
                <Row>
                    <Col md={4}>
                        <div className="container">
                            <Form onSubmit={this._submitRegistration.bind(this)}>
                                <FormGroup
                                    controlId="login" {...(this.state.errors.indexOf('login') !== -1 ? {validationState: 'error'} : {})}>
                                    <FormControl type="text" value={this.state.login} name="login" className="text-lowercase"
                                                 onChange={this._inputChange.bind(this)} placeholder="Your Login"/>
                                    <FormControl.Feedback/>
                                </FormGroup>
                                <FormGroup
                                    controlId="firstName" {...(this.state.errors.indexOf('firstName') !== -1 ? {validationState: 'error'} : {})}>
                                    <FormControl type="text" value={this.state.firstName} name="firstName" className="text-lowercase"
                                                 onChange={this._inputChange.bind(this)} placeholder="Your name"/>
                                    <FormControl.Feedback/>
                                </FormGroup>
                                <FormGroup
                                    controlId="secondName" {...(this.state.errors.indexOf('secondName') !== -1 ? {validationState: 'error'} : {})}>
                                    <FormControl type="text" value={this.state.secondName} name="secondName" className="text-lowercase"
                                                 onChange={this._inputChange.bind(this)} placeholder="Your surname"/>
                                    <FormControl.Feedback/>
                                </FormGroup>
                                <FormGroup
                                    controlId="email" {...(this.state.errors.indexOf('email') !== -1 ? {validationState: 'error'} : {})}>
                                    <FormControl type="email" value={this.state.email} name="email" className="text-lowercase"
                                                 onChange={this._inputChange.bind(this)} placeholder="Your email"/>
                                    <FormControl.Feedback/>
                                </FormGroup>
                                <FormGroup
                                    controlId="profession" {...(this.state.errors.indexOf('profession') !== -1 ? {validationState: 'error'} : {})}>
                                    <FormControl type="text" value={this.state.profession} name="profession" className="text-lowercase"
                                                 onChange={this._inputChange.bind(this)} placeholder="Your profession"/>
                                    <FormControl.Feedback/>
                                </FormGroup>
                                <FormGroup
                                    controlId="password"  {...(this.state.errors.indexOf('password') !== -1 ? {validationState: 'error'} : {})}>
                                    <FormControl type="password" value={this.state.password} name="password"
                                                 onChange={this._inputChange.bind(this)} placeholder="Password"/>
                                    <FormControl.Feedback/>
                                </FormGroup>
                                <input type="submit" value="sign up free"
                                       className="login-submit-button btn btn-main btn-big"/>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>

        );
    }
});

export default Registration;

