import React from "react";

const Like = ({ liked, onClick }) => {
  let heart = "bi bi-heart";
  if (!liked) heart += "-fill";
  return <i className={heart} style={{ cursor: "pointer" }} onClick={onClick}></i>;
};

export default Like;
