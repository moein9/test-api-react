import React from "react";
import "./content.css";

export const Content = ({ name, flag,lang}) => {
  return (
    <div className="card">
      <h1>{name}</h1>

      <div>
        <img className="flag" src={flag} alt="" />
      </div>
      <h2>{lang}</h2>
    </div>
  );
};
