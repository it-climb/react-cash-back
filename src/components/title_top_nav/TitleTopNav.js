import React from 'react';
import {connect}  from 'react-redux';
import { Link }   from 'react-router';
import {startLogoutAction} from './../../actions/actions';
import _ from 'lodash';
import {Row, Col, Form, FormGroup, FormControl, Button, Alert, ControlLabel, Navbar, Table} from "react-bootstrap";


var TitleTopNav = React.createClass({

    render: function () {
        return (
            <div className = "title-top-nav">
                <Row>
                    <Col lg={7} md={7} sm={7} xs={7}>
                    <div className = "title-top-nav-left">
                        <div className = 'title-top-nav-button'>
                            LOGO
                        </div>
                        <div onClick = '' className = 'title-top-nav-button'>
                            Банковский КБ
                        </div>
                        <div onClick = '' className = 'title-top-nav-button'>
                            КБ от Поставщика
                        </div>
                    </div>
                    </Col>
                    <Col lg={5} md={5} sm={5} xs={5}>
                    <div className="title-top-nav-right">
                        <Row>
                            <div onClick = '' className = 'title-top-nav-button'>
                                Вход
                            </div>
                            <div onClick = '' className = 'title-top-nav-button'>
                                Регистрация
                            </div>
                        </Row>
                    </div>
                    </Col>
                </Row>
            </div>
        );
    }
});

export default TitleTopNav;
// export default connect((state) => {return state;})(TitleTopNav);

