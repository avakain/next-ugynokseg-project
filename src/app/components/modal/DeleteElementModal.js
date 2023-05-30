import React, { useCallback, useState } from 'react';
import { useContext } from 'react';
import { ModalContext } from '@/context/ModalContext';

const DeleteElementModal = ({ onDelete }) => {
  const { showDeleteModal, setShowDeleteModal } = useContext(ModalContext)

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    onDelete(); // Call the onDelete prop to delete the element
    closeModal(); // Close the modal after deleting the element
  };

  return (
    <div>
      <button onClick={openModal} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        Delete Element
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow-xl">
            <p className="text-center">Are you sure you want to delete the element?</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Yes
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteElementModal;