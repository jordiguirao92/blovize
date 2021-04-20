import firebase from "firebase/app";
import 'firebase/auth';

export async function singup(email, password) {
    try {
        const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log(result)
        return true;
    } catch(error){
        console.log(error);
        return false;
    }
}

export async function login(email, password) {
    try {
      const result = await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log(result);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  
  export function registerAuthObserver(callback) {
    firebase.auth().onAuthStateChanged(callback);
  }
  
  export function logout() {
    firebase.auth().signOut();
  }