import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import './index.css';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

firebase.initializeApp({
    apiKey: "AIzaSyBF8DUtNH-P8-ncQigA0W9Yp9dOCEhBv1A",
    authDomain: "fotosfamilia-e2cf5.firebaseapp.com",
    databaseURL: "https://fotosfamilia-e2cf5.firebaseio.com",
    projectId: "fotosfamilia-e2cf5",
    storageBucket: "",
    messagingSenderId: "848959077894",
    appId: "1:848959077894:web:fab55f8ac6f6acb2"
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
