import InputComponent from '../../input/Inputcomponent';
import { IoIosSave } from 'react-icons/io';
import useAdminContext from '@/app/hooks/use-admin-context';
import { RxCross1 } from 'react-icons/rx';
import { useState } from 'react';


export default function Addresultmodal() {

  const { isOpen, setOpen, setIsImageUpload, handleSave } = useAdminContext();
  const [form, setForm] = useState({
    duration: '',
    name: '',
    subscribers: '',
    views: '',
    imageLink: '',
  });


  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="rounded-md max-w-500 w-90% shadow-lg relative bg-white p-12">
            <div className="grid">
              <form>
                <InputComponent
                  id={Math.floor(Math.random() * 10000) + 1}
                  label="Név"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((prevState) => ({
                      ...prevState,
                      name: e.target.value,
                    }))
                  }
                />
                <InputComponent
                  id={Math.floor(Math.random() * 10000) + 1}
                  label="Kampány hossza (hónap)"
                  value={form.duration}
                  onChange={(e) =>
                    setForm((prevState) => ({
                      ...prevState,
                      duration: e.target.value,
                    }))
                  }
                  type="number"
                />
                <InputComponent
                  id={Math.floor(Math.random() * 10000) + 1}
                  label="Feliratkozók"
                  value={form.subscribers}
                  onChange={(e) =>
                    setForm((prevState) => ({
                      ...prevState,
                      subscribers: e.target.value,
                    }))

                  }
                  type="number"
                />
                <InputComponent
                  id={Math.floor(Math.random() * 10000) + 1}
                  label="Nézettség"
                  value={form.views}
                  onChange={(e) =>
                    setForm((prevState) => ({
                      ...prevState,
                      views: e.target.value,
                    }))
                  }
                  type="number"
                />
                <InputComponent
                  id={Math.floor(Math.random() * 10000) + 1}
                  label="Kép feltöltés"
                  onChange={(e) => {
                    setIsImageUpload(e.target.files[0]);
                  }}
                  file
                />
              </form>
            </div>

            <div className="flex justify-end mt-5 my-1">
              <div>
                <IoIosSave
                  size={25}
                  style={{ cursor: 'pointer' }}
                  className="mr-5"
                  onClick={
                    () => {
                      handleSave('results', form);
                    }}
                />
              </div>
              <div>
                <RxCross1
                  size={25}
                  onClick={() => {
                    setForm((prevState) => ({
                      ...prevState,
                      duration: '',
                      name: '',
                      subscribers: '',
                      views: '',
                      imageLink: '',
                    }));
                    setOpen(false);
                  }}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}