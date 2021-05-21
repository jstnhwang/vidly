import React from "react";

const Input = ({ name, label, value, type, error, onChange }) => {
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
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
