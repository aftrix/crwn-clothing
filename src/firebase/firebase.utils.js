import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBzH7sYKaBR_lr2zjWxNUFb6OLUANTeHCs",
    authDomain: "crwn-clothing-1ed0f.firebaseapp.com",
    databaseURL: "https://crwn-clothing-1ed0f.firebaseio.com",
    projectId: "crwn-clothing-1ed0f",
    storageBucket: "crwn-clothing-1ed0f.appspot.com",
    messagingSenderId: "148789237989",
    appId: "1:148789237989:web:dc22ec0b3dd65aa179dc0c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;