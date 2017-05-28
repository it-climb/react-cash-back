import * as redux from 'redux';
import thunk from 'redux-thunk';

import {usersReduser, selectedUsersReduser, authReducer, avatarReducer}  from './../reducers/redusers';

let configure = (initialState = {}) => {

    let reducer = redux.combineReducers({
        users: usersReduser,
        selectedUser: selectedUsersReduser,
        auth: authReducer,
        avatar: avatarReducer
    });

    let _store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return _store;
};

let store = configure();

export default store;