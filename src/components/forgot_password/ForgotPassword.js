import React from 'react';
import {connect}  from 'react-redux';
import { Link, browserHistory }   from 'react-router';
import {startLogoutAction} from './../../actions/actions';
import _ from 'lodash';
import {Row, Col, Form, FormGroup, FormControl, Button, Alert, ControlLabel, Navbar, Table} from "react-bootstrap";


var ForgotPassword = React.createClass({

    componentWillMount(){
        console.log("F corgotPasswordomponentWilMount");
    },

    render: function () {
        console.log("Login.js 16");
        return (
            <div className = "title-top-nav">
                ForgotPassword. Привет. Ведутся рабо...
            </div>
        );
    }
});

export default ForgotPassword;

/**
 * Created by oem on 5/7/17.
 */
