import firebase from "firebase/app";
import "firebase/firestore";

let db;
function getDb() {
  if (!db) {
    db = firebase.firestore();
  }
  return db;
}

export async function createObjectWithId(collection, object, id) {
  try {
    const db = getDb();
    console.log(collection, id, object)
    await db.collection(collection).doc(id).set(object);
    return { success: true };
  } catch (error) {
    console.log('IMTCHLG ~ file: db.js ~ line 18 ~ createObjectWithId ~ error', error);
    return { success: false };
  }
}

export async function createObject(collection, object) {
  try {
    const db = getDb();
    const docRef = await db.collection(collection).add(object);
    return { success: true, data: docRef.id };
  } catch (error) {
    console.log('IMTCHLG ~ file: db.js ~ line 29 ~ createObject ~ error', error);
    return { success: false };
  }
}

export async function getObjectById(collection, id) {
  try {
    const db = getDb();
    const doc = await db.collection(collection).doc(id).get();
    if (doc.exists) {
      const data = doc.data();
      return { success: true, data: { ...data, id: doc.id } };
    }
    return { success: false, data: null };
  } catch (error) {
    console.log('IMTCHLG ~ file: db.js ~ line 43 ~ getObjectById ~ error', error);
    return { success: false };
  }
}

export async function listCollection(collection) {
  try {
    const db = getDb();
    const querySnapshot = await db.collection(collection).get();
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() })  
    });
    return { success: true, data };

  } catch(error) {
    console.log('IMTCHLG ~ file: db.js ~ line 59 ~ listCollection ~ error', error);
    return { success: false };
  }
}

export async function listCollectionFiltered(collection, field, condition, value) {
  try {
    const db = getDb();
    const querySnapshot = await db.collection(collection).where(field, condition, value).get();
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() })  
    });
    return { success: true, data };

  } catch(error) {
    console.log('IMTCHLG ~ file: db.js ~ line 59 ~ listCollectionFiltered ~ error', error);
    return { success: false };
  }
}

export async function updateCollectionObject(collection, id, values) {
  try {
    const db = getDb();
    const querySnapshot = await db.collection(collection).doc(id).update(values);
    return { success: true};

  } catch(error) {
    console.log(error);
    return { success: false };
  }
}

