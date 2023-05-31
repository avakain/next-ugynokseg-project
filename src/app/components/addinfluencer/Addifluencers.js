import getDoument from "@/firebase/firestore/getData";
import { useState, useEffect } from 'react';
import { BsPencil, BsFillTrash3Fill } from 'react-icons/bs';
import { IoIosSave } from 'react-icons/io';
import InputComponent from "../input/Inputcomponent";
import { MdOutlineLibraryAdd } from 'react-icons/md';
import Modal from "../modal/Modal";
import { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import { collection, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from "@/firebase/config";

export default function AddInfluencers() {
  const [influencers, setInfluencers] = useState([]);
  const [edit, setEdit] = useState(false);
  const { isOpen, setOpen } = useContext(ModalContext)
  const [updateFlag, setUpdateFlag] = useState(false);
  const [form, setForm] = useState({
    image: '',
    name: '',
    socialmedia: {
      instagram: '',
      tiktok: '',
    },
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
  }, [updateFlag]);

  const handleEdit = (index) => {
    setEdit(index);
    setForm({
      name: influencers[index].name,
      socialmedia: {
        tiktok: influencers[index].socialmedia.tiktok,
        instagram: influencers[index].socialmedia.instagram,
      },
    });
  };


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
    });
    setUpdateFlag(!updateFlag);
  }

  const handleDelete = async (index) => {
    const documentId = influencers[index].id;
    const documentRef = doc(db, "influencers", documentId);
    await deleteDoc(documentRef);
  };

  const handleModal = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="xs:m-4 md:y-4">
      <div className="flex items-center my-8 justify-between">
        <div className="text-2xl">
          <p>Influencer kezelő</p>
        </div>
        <div className="flex flex-col" onClick={handleModal}>
          <MdOutlineLibraryAdd size={30} />
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
            key={influencer.name}
            className={`flex ${edit !== index ? 'xs:flex-row border-gray-200' : 'xs:flex-col border-red-400 bg-gray-100'
              } justify-between border-2 font-light border-gray-200 p-3 rounded-lg my-2`}
          >
            <div className="sm:grid">
              {edit === index ? (
                <div className="grid">
                  <InputComponent
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
                  <InputComponent
                    id={`influencer${influencer.name}`}
                    label="Kép feltöltés"
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    type="text"
                  />
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
                <BsFillTrash3Fill style={{ cursor: 'pointer' }} onClick={() => handleDelete(index)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}