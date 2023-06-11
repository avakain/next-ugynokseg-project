import { useState, useEffect } from 'react';
import getDoument from "@/firebase/firestore/getData";
import useAdminContext from '@/app/hooks/use-admin-context';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from "@/firebase/config";
import InputComponent from "../../input/Inputcomponent";
import Addinfluencermodal from "./Addinfluencermodal";
import { BsPencil, BsFillTrash3Fill } from 'react-icons/bs';
import { IoIosSave } from 'react-icons/io';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { TfiExchangeVertical } from 'react-icons/tfi';
import { AiOutlineUpload } from 'react-icons/ai';
import Alertdelete from "../../alert/Alertdelete";


export default function AddInfluencers() {
  const { isOpen, setOpen, iSimageUpload, setIsImageUpload, uploadImage, extractFileNameFromURL, handleDeleteItem } = useAdminContext();
  const [influencers, setInfluencers] = useState([]);
  const [edit, setEdit] = useState(false);
  const [onChange, setOnChange] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState(null);
  const [form, setForm] = useState({
    name: '',
    socialmedia: {
      tiktok: '',
      instagram: '',
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
  }, [isOpen, onChange, openDeleteAlert]);


  useEffect(() => {

    if (form.imageLink) {
      console.log(form.imageLink);
    }
  }, [form.imageLink]);

  const handleEdit = (index) => {
    setEdit(index);
    console.log(influencers[index].imageLink);
    setForm((prevState) => ({
      ...prevState,
      name: influencers[index].name,
      socialmedia: {
        tiktok: influencers[index].socialmedia.tiktok,
        instagram: influencers[index].socialmedia.instagram,
      },
      imageLink: influencers[index].imageLink,
    }));
  };




  const handleSave = async (index) => {
    setEdit(null);
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
    iSimageUpload ? await uploadImage('influencers', form.name, documentRef) :
      await updateDoc(documentRef, {
        imageLink: form.imageLink,
      });
    setOpen(false);
    setOnChange(!onChange);
  }

  const handleModal = () => {
    setOpen(true);
  };


  useState(() => {
    if (form.imageLink) {
      console.log(form.imageLink);
    }
  }, [])

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
          <Addinfluencermodal
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
                      <label htmlFor={`influencer${influencer.name} `} className="text-lg">
                        {influencer.imageLink === '' ? 'Kép feltöltés' : 'Feltöltött kép:'}
                      </label>
                      <input
                        required
                        type="file"
                        id={`influencer${influencer.name} `}
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => setIsImageUpload(e.target.files[0])}
                      />
                      <label htmlFor={`influencer${influencer.name} `} className="cursor-pointer">
                        {influencer.imageLink === '' ?
                          <AiOutlineUpload size={30} />
                          :
                          <div className="flex">
                            <div className="mr-5">
                              {extractFileNameFromURL(influencer.imageLink)}
                            </div>
                            <div >
                              <TfiExchangeVertical />
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
                    setForm({
                      name: '',
                      socialmedia: {
                        tiktok: '',
                        instagram: '',
                      },
                      imageLink: '',
                    });

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
                  onClick={() => {
                    setOpenDeleteAlert(true);
                    setEdit(influencer)
                  }}
                />
                {openDeleteAlert && (
                  <Alertdelete
                    handleDelete={() => handleDeleteItem('influencers', edit)}
                    setOpenDeleteAlert={() => setOpenDeleteAlert(false)}
                    onChange={() => setOnChange(!onChange)}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}