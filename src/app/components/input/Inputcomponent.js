import React from 'react';
import { AiOutlineUpload } from 'react-icons/ai';

const InputComponent = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  rows,
  textarea,

  type,
  file
}) => {



  if (textarea) {
    return (
      <div className="grid">
        <label htmlFor={id} className="text-lg">
          {label}
        </label>
        <textarea
          id={id}
          rows={rows || 3}
          className="border-2 my-2 grow border-gray-300 bg-white pl-2 rounded-lg text-xl focus:outline-none h-auto"
          value={value}
          onChange={onChange}
          required={false}
          placeholder={placeholder}
        />
      </div>
    );
  }

  else if (file) {
    return (
      <div className="grid">
        <label htmlFor={id} className="text-lg">
          {label}
        </label>
        <input
          type="file"
          id={id}
          className="hidden"
          accept="image/*"
          onChange={onChange}
        />
        <label htmlFor={id} className="cursor-pointer">
          <AiOutlineUpload size={30} />
        </label>
      </div>
    );
  }

  return (
    <div className="grid">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <input
        id={id}
        type={type || 'text'}
        className="border-2 my-2 border-gray-300 bg-white h-10 pl-2 rounded-lg text-xl focus:outline-none"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={false}
      />
    </div>
  );
};

export default InputComponent;