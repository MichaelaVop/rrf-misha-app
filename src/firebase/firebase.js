import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import { createStore } from "redux";
import { createFirestoreInstance } from "redux-firestore";
import { rootReducer } from "../store/store";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
}

firebase.initializeApp(firebaseConfig);

const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true,
};
  
const initialState = {};
export const store = createStore(rootReducer, initialState);
  
export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};



export default firebase

