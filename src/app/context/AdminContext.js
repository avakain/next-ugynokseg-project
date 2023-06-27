"use client"
import { addDoc, collection, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db, storage } from '@/firebase/config'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { createContext, useState } from 'react';

const AdminContext = createContext();

const Provider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [onDelete, setOnDelete] = useState(false);
  const [iSimageUpload, setIsImageUpload] = useState(null);

  const uploadImage = async (folderName, fileName, documentRef) => {
    if (iSimageUpload == null) return;
    else {
      const storageRef = ref(
        storage,
        `${folderName}/${fileName.toLowerCase().replace(/\s+/g, '-').replace(/(\W+)/g, '')} `
      )
      try {
        const snapshot = await uploadBytes(storageRef, iSimageUpload);
        const downloadURL = await getDownloadURL(snapshot.ref);
        await updateDoc(documentRef, {
          imageLink: downloadURL,
        });
        alert('Sikeres feltöltés');
        setIsImageUpload(null);
      } catch (error) {
        console.log('Error uploading image:', error);
      }
    }
  };

  const extractFileNameFromURL = (url) => {
    const startIndex = url.indexOf('%') + 3;
    const endIndex = url.lastIndexOf('%');
    const fileName = url.substring(startIndex, endIndex);
    return fileName;
  }

  const handleDeleteItem = async (itemName, item) => {
    await deleteDoc(doc(db, itemName, item.id));
    setOpen(false);
  };


  const handleSave = async (item, form) => {
    try {
      const documentRef = await addDoc(collection(db, item), form);
      setOpen(false)
      if (iSimageUpload && item !== 'testimonials') {
        const documentId = documentRef.id;
        const collectionRef = collection(db, item);
        const documentRefToUpdate = doc(collectionRef, documentId);
        await uploadImage(item, form.name, documentRefToUpdate);
        setIsImageUpload(null);
        setOpen(false);
      }
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };


  const valueToShare = {
    isOpen,
    setOpen,
    onDelete,
    setOnDelete,
    handleSave,
    iSimageUpload,
    setIsImageUpload,
    uploadImage,
    extractFileNameFromURL,
    handleDeleteItem,
  }

  return (
    <AdminContext.Provider value={valueToShare}>
      {children}
    </AdminContext.Provider>
  );
};

export { Provider, AdminContext };

