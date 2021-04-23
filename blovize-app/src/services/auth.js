import firebase from "firebase/app";
import "firebase/auth";

export async function singup(email, password) {
  try {
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log('IMTCHLG ~ file: auth.js ~ line 7 ~ singup ~ result', result);
    return { success: true, data: result.user.uid };
  } catch (error) {
    console.log('IMTCHLG ~ file: auth.js ~ line 8 ~ singup ~ error', error);
    return { success: false };
  }
}

export async function login(email, password) {
  try {
    const result = await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log('IMTCHLG ~ file: auth.js ~ line 18 ~ login ~ result', result);
    return true;
  } catch (error) {
    console.log('IMTCHLG ~ file: auth.js ~ line 21 ~ login ~ error', error);
    return false;
  }
}

export function registerAuthObserver(callback) {
  firebase.auth().onAuthStateChanged(callback);
}

export function logout() {
  firebase.auth().signOut();
}