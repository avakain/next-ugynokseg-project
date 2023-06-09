import { useState } from 'react';
import useAdminContext from '@/app/hooks/use-admin-context';
import InputComponent from '../../input/Inputcomponent';
import { IoIosSave } from 'react-icons/io';
import { RxCross1 } from 'react-icons/rx';

export default function Addinfluencermodal() {

  const { isOpen, setOpen, setIsImageUpload, handleSave } = useAdminContext();
  const [form, setForm] = useState({
    name: '',
    socialmedia: {
      tiktok: '',
      instagram: '',
    },
    imageLink: '',
  });


  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="rounded-md max-w-500 w-90% shadow-lg relative bg-white p-12">
            <div className="grid">
              <InputComponent
                id={Math.floor(Math.random() * 10000) + 1}
                label="Név"
                required
                value={form.name}
                onChange={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }))}
              />
              <InputComponent
                id={Math.floor(Math.random() * 10000) + 1}
                label="Tiktok követők"
                value={form.socialmedia.tiktok}
                onChange={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    socialmedia: {
                      ...prevState.socialmedia,
                      tiktok: e.target.value,
                    },
                  }))}
                type="number"
              />
              <InputComponent
                id={Math.floor(Math.random() * 10000) + 1}
                label="Instagram követők"
                value={form.socialmedia.instagram}
                onChange={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    socialmedia: {
                      ...prevState.socialmedia,
                      instagram: e.target.value,
                    },
                  }))}
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
            </div>
            <div className="flex justify-end mt-5 my-1">
              <div >
                <IoIosSave
                  size={25}
                  style={{ cursor: 'pointer' }}
                  className="mr-5"
                  onClick={
                    () => {
                      handleSave('influencers', form);
                      setForm((prevState) => ({
                        ...prevState,
                        name: '',
                        socialmedia: {
                          instagram: '',
                          tiktok: '',
                        },
                        imageLink: '',
                      }));
                    }
                  }
                />
              </div>
              <div>
                <RxCross1
                  size={25}
                  onClick={() => {
                    setOpen(false);
                    setForm((prevState) => ({
                      ...prevState,
                      name: '',
                      socialmedia: {
                        instagram: '',
                        tiktok: '',
                      },
                      imageLink: '',
                    }));
                  }}
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
