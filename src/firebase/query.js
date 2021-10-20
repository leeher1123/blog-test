import { collection, getDocs, doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {db, storage} from "./firebase";

export const getCollectionList = async (collectionId) => {
  const querySnapshot = await getDocs(collection(db, collectionId));
  const result = [];
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    result.push({
      ...doc.data(),
      id: doc.id,
    })
  });
  return result;
}

export const getDocument = async (collectionId, docId) => {
  const docRef = doc(db, collectionId, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      ...docSnap.data(),
      id: docSnap.id
    }
  } else {
    return null;
  }
}

export const addDocument = async (collectionId, data) => {
  const newRef = doc(collection(db, collectionId));
  await setDoc(newRef, data);
}

export const setDocument = async (collectionId, docId, data) => {
  const docRef = doc(db, collectionId, docId);
  const result = await updateDoc(docRef, data);
  return result;
}

export const deleteDocument = async (collectionId, docId) => {
  await deleteDoc(doc(db, collectionId, docId));
}

export const uploadFile = async (file) => {
  try {
    const imageRef = ref(storage, 'test/' + file.name);
    const snapshot = await uploadBytesResumable(imageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  } catch (error) {
    console.error('Upload failed', error);
  };
}
