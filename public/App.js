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

const routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={TitleDashboard}/>
    {/*<Route path="*" component={PageNotFound}/>*/}
    <Route path="/registration" component={Registration}/>
    <Route path="login" component={Login}/>
    <Route path="forgot_password" component={ForgotPassword}/>
  </Route>
);

class App extends Component {

  componentDidMount() {
    this.props.loadProfessions();
    console.log('App 24 cookie', document.cookie);
  }

  render() {
    return (
      <Router history={hashHistory}>
        {routes}
      </Router>
    );
  }
}

App.propTypes = {
  loadProfessions: func.isRequired,
};

export default App;


