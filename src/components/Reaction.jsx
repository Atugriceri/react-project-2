import React from "react";

const Reaction = ({ onClick, text, type, icon }) => {
  return (
    <a href="javascript:;" className="nav-link" onClick={onClick}>
      {icon}
    </a>
  );
};

export default Reaction;
