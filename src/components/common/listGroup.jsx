import React from "react";

const ListGroup = ({ textProp, valueProp, items, selectedItem, onItemSelect }) => {
  return (
    <ul class="list-group">
      {items.map(item => (
        <li
          key={item[valueProp]}
          className={item === selectedItem ? "list-group-item active" : "list-group-item"}
          onClick={() => onItemSelect(item)}
          style={{ cursor: "pointer" }}
        >
          {item[textProp]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProp: "name",
  valueProp: "_id"
};

export default ListGroup;
