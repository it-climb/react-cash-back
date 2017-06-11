import React            from 'react';
import ReactDOM         from 'react-dom';
import {Provider}       from 'react-redux';
import { Router,
         Route,
         hashHistory,
         IndexRoute }   from 'react-router';

// import firebase,
//        {firebaseRef}    from '../src/firebase/firebase';

import Main             from './components/main/Main';
import TitleDashboard   from './components/title_dashboard/TitleDashboard';
import Login            from './components/login/Login';
import Registration     from './components/registration/Registration';
import ForgotPassword   from './components/forgot_password/ForgotPassword';
import { store }        from './store/store';
// import { store }            from './store/store';

import './style/style.scss';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={TitleDashboard}/>
                {/*<Route path="*" component={NoMatch}/>*/}
                <Route path="registration" component={Registration}/>
                <Route path="login" component={Login}/>
                <Route path="forgot_password" component={ForgotPassword}/>
            </Route>
        </Router>
    </Provider>
,document.getElementById('app'))

