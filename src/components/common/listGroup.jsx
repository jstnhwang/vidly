import React from "react";

const ListGroup = ({ items }) => {
  return (
    <ul class="list-group">
      {items.map(item => (
        <li class="list-group-item active">{item.name}</li>
      ))}
    </ul>
  );
};

export default ListGroup;
