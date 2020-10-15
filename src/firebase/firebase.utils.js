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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error creating user: ', error.message);
        }
    }

    // console.log(snapShot);
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;