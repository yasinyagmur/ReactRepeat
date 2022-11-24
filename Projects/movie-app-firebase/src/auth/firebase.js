import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

//! --------------------------------CONFIG START

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//! --------------------------------CONFIG END

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//* Yeni Kullanıcı oluşturma kısmı -New user
export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log(userCredential);
  } catch (error) {
    console.log(error);
  }
};

//* Var olan kullanıcı girişi- user login

export const sigIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    // sessionStorage.setItem("user", JSON.stringify(userCredential.user));
    console.log(userCredential);
  } catch (error) {
    navigate("/register");
    console.log(error);
  }
};
export const userObserver = (setCurrentUser) => {
  // * kullanıcı  varmı yokmu kontrolü sağıyor

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User

      setCurrentUser(user);
    } else {
      setCurrentUser(false);
    }
  });
};

// * user logouth
export const logOut = (navigate) => {
  signOut(auth);
  navigate("/");
};
