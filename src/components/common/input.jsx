import React from "react";

const Input = ({ name, label, value, type, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        value={value}
        name={name}
        type={type}
        className="form-control"
        id={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
