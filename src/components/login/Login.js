import React from 'react';
import {connect}  from 'react-redux';
import { Link, browserHistory }   from 'react-router';
import {startLogoutAction} from './../../actions/actions';
import _ from 'lodash';
import {Row, Col, Form, FormGroup, FormControl, Button, Alert, ControlLabel, Navbar, Table} from "react-bootstrap";


var Login = React.createClass({

    componentWillMount(){
        console.log("Login componentWilMount");
    },

    render: function () {
        console.log("Login.js 16");
        return (
            <div className = "title-top-nav">
                Login. Привет. Ведутся рабо...
            </div>
        );
    }
});

export default Login;

