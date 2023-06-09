import InputComponent from '../input/Inputcomponent';
import { IoIosSave } from 'react-icons/io';
import { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import { RxCross1 } from 'react-icons/rx';
import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../../../firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useState, useEffect } from 'react';


export default function Modal({
  result,
  testimonial,
  influencer,
}) {

  const [forms, setForms] = useState({
    influencer: {
      name: '',
      socialmedia: {
        instagram: '',
        tiktok: '',
      },
      imageLink: '',
    },
    testimonial: {
      name: '',
      content: '',
    },
    result: {
      name: '',
      duration: '',
      subscribers: '',
      views: '',
      imageLink: '',
    },
  });

  const { isOpen, setOpen } = useContext(ModalContext);
  const [imageUpload, setImageUpload] = useState(null);


  async function save() {
    if (testimonial) {
      addDoc(collection(db, 'testimonials'), forms.testimonial)
        .then(() => {
          setOpen(!isOpen);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    } else if (result) {
      await addDoc(collection(db, 'results'), forms.result)
        .then(async () => {
          setOpen(!isOpen);
          await uploadImage('result');
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    } else if (influencer) {
      uploadImage('influencer');
    }
  }

  useEffect(() => {
    if (forms.influencer.imageLink) {
      addDoc(collection(db, 'influencers'), forms.influencer)
        .then(() => {
          setOpen((prevState) => !prevState);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    }
  }, [forms.influencer.imageLink]);

  useEffect(() => {
    if (forms.result.imageLink) {
      addDoc(collection(db, 'results'), forms.result)
        .then(() => {
          setOpen((prevState) => !prevState);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    }
  }, [forms.result.imageLink]);



  const uploadImage = async (item) => {
    if (imageUpload == null) return;
    else {
      const storageRef = ref(
        storage,
        `${item}/${forms[item].name
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/(\W+)/g, '')}`
      );
      try {
        const snapshot = await uploadBytes(storageRef, imageUpload);
        const downloadURL = await getDownloadURL(snapshot.ref);
        console.log('File available at', downloadURL);
        setForms((prevState) => ({
          ...prevState,
          [item]: {
            ...prevState[item],
            imageLink: downloadURL,
          },
        }));
        alert('Sikeres feltöltés');
      } catch (error) {
        console.log('Error uploading image:', error);
      }
    }
  };

}


const editUploadImage = async (item) => {
  if (imageUpload == null) return;
  else {
    const storageRef = ref(
      storage,
      `${item}/${forms[item].name
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/(\W+)/g, '')}`
    );
    try {
      const snapshot = await uploadBytes(storageRef, imageUpload);
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log('File available at', downloadURL);
      setForms((prevState) => ({
        ...prevState,
        [item]: {
          ...prevState[item],
          imageLink: downloadURL,
        },
      }));
      alert('Sikeres feltöltés');
    } catch (error) {
      console.log('Error uploading image:', error);
    }
  }
};