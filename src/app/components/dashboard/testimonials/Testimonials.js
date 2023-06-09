import getDoument from "@/firebase/firestore/getData";
import { useState, useEffect } from 'react';
import { db } from "@/firebase/config";
import { doc, setDoc } from "firebase/firestore";
import useAdminContext from "@/app/hooks/use-admin-context";
import InputComponent from "../../input/Inputcomponent";
import Addtestimonialmodal from "./Addtestemonialmodal";
import { BsPencil, BsFillTrash3Fill } from 'react-icons/bs';
import { IoIosSave } from 'react-icons/io';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import Alertdelete from "../../alert/Alertdelete";

export default function Admintestimonial() {
  const { isOpen, setOpen, handleDeleteItem, } = useAdminContext();
  const [testimonials, setTestimonials] = useState([]);
  const [edit, setEdit] = useState(false);
  const [onChange, setOnChange] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
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
  }, [isOpen, onChange, openDeleteAlert]);

  const handleEdit = (index) => {
    setEdit(index);
    setForm((prevState) => ({
      ...prevState,
      name: testimonials[index].name,
      content: testimonials[index].content,
    }));
  };

  const handleSave = async (index) => {
    setEdit(false);
    const documentId = testimonials[index].id;
    const documentRef = doc(db, "testimonials", documentId);
    await setDoc(documentRef, {
      name: form.name,
      content: form.content,
    });
    setOpen(false);
  }

  const handleModal = () => {
    setOpen(true);
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
          <Addtestimonialmodal
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
                    setOnChange(!onChange);
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
                  onClick={() => {
                    setOpenDeleteAlert(true);
                  }}
                />
                {openDeleteAlert && (
                  <Alertdelete
                    handleDelete={() => handleDeleteItem('testimonials', testimonial)}
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
