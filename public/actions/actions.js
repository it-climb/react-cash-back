import * as ACTIONS from './actionHelper';
import firebase, {googleAuthProvider, githubAuthProvider, firebaseRef} from '../../src/firebase/firebase';
import {hashHistory}   from 'react-router';


//
// User's actions
//
export let addUserAction = (userObj) => {
    return {
        type: ACTIONS.ADD_USER,
        ...userObj
    };
};

export let updateUserAction = (userObj) => {
    return {
        type: ACTIONS.UPDATE_USER,
        ...userObj
    };
};

export let removeUserAction = (id) => {
    return {
        type: ACTIONS.REMOVE_USER,
        id
    };
};

export let addSetOfUsersAction = (users) => {
    return {
        type: ACTIONS.ADD_SET_OF_USER,
        users
    };
};

export let startUpdateUserAction = (userObj) =>{
    return (dispatch, getState)=>{
        let uid = getState().auth.uid;
        let update = {
            name: userObj.name,
            age: userObj.age
        };

        let usersRef = firebaseRef.child(`users/${uid}/users/${userObj.id}`);
        return usersRef.update(update).then(()=>{
            dispatch(updateUserAction(userObj));
        });
    };
};

export let startAddUserAction = (userObj) => {
    return (dispatch, getState) => {

        let uid = getState().auth.uid;
        let userRef = firebaseRef.child(`users/${uid}/users`).push(userObj);

        return userRef.then(() => {
            dispatch(addUserAction({
                ...userObj,
                id: userRef.key
            }));
        });
    };
};

// export var startAddSetOfUsers = () => {
//     return (dispatch, getState) => {
//         var uid = getState().auth.uid;
//
//         var usersRef = firebaseRef.child(`users/${uid}/users`);
//
//         return usersRef.once('value').then((snapshot) => {
//             var users = snapshot.val() || {};
//
//             var parsedUsers = [];
//
//             Object.keys(users).forEach((usersId) => {
//                 let payments = [];
//                 for(let key in users[usersId].payments) {
//                   payments.push({
//                       id: key,
//                       ...users[usersId].payments[key]
//                   });
//
//                 }
//
//                 parsedUsers.push({
//                     id: usersId,
//                     ...users[usersId],
//                     payments: payments
//                 });
//             });
//
//             dispatch(addSetOfUsersAction(parsedUsers));
//         });
//     };
// };

export let startRemoveUserAction = (id) => {
  return (dispatch, getState) => {
      let uid = getState().auth.uid;

      let usersRef = firebaseRef.child(`users/${uid}/users/${id}`);

      return usersRef.remove().then(()=>{
          dispatch(removeUserAction(id));
          dispatch(lostFocusUserAction());
      });
  };
};

//
// User select actions
//
export let selectUserAction = (selectedUser) => {
    return {
        type: ACTIONS.USER_WAS_SELECTED,
        selectedUser
    };
};

export let lostFocusUserAction = () => {
    return {
        type: ACTIONS.USER_LOST_FOCUS,
        selectedUser: false
    };
};

//
// Payments actions
//
// export var addPaymentToUserAction = (userId, payment) => {
//     return {
//         type: ACTIONS.ADD_PAYMENT,
//         userId,
//         payment
//     };
// };

// export var removePaymentFromUserAction = (userId, paymentId) => {
//     return {
//         type: ACTIONS.REMOVE_PAYMENT,
//         userId,
//         paymentId
//     };
// };

// export var updatePaymentOfUserAction = (userId, payment)=>{
//     return {
//         type: ACTIONS.UPDATE_PAYMENT,
//         userId,
//         payment
//     };
// };

// export var startAddPaymentToUserAction = (userId, payment) =>{
//     return (dispatch, getState)=>{
//         var uid = getState().auth.uid;
//
//         var usersRef = firebaseRef.child(`users/${uid}/users/${userId}/payments`).push(payment);
//         return usersRef.then(()=>{
//
//             dispatch(addPaymentToUserAction(userId, {id: usersRef.key, ...payment}));
//         });
//     };
// };

// export var startRemovePaymentFromUserAction = (userId, paymentId) =>{
//     return (dispatch, getState)=>{
//         var uid = getState().auth.uid;
//
//         var usersRef = firebaseRef.child(`users/${uid}/users/${userId}/payments/${paymentId}`);
//         return usersRef.remove().then(()=>{
//             dispatch(removePaymentFromUserAction(userId, paymentId));
//         });
//     };
// };

// export var startUpdatePaymentOfUserAction = (userId, payment) =>{
//     return (dispatch, getState)=>{
//         var uid = getState().auth.uid;
//         var update = {
//             title: payment.title,
//             amount: payment.amount
//         };
//
//         var usersRef = firebaseRef.child(`users/${uid}/users/${userId}/payments/${payment.id}`);
//         return usersRef.update(update).then(()=>{
//             dispatch(updatePaymentOfUserAction(userId, payment));
//         });
//     };
// };

//
// Auth actions
//
export let login = (uid, accessToken) => {
    return {
        type: ACTIONS.LOGIN,
        uid,
        accessToken
    };
};

export let logout = () => {
    return {
        type: ACTIONS.LOGOUT
    };
};

// export var startLoginWithGoogleAction = () =>{
//     return (dispatch, getSate)=>{
//         return firebase.auth().signInWithPopup(googleAuthProvider).then(function(result) {
//             let token = result.credential.accessToken;
//             let uid = result.user.uid;
//             let url = result.user.photoURL;
//
//             dispatch(login(uid, token));
//             dispatch(avatarUrlAction(url));
//             hashHistory.push('users');
//         });
//     };
// }


// export var startLoginWithGitHubAction = () =>{
//     return (dispatch, getSate)=>{
//         return firebase.auth().signInWithPopup(githubAuthProvider).then(function(result) {
//             let token = result.credential.accessToken;
//             let uid = result.user.uid;
//             let url = result.user.photoURL;
//
//             dispatch(login(uid, token));
//             dispatch(avatarUrlAction(url));
//             hashHistory.push('users');
//         });
//     };
// }

export let startLoginWithEmailAndPassword = (email, password) =>{
    return (dispatch, getSate)=>{
        return firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
            let token = result.refreshToken;
            let uid = result.uid;

            dispatch(login(uid, token));
            hashHistory.push('users');
        });
    };
}

export let startLogoutAction = () =>{
    return (dispatch, getSate)=>{
        return firebase.auth().signOut().then(function() {
            dispatch(logout());
            dispatch(avatarUrlAction('https://www.mautic.org/media/images/default_avatar.png'));
            dispatch(lostFocusUserAction());
            hashHistory.push('/');
        });
    };
}

// export var avatarUrlAction = (avatarUrl) => {
//     return {
//         type: ACTIONS.SET_AVATAR,
//         avatarUrl
//     };
// };