import React from "react";

const chore = (props) => {
  const { chore, id, completed } = props.chore;
  return (
    <div
      onClick={() => props.togglechore(id)}
      className={`chore${completed ? " completed" : ""}`}
    >
      <p>{chore}</p>
    </div>
  );
};

export default chore;
