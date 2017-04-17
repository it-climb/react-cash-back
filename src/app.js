import React            from 'react';
import ReactDOM         from 'react-dom';
import {Provider}       from 'react-redux';
import { Router,
         Route,
         hashHistory,
         IndexRoute }   from 'react-router';

import firebase,
       {firebaseRef}    from './firebase/firebase';

import Main             from './components/main/main';
import TitleDashboard   from './components/title_dashboard/title_dashboard';
import UsersList        from './components/users/users-list';
import UserDetails      from './components/users/user-details';
import Login            from './components/login/Login';
import store            from './store/store';

import './style/style.scss';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                {/*<Route path="users" component={UsersList} onEnter={requireAuth}/>*/}
                {/*<Route path="user-details" component={UserDetails} onEnter={requireAuth}/>*/}
                <IndexRoute component={TitleDashboard}/>
                {/*<Route path="*" component={NoMatch}/>*/}
                {/*<Route path="login" component={Login}/>*/}
            </Route>
        </Router>
    </Provider>
,document.getElementById('app'));
