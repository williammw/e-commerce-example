import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDlTnICN7h76iliOc70hiGR8a_vv72Njks",
    authDomain: "ecommerce-example-3798d.firebaseapp.com",
    databaseURL: "https://ecommerce-example-3798d.firebaseio.com",
    projectId: "ecommerce-example-3798d",
    storageBucket: "ecommerce-example-3798d.appspot.com",
    messagingSenderId: "302416114761",
    appId: "1:302416114761:web:f7fb1f22dd73818b6afb98",
    measurementId: "G-R48Y0F2X0E"
};
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;