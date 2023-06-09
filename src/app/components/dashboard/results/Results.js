import { useState, useEffect } from 'react';
import getDoument from "@/firebase/firestore/getData";
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from "@/firebase/config";
import InputComponent from "../../input/Inputcomponent";
import useAdminContext from '@/app/hooks/use-admin-context';
import { BsPencil, BsFillTrash3Fill } from 'react-icons/bs';
import { TfiExchangeVertical } from 'react-icons/tfi';
import { AiOutlineUpload } from 'react-icons/ai';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { IoIosSave } from 'react-icons/io';
import Addresultmodal from './Addresultmodal';
import Alertdelete from "../../alert/Alertdelete";

export default function Addresult() {
  const [results, setResults] = useState([]);
  const [edit, setEdit] = useState(false);
  const { isOpen, setOpen, iSimageUpload, setIsImageUpload, uploadImage, extractFileNameFromURL, handleDeleteItem } = useAdminContext();
  const [onChange, setOnChange] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  const [form, setform] = useState({
    duration: '',
    name: '',
    subscribers: '',
    views: '',
    imageLink: '',
  });


  useEffect(() => {
    const fetchData = async () => {
      const { result, error } = await getDoument('results');
      if (error) {
        console.log(error);
      } else {
        setResults(result);
      }
    };
    fetchData();
  }, [isOpen, onChange, openDeleteAlert]);



  const handleEdit = (index) => {
    setEdit(index);
    setform((prevState) => ({
      ...prevState,
      duration: results[index].duration,
      name: results[index].name,
      subscribers: results[index].subscribers,
      views: results[index].views,
      imageLink: results[index].imageLink,
    }));
  };

  const handleSave = async (index) => {
    setEdit(null);
    const documentId = results[index].id;
    const documentRef = doc(db, "results", documentId);
    await setDoc(documentRef, {
      duration: form.duration,
      name: form.name,
      subscribers: form.subscribers,
      views: form.views,
    });
    iSimageUpload ? await uploadImage('influencers', form.name, documentRef) :
      await updateDoc(documentRef, {
        imageLink: form.imageLink,
      });
    setOpen(false);
    setOnChange(!onChange);
  }

  const handleModal = () => {
    setOpen(true);
  }


  return (
    <div className="xs:m-4 md:y-4">
      <div className="flex items-center my-8 justify-between ">
        <div className="text-2xl "><p>Eredmény kezelő</p></div>
        <div
          className="flex flex-col"
          onClick={() => handleModal()}
        >
          <MdOutlineLibraryAdd
            size={30}
            className="cursor-pointer"
          /></div>
      </div>
      <div>
        {isOpen &&
          <Addresultmodal
            isOpen={isOpen}
            form={form}
            setForm={setform}
          />}
        {results.map((result, index) => (
          <div
            key={result.id}
            className={`flex ${edit !== index ? 'xs:flex-row border-gray-200 ' : 'xs:flex-col border-red-400 bg-gray-100'} justify-between border-2 font-light  border-gray-200
            p-3 rounded-lg my-2`}
          >
            <div className="sm:grid">
              {edit === index ? (
                <div className="grid">
                  <InputComponent
                    id={result.name}
                    label="Név"
                    value={form.name}
                    onChange={(e) => setform({ ...form, name: e.target.value })}
                  />
                  <InputComponent
                    id={result.duration}
                    label="Kampány hossza (hónap)"
                    value={form.duration}
                    onChange={(e) => setform({ ...form, duration: e.target.value })}
                    type={'number'}
                  />
                  <InputComponent
                    id={result.subscribers}
                    label="Feliratkozók"
                    value={form.subscribers}
                    onChange={(e) => setform({ ...form, subscribers: e.target.value })}
                    type={'number'}
                  />
                  <InputComponent
                    id={result.views}
                    label="Nézettség"
                    value={form.views}
                    onChange={(e) => setform({ ...form, views: e.target.value })}
                    type={'number'}
                  />
                  <div>
                    <div className="grid ">
                      <label htmlFor={`result${result.name}`} className="text-lg">
                        {result.imageLink === '' ? 'Kép feltöltés' : 'Feltöltött kép:'}
                      </label>
                      <input
                        required
                        type="file"
                        id={`result${result.name}`}
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => setIsImageUpload(e.target.files[0])}
                      />
                      <label htmlFor={`result${result.name}`} className="cursor-pointer">
                        {result.imageLink === '' ? <AiOutlineUpload size={30} /> :
                          (<div className="flex">
                            <div className="mr-5">
                              {extractFileNameFromURL(result.imageLink)}
                            </div>
                            <div >
                              <TfiExchangeVertical />
                            </div>
                          </div>)}
                      </label>
                    </div>
                  </div>
                </div>
              ) : (
                result.name
              )}
            </div>
            <div className="flex items-start justfycontent-left ml-auto my-1">
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
                  <IoIosSave
                    className="mr-3"
                    style={{ cursor: 'pointer' }}
                  />
                ) : (
                  <BsPencil
                    className="mr-3"
                    style={{ cursor: 'pointer' }}
                  />
                )}
              </div>
              <div >
                <BsFillTrash3Fill
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setOpenDeleteAlert(true);
                  }}
                />
                {openDeleteAlert && (
                  <Alertdelete
                    handleDelete={() => handleDeleteItem('results', result)}
                    setOpenDeleteAlert={() => setOpenDeleteAlert(false)}
                    onChange={() => setOnChange(!onChange)}
                  />
                )
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
