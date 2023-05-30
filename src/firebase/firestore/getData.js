import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebase_app from "../config";

const db = getFirestore(firebase_app);

export default async function getDocuments(name) {
  let result = null;
  let error = null;

  try {
    const querySnapshot = await getDocs(collection(db, name));
    result = querySnapshot.docs.map((doc) => doc.data());
  } catch (e) {
    error = e;
  }

  return { result, error };
}
