/**
 * Created by hp on 28.05.17.
 */
import React from 'react';
import {connect}  from 'react-redux';
import { Link, browserHistory }   from 'react-router';
import {startLogoutAction} from './../../actions/actions';
import _ from 'lodash';
import {Row, Col, Form, FormGroup, FormControl, Button, Alert, ControlLabel, Navbar, Table} from "react-bootstrap";



class Footer extends React.createClass({

    render: function () {
        return (
        <div>
            <div className = "footer">
            Designed by IT-Climb.2017
        </div>
        </div>

        )
    }
});

// export default TitleDashboard;
export default connect()(Footer);
