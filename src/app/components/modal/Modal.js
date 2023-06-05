import InputComponent from '../input/Inputcomponent';
import { IoIosSave } from 'react-icons/io';
import { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import { RxCross1 } from 'react-icons/rx';
import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../../../firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useState, useEffect } from 'react';



export default function Modal({
  result,
  testimonial,
  influencer,
}) {

  const [forms, setForms] = useState({
    influencer: {
      name: '',
      socialmedia: {
        instagram: '',
        tiktok: '',
      },
      imageLink: '',
    },
    testimonial: {
      name: '',
      content: '',
    },
    result: {
      name: '',
      duration: '',
      subscribers: '',
      likes: '',
    },
  });


  const { isOpen, setOpen } = useContext(ModalContext);
  const [imageUpload, setImageUpload] = useState(null);

  useEffect(() => {
    console.log(forms.influencer)
  }, [forms]);

  function save() {
    if (result) {
      addDoc(collection(db, 'results',), forms.result)
        .then(() => {
          setOpen(!isOpen);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    } else if (testimonial) {
      addDoc(collection(db, 'testimonials'), forms.testimonial)
        .then(() => {
          setOpen(!isOpen);

        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    } else if (influencer) {
      uploadImage()
      addDoc(collection(db, 'influencers'), forms.influencer)
        .then(() => {
          setOpen(!isOpen);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    }
  }


  const uploadImage = async () => {
    if (imageUpload == null) return;
    else {
      const storageRef = ref(storage, `influencers/${forms.influencer.name.toLowerCase().replace(/\s+/g, '-').replace(/(\W+)/g, '')}`);
      try {
        const snapshot = await uploadBytes(storageRef, imageUpload);
        const downloadURL = await getDownloadURL(snapshot.ref);
        setForms({
          ...forms,
          influencer: {
            ...forms.influencer,
            imageLink: downloadURL,
          },
        });
        console.log(forms.influencer.imageLink);
        alert('Sikeres feltöltés');
      } catch (error) {
        console.log('Error uploading image:', error);
      }
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
                    required
                    value={forms.influencer.name}
                    onChange={(e) =>
                      setForms({
                        ...forms,
                        influencer: {
                          ...forms.influencer,
                          name: e.target.value,
                        },
                      })
                    }
                  />
                  <InputComponent
                    id={Math.floor(Math.random() * 10000) + 1}
                    label="Tiktok követők"
                    value={forms.influencer.socialmedia.tiktok}
                    onChange={(e) =>
                      setForms({
                        ...forms,
                        influencer: {
                          ...forms.influencer,
                          socialmedia: {
                            ...forms.influencer.socialmedia,
                            tiktok: e.target.value,
                          },
                        },
                      })
                    }
                    type="number"
                  />
                  <InputComponent
                    id={Math.floor(Math.random() * 10000) + 1}
                    label="Instagram követők"
                    value={forms.influencer.socialmedia.instagram}
                    onChange={(e) =>
                      setForms({
                        ...forms,
                        influencer: {
                          ...forms.influencer,
                          socialmedia: {
                            ...forms.influencer.socialmedia,
                            instagram: e.target.value,
                          },
                        },
                      })
                    }
                    type="number"
                  />
                  <InputComponent
                    id={Math.floor(Math.random() * 10000) + 1}
                    label="Kép feltöltés"
                    onChange={(e) => {
                      setImageUpload(e.target.files[0]);
                    }}
                    file
                  />
                </form>
              </div>
              <div className="flex justify-end mt-5 my-1">
                <div >
                  <IoIosSave
                    size={25}
                    style={{ cursor: 'pointer' }}
                    className="mr-5"
                    onClick={
                      () => {
                        save()
                      }
                    }
                  />
                </div>
                <div>
                  <RxCross1
                    size={25}
                    onClick={() => {
                      setForms({
                        ...forms,
                        influencer: {
                          name: '',
                          socialmedia: {
                            instagram: '',
                            tiktok: '',
                          },
                          imageLink: '',
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
  } else if (result) {
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
                    value={forms.result.name}
                    onChange={(e) =>
                      setForms({
                        ...forms,
                        result: {
                          ...forms.result,
                          name: e.target.value,
                        },
                      })
                    }
                  />
                  <InputComponent
                    id={Math.floor(Math.random() * 10000) + 1}
                    label="Kampány hossza (hónap)"
                    value={forms.result.duration}
                    onChange={(e) =>
                      setForms({
                        ...forms,
                        result: {
                          ...forms.result,
                          duration: e.target.value,
                        },
                      })
                    }
                    type="number"
                  />
                  <InputComponent
                    id={Math.floor(Math.random() * 10000) + 1}
                    label="Feliratkozók"
                    value={forms.result.subscribers}
                    onChange={(e) =>
                      setForms({
                        ...forms,
                        result: {
                          ...forms.result,
                          subscribers: e.target.value,
                        },
                      })
                    }
                    type="number"
                  />
                  <InputComponent
                    id={Math.floor(Math.random() * 10000) + 1}
                    label="Nézettség"
                    value={forms.result.views}
                    onChange={(e) =>
                      setForms({
                        ...forms,
                        result: {
                          ...forms.result,
                          views: e.target.value,
                        },
                      })
                    }
                    type="number"
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
                    className="mr-5"
                  />
                </div>
                <div>
                  <RxCross1
                    size={25}
                    onClick={() => {
                      setForms({
                        ...forms,
                        result: {
                          duration: '',
                          name: '',
                          subscribers: '',
                          views: '',
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
  } else if (testimonial) {
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
                    value={forms.testimonial.name}
                    onChange={(e) =>
                      setForms({
                        ...forms,
                        testimonial: {
                          ...forms.testimonial,
                          name: e.target.value,
                        },
                      })
                    }
                    placeholder="Enter Name"
                  />
                  <InputComponent
                    id={Math.floor(Math.random() * 10000) + 1}
                    label="Tartalom"
                    value={forms.testimonial.description}
                    onChange={(e) =>
                      setForms({
                        ...forms,
                        testimonial: {
                          ...forms.testimonial,
                          description: e.target.value,
                        },
                      })
                    }
                    textarea
                    rows={7}
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
                    className="mr-5"
                  />
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
                      setForms({
                        ...forms,
                        testimonial: {
                          name: '',
                          description: '',
                        },
                      });
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
};  