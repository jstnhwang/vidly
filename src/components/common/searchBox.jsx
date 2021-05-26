import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      value={value}
      placeholder="Search for movies"
      className="form-control my-3"
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
