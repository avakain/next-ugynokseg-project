import getDoument from "@/firebase/firestore/getData";
import { useState, useEffect } from 'react';
import { BsPencil, BsFillTrash3Fill } from 'react-icons/bs';
import { IoIosSave } from 'react-icons/io';
import InputComponent from "../input/Inputcomponent";
import { MdOutlineLibraryAdd } from 'react-icons/md';
import Modal from "../modal/Modal";
import { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import { doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { storage, db } from "@/firebase/config";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { RxCross1 } from 'react-icons/rx';
import { AiOutlineUpload } from 'react-icons/ai';

export default function AddInfluencers() {
  const [influencers, setInfluencers] = useState([]);
  const [edit, setEdit] = useState(false);
  const { isOpen, setOpen } = useContext(ModalContext)
  const [reRender, setReRender] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [form, setForm] = useState({
    name: '',
    socialmedia: {
      instagram: '',
      tiktok: '',
    },
    imageLink: '',
  });

  useEffect(() => {
    const fetchInfluencers = async () => {
      try {
        const { result, error } = await getDoument('influencers');
        if (error) {
          console.log(error);
        } else {
          setInfluencers(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchInfluencers();
  }, [reRender]);

  const handleEdit = (index) => {
    setEdit(index);
    setForm({
      name: influencers[index].name,
      socialmedia: {
        tiktok: influencers[index].socialmedia.tiktok,
        instagram: influencers[index].socialmedia.instagram,
      },
      imageLink: influencers[index].imageLink,
    });
  };
  console.log(form.imageLink)
  const handleSave = async (index) => {
    setEdit(false);
    const documentId = influencers[index].id;
    const documentRef = doc(db, "influencers", documentId);
    await setDoc(documentRef, {
      name: form.name,
      socialmedia: {
        tiktok: form.socialmedia.tiktok,
        instagram: form.socialmedia.instagram,
      },
    }
    );
    imageUpload && await uploadImage(index);
    setReRender(!reRender);
  }

  const handleDelete = async (index) => {
    const documentId = influencers[index].id;
    const documentRef = doc(db, "influencers", documentId);
    await deleteDoc(documentRef);
    setReRender(!reRender);
  };

  function extractFileNameFromURL(url) {
    const startIndex = url.lastIndexOf('%') + 3;
    const endIndex = url.lastIndexOf('?');
    const fileName = url.substring(startIndex, endIndex);
    return fileName;
  }

  const handleModal = () => {
    setOpen(!isOpen);
  };



  const uploadImage = async (index) => {
    if (imageUpload == null) return;
    else {
      const storageRef = ref(storage, `influencers/${form.name.toLowerCase().replace(/\s+/g, '-').replace(/(\W+)/g, '')}`);
      try {
        const snapshot = await uploadBytes(storageRef, imageUpload);
        const downloadURL = await getDownloadURL(snapshot.ref);
        console.log('File available at', downloadURL);
        const documentId = influencers[index].id;
        console.log(documentId);
        const documentRef = doc(db, "influencers", documentId);
        await updateDoc(documentRef, {
          imageLink: downloadURL,
        });
        alert('Sikeres feltöltés');
      } catch (error) {
        console.log('Error uploading image:', error);
      }
    }
  }

  return (
    <div className="xs:m-4 md:y-4">
      <div className="flex items-center my-8 justify-between">
        <div className="text-2xl">
          <p>Influencer kezelő</p>
        </div>
        <div className="flex flex-col" onClick={handleModal}>
          <MdOutlineLibraryAdd
            size={30}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
      <div>
        {isOpen && (
          <Modal
            influencer
            isOpen={isOpen}
            form={form}
            setForm={setForm}
          />
        )}
        {influencers?.map((influencer, index) => (
          <div
            key={influencer.id}
            className={`flex ${edit !== index ? 'xs:flex-row border-gray-200' : 'xs:flex-col border-red-400 bg-gray-100'
              } justify-between border-2 font-light border-gray-200 p-3 rounded-lg my-2`}
          >
            <div
              className="sm:grid">
              {edit === index ? (
                <div className="grid">
                  <InputComponent
                    required
                    id={influencer.name}
                    label="Név"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <InputComponent
                    id={influencer.socialmedia.tiktok ? null : influencer.socialmedia.instagram}
                    label="Tiktok követők"
                    value={form.socialmedia.tiktok}
                    onChange={(e) =>
                      setForm({ ...form, socialmedia: { ...form.socialmedia, tiktok: e.target.value } })
                    }
                    type="number"
                  />
                  <InputComponent
                    id={influencer.socialmedia.instagram ? null : influencer.socialmedia.tiktok}
                    label="Instagram követők"
                    value={form.socialmedia.instagram}
                    onChange={(e) =>
                      setForm({ ...form, socialmedia: { ...form.socialmedia, instagram: e.target.value } })
                    }
                    type="number"
                  />
                  <div>
                    <div className="grid ">
                      <label htmlFor={`influencer${influencer.name}`} className="text-lg">
                        {influencer.imageLink === '' ? 'Kép feltöltés' : 'Feltöltött kép:'}
                      </label>
                      <input
                        required
                        type="file"
                        id={`influencer${influencer.name}`}
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => setImageUpload(e.target.files[0])}
                      />
                      <label htmlFor={`influencer${influencer.name}`} className="cursor-pointer">
                        {influencer.imageLink === '' ?
                          <AiOutlineUpload
                            size={30}
                          /> :
                          <div className="flex">
                            <div className="mr-5">
                              {extractFileNameFromURL(influencer.imageLink)}

                            </div>
                            <div >
                              <RxCross1 />
                            </div>
                          </div>
                        }
                      </label>

                    </div>
                  </div>
                </div>
              ) : (
                influencer.name
              )}
            </div>
            <div className="flex items-start justify-content-left ml-auto my-1">
              <div
                onClick={() => {
                  if (edit === index) {
                    handleSave(index);
                  } else {
                    handleEdit(index);
                  }
                }}
              >
                {edit === index ? (
                  <IoIosSave style={{ cursor: 'pointer' }} className="mr-3" />
                ) : (
                  <BsPencil style={{ cursor: 'pointer' }} className="mr-3" />
                )}
              </div>
              <div>
                <BsFillTrash3Fill
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleDelete(index)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}