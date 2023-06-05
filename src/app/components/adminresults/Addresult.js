import getDoument from "@/firebase/firestore/getData";
import { useState, useEffect } from 'react';
import { BsPencil, BsFillTrash3Fill } from 'react-icons/bs';
import { IoIosSave } from 'react-icons/io';
import InputComponent from "../input/Inputcomponent";
import { MdOutlineLibraryAdd } from 'react-icons/md';
import Modal from "../modal/Modal";
import { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from "@/firebase/config";

export default function Addresult() {
  const [results, setResults] = useState([]);
  const [edit, setEdit] = useState(false);
  const { isOpen, setOpen } = useContext(ModalContext)
  const [reRender, setReRender] = useState(false);
  const [form, setForm] = useState({
    duration: '',
    name: '',
    subscribers: '',
    views: '',
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
  }, [reRender]);

  const handleEdit = (index) => {
    setEdit(index);
    setForm({
      duration: results[index].duration,
      name: results[index].name,
      subscribers: results[index].subscribers,
      views: results[index].views,
    });
  };

  const handleSave = async (index) => {
    setEdit(false);
    const documentId = results[index].id;
    const documentRef = doc(db, "results", documentId);
    await setDoc(documentRef, {
      duration: form.duration,
      name: form.name,
      subscribers: form.subscribers,
      views: form.views,
    });
    setReRender(!reRender);
  }

  const handleDelete = async (index) => {
    const documentId = results[index].id;
    const documentRef = doc(db, "results", documentId);
    await deleteDoc(documentRef);
    setReRender(!reRender);
  };

  const handleModal = () => {
    setOpen(!isOpen);
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
          <Modal
            result
            isOpen={isOpen}
            form={form}
            setForm={setForm}
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
                  <form>
                    <InputComponent
                      id={form.name}
                      label="Név"
                      req
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <InputComponent
                      id={result.duration}
                      label="Kampány hossza (hónap)"
                      value={form.duration}
                      onChange={(e) => setForm({ ...form, duration: e.target.value })}
                      type={'number'}
                    />
                    <InputComponent
                      id={result.subscribers}
                      label="Feliratkozók"
                      value={form.subscribers}
                      onChange={(e) => setForm({ ...form, subscribers: e.target.value })}
                      type={'number'}
                    />
                    <InputComponent
                      id={result.views}
                      label="Nézettség"
                      value={form.views}
                      onChange={(e) => setForm({ ...form, views: e.target.value })}
                      type={'number'}
                    />
                  </form>
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
              <div>
                <BsFillTrash3Fill
                  onClick={() => handleDelete(index)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
