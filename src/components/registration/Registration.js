import React from 'react';
import {connect}  from 'react-redux';
import { Link, browserHistory }   from 'react-router';
import {startLogoutAction} from './../../actions/actions';
import _ from 'lodash';
import {Row, Col, Form, FormGroup, FormControl, Button, Alert, ControlLabel, Navbar, Table} from "react-bootstrap";


var Registration = React.createClass({

    componentWillMount(){
        console.log("Registrtion componentWilMount");
    },

    render: function () {
        console.log("Registrtion.js 16");
        return (
            <div className = "title-top-nav">
                Registration. Привет. Ведутся рабо...
            </div>
        );
    }
});

export default Registration;

