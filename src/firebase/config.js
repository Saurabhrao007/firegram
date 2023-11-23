import firebase from 'firebase/compat/app';
import "firebase/compat/storage";
import "firebase/compat/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNviO-SFVZY-8mQqiQfiO7gzDj0dM9CsU",
    authDomain: "firegram-4cb9c.firebaseapp.com",
    projectId: "firegram-4cb9c",
    storageBucket: "firegram-4cb9c.appspot.com",
    messagingSenderId: "972241106912",
    appId: "1:972241106912:web:be0dcff89ecb4a65279d85"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectStorage, timestamp }
