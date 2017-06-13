import React from 'react';
import {connect}  from 'react-redux';
import {Link, browserHistory}   from 'react-router';
import _ from 'lodash';
import {Row, Col, Form, FormGroup, FormControl, Button, Alert, ControlLabel, Navbar, Table} from "react-bootstrap";

class TitleTopNav extends React.Component {
  _handleGoTo(goToPage) {
    return browserHistory.push.bind(browserHistory, goToPage);
  }

  render() {
    return (
      <div className="title-top-nav">
        <Row>
          <Col lg={7} md={7} sm={7} xs={7}>
            <div className="title-top-nav-left">
              <div className='title-top-nav-button'>
                <Link to="/" className="title-top-nav-button" activeStyle={{fontWeight: 'bold'}}>CASHBACK</Link>
              </div>

              <div onClick='' className='title-top-nav-button'>
                Банковский КБ
              </div>
              <div onClick='' className='title-top-nav-button'>
                КБ от Поставщика
              </div>

            </div>
          </Col>
          <Col lg={5} md={5} sm={5} xs={5}>
            <div className="title-top-nav-right">
              <Row>
                <Link to="/login" className="title-top-nav-button" activeStyle={{fontWeight: 'bold'}}>Вход</Link>
                <Link to="/registration" className="title-top-nav-button"
                      activeStyle={{fontWeight: 'bold'}}>Регистрация</Link>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TitleTopNav;
// export default connect((state) => {return state;})(TitleTopNav);

