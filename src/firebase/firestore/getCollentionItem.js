import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebase_app from "../config";

const db = getFirestore(firebase_app);

export default async function getCollentionItem(name) {
  try {
    const querySnapshot = await getDocs(collection(db, name));
    const documents = querySnapshot.docs.map((doc) => {
      const documentData = doc.data();
      const documentId = doc.id;
      return { id: documentId, ...documentData };
    });
    console.log(documents);
  } catch (error) {
    console.log(error);
  }
};


