import { useState } from 'react';
import useAdminContext from '@/app/hooks/use-admin-context';
import InputComponent from '../../input/Inputcomponent';
import { IoIosSave } from 'react-icons/io';
import { RxCross1 } from 'react-icons/rx';


export default function Addtestimonialmodal() {
  const { isOpen, setOpen, handleSave } = useAdminContext();
  const [onChange, setOnChange] = useState(false);

  const [form, setForm] = useState({
    name: '',
    content: '',
  });

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="rounded-md max-w-600 w-95% shadow-lg relative bg-white p-10 ">
            <div className="grid ">
              <form>
                <InputComponent
                  required
                  id={Math.floor(Math.random() * 10000) + 1}
                  label="Név"
                  value={form.name}
                  onChange={(e) =>
                    setForm((prevState) => ({
                      ...prevState,
                      name: e.target.value,
                    }))
                  }
                  placeholder="Enter Name"
                />

                <InputComponent
                  id={Math.floor(Math.random() * 10000) + 1}
                  label="Tartalom"
                  value={form.content}
                  onChange={(e) =>
                    setForm((prevState) => ({
                      ...prevState,
                      content: e.target.value,
                    }))
                  }
                  textarea
                  rows={12}
                />
              </form>
            </div>
            <div className="flex justify-end mt-5 my-1">
              <div
                onClick={() => {
                  handleSave('testimonials', form)
                  setOnChange(!onChange);
                }}
              >
                <IoIosSave
                  size={25}
                  style={{ cursor: 'pointer' }}
                  className="mr-5"
                />
              </div>
              <div>
                <RxCross1
                  onClick={() => {
                    setOpen(false);
                    setForm((prevState) => ({
                      ...prevState,
                      name: '',
                      description: '',
                    }));
                  }}
                  size={25}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
