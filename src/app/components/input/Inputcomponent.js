import React from 'react';

const InputComponent = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  rows,
  textarea,
  type
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
          placeholder={placeholder}
        />
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
      />
    </div>
  );
};

export default InputComponent;