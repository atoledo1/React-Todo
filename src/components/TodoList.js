import React from "react";
import Todo from "./Todo";

export default function ToDoList(props) {
  return (
    <div>
      {props.chores.map((chore) => (
        <Todo key={chore.id} chore={chore} togglechore={props.togglechore} />
      ))}
    </div>
  );
}
