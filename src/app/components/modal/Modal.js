
import InputComponent from '../input/Inputcomponent';
import { IoIosSave } from 'react-icons/io';
import { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import { RxCross1 } from 'react-icons/rx';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase/config';


export default function Modal({
  result,
  testimonial,
  influencer,
  form,
  setForm }) {

  const { isOpen, setOpen } = useContext(ModalContext);

  function getDocument() {
    const result = simpleDoc('results')

    return console.log(result)
  }




  function save() {
    if (result) {
      addDoc(collection(db, 'results',), form)
        .then(() => {
          setOpen(!isOpen);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    } else if (testimonial) {
      addDoc(collection(db, 'testimonials'), form)
        .then(() => {
          setOpen(!isOpen);

        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    } else if (influencer) {
      addDoc(collection(db, 'influencers'), form)
        .then(() => {
          setOpen(!isOpen);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    }
  }



  if (influencer) {
    return (
      <>
        {isOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 flex justify-center items-center">
            <div className="rounded-md max-w-500 w-90% shadow-lg relative bg-white p-12">
              <div className="grid ">
                <form>
                  <InputComponent
                    id={Math.floor(Math.random() * 10000) + 1}
                    label="Név"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <InputComponent
                    id={Math.floor(Math.random() * 10000) + 1}
                    label="Tiktok követők"
                    value={form.socialmedia.tiktok}
                    onChange={(e) => setForm({ ...form, socialmedia: { ...form.socialmedia, tiktok: e.target.value } })}
                    type="number"
                  />
                  <InputComponent
                    id={Math.floor(Math.random() * 10000) + 1}
                    label="Instagram követők"
                    value={form.socialmedia.instagram}
                    onChange={(e) => setForm({ ...form, socialmedia: { ...form.socialmedia, instagram: e.target.value } })}
                    type="number"
                  />
                  <InputComponent
                    id={Math.floor(Math.random() * 10000) + 1}
                    label="Kép feltöltés"
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    type="text"
                  />
                </form>
              </div>
              <div className="flex justify-end mt-5 my-1">
                <div
                  onClick={() => {
                    save();
                  }}
                >
                  <IoIosSave
                    size={25}
                    style={{ cursor: 'pointer' }}
                    className="mr-5" />
                </div>
                <div>
                  <RxCross1
                    size={25}
                    onClick={() => {
                      setForm({
                        ...form,
                        image: '',
                        name: '',
                        socialmedia: {
                          instagram: '',
                          tiktok: '',
                        },
                      });
                      setOpen(!isOpen);
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
  else if (result) {
    return (
      <>
        {isOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 flex justify-center items-center">
            <div className="rounded-md max-w-500 w-90% shadow-lg relative bg-white p-12">
              <div className="grid">
                <form >
                  <InputComponent
                    id={Math.floor(Math.random() * 10000) + 1}
                    label="Név"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <InputComponent
                    id={Math.floor(Math.random() * 10000) + 1}
                    label="Kampány hossza (hónap)"
                    value={form.duration}
                    onChange={(e) => setForm({ ...form, duration: e.target.value })}
                    type={'number'}
                  />
                  <InputComponent
                    id={Math.floor(Math.random() * 10000) + 1}
                    label="Feliratkozók"
                    value={form.subscribers}
                    onChange={(e) => setForm({ ...form, subscribers: e.target.value })}
                    type={'number'}
                  />
                  <InputComponent
                    id={Math.floor(Math.random() * 10000) + 1}
                    label="Nézettség"
                    value={form.views}
                    onChange={(e) => setForm({ ...form, views: e.target.value })}
                    type={'number'}
                  />
                </form>
              </div>

              <div className="flex justify-end mt-5 my-1">
                <div
                  onClick={() => {
                    setOpen(!isOpen);
                    save();
                  }}
                >
                  <IoIosSave
                    size={25}
                    style={{ cursor: 'pointer' }}
                    className="mr-5" />
                </div>
                <div>
                  <RxCross1
                    size={25}
                    onClick={() => {
                      setForm({
                        ...form,
                        name: '',
                        duration: '',
                        subscribers: '',
                        views: ''
                      })
                      setOpen(!isOpen);
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>
            </div>
          </div >
        )
        }
      </>
    );
  }
  else if (testimonial) {
    return (
      <>
        {isOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 flex justify-center items-center">
            <div className="rounded-md max-w-600 w-95% shadow-lg relative bg-white p-10 ">
              <div className="grid ">
                <form>
                  <InputComponent
                    id={Math.floor(Math.random() * 10000) + 1}
                    label="Név"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter Name"
                  />
                  <InputComponent
                    id={Math.floor(Math.random() * 10000) + 1}
                    label="Tartalom"
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    textarea
                    rows={7}
                  />
                </form>
              </div>
              <div className="flex justify-end mt-5 my-1">
                <div
                  onClick={() => {
                    save()
                  }}
                >
                  <IoIosSave
                    size={25}
                    style={{ cursor: 'pointer' }}
                    className="mr-5" />
                </div>
                <div
                  onClick={() => {
                    setOpen(!isOpen);
                    console.log('delete');
                  }}
                >
                  <RxCross1
                    onClick={() => {
                      setOpen(!isOpen);
                      setForm({
                        ...form,
                        name: '',
                        content: ''
                      })
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
}