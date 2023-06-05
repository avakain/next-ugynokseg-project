import getDoument from "@/firebase/firestore/getData";
import { useState, useEffect } from 'react';
import { BsPencil, BsFillTrash3Fill } from 'react-icons/bs';
import { IoIosSave } from 'react-icons/io';
import InputComponent from "../input/Inputcomponent";
import { MdOutlineLibraryAdd } from 'react-icons/md';
import Modal from "../modal/Modal";
import { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import { doc, deleteDoc, setDoc } from "firebase/firestore";
import { db, storage } from "@/firebase/config";


export default function Addresult() {
  const [testimonials, setTestimonials] = useState([]);
  const [edit, setEdit] = useState(false);
  const { isOpen, setOpen } = useContext(ModalContext);
  const [reRender, setReRender] = useState(false);
  const [form, setForm] = useState({
    name: '',
    content: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const { result, error } = await getDoument('testimonials');
      if (error) {
        console.log(error);
      } else {
        setTestimonials(result);
      }
    };
    fetchData();
  }, [reRender]);

  const handleEdit = (index) => {
    setEdit(index);
    setForm({
      name: testimonials[index].name,
      content: testimonials[index].content,
    });
  };

  const handleSave = async (index) => {
    setEdit(false);
    const documentId = testimonials[index].id;
    const documentRef = doc(db, "testimonials", documentId);
    await setDoc(documentRef, {
      name: form.name,
      content: form.content,
    });
    setReRender(!reRender);
  }

  const handleDelete = async (index) => {
    const documentId = testimonials[index].id;
    const documentRef = doc(db, "testimonials", documentId);
    await deleteDoc(documentRef);
    setReRender(!reRender);
  };

  const handleModal = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="xs:m-4 md:y-4">
      <div className="flex items-center my-8 justify-between ">
        <div className="text-2xl "><p>Értékelés kezelő</p></div>
        <div
          className="flex flex-col"
          onClick={handleModal}
        >
          <MdOutlineLibraryAdd
            size={30}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div>
        {isOpen && (
          <Modal
            testimonial
            isOpen={isOpen}
            form={form}
            setForm={setForm}
          />
        )}
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`flex ${edit !== index ? 'xs:flex-row border-gray-200 ' : 'xs:flex-col border-red-400 bg-gray-100'} justify-between border-2 font-light  border-gray-200 p-3 rounded-lg my-2`}
          >
            <div className="sm:grid">
              {edit === index ? (
                <div className="grid">
                  <form>
                    <InputComponent
                      required
                      id={testimonial.name}
                      label="Név"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <InputComponent
                      id={testimonial.content}
                      label="Értékelés"
                      value={form.content}
                      onChange={(e) => setForm({ ...form, content: e.target.value })}
                      textarea
                    />
                  </form>
                </div>
              ) : (
                testimonial.name
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
                  <IoIosSave className="mr-3" style={{ cursor: 'pointer' }} />
                ) : (
                  <BsPencil className="mr-3" style={{ cursor: 'pointer' }} />
                )}
              </div>
              <div>
                <BsFillTrash3Fill
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleDelete(index)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
