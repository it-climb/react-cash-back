import firebase from 'firebase';

try
{

//     var config = {
//     apiKey: "AIzaSyDUrve5V2jap_jM27aoRX3Eqv-g9z6RR1Y",
//     authDomain: "reactapp-b838f.firebaseapp.com",
//     databaseURL: "https://reactapp-b838f.firebaseio.com",
//     storageBucket: "reactapp-b838f.appspot.com",
//     messagingSenderId: "250175130066"
// };
    let config = {
        apiKey: "AIzaSyBoyo6rPXCrFJow0YpD3GLuzGt6CEVLmbo",
        authDomain: "cashback-473c1.firebaseapp.com",
        databaseURL: "https://cashback-473c1.firebaseio.com",
        projectId: "cashback-473c1",
        storageBucket: "cashback-473c1.appspot.com",
        messagingSenderId: "577495924368"
    };

    firebase.initializeApp(config);
}
catch(e){
    console.error('Firebase init error.');
    console.error(e);
}

// firebase.auth().signInWithPopup(provider).then(function(result) {
//     // This gives you a Google Access Token.
//     var token = result.credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
// });

export let googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export let githubAuthProvider = new firebase.auth.GithubAuthProvider();
export let firebaseRef = firebase.database().ref();
export default firebase;
