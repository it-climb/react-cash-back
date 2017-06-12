import React, {Component} from 'react';
import PropTypes from "prop-types";
import {
  Router,
  Route,
  hashHistory,
  IndexRoute
}   from 'react-router';

import Main             from './components/main/Main';
import TitleDashboard   from './components/title_dashboard/TitleDashboard';
import Login            from './components/login/Login';
import Registration     from './components/registration/Registration';
import ForgotPassword   from './components/forgot_password/ForgotPassword';

import './style/style.scss';

const {func} = PropTypes;

class App extends Component {

  componentDidMount() {
    this.props.loadProfessions();
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={TitleDashboard}/>
          {/*<Route path="*" component={NoMatch}/>*/}
          <Route path="registration" component={Registration}/>
          <Route path="login" component={Login}/>
          <Route path="forgot_password" component={ForgotPassword}/>
        </Route>
      </Router>
    );
  }
}

App.propTypes = {
  loadProfessions: func.isRequired,
};

export default App;


