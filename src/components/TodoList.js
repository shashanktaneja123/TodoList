import React, { useState } from "react";

const TodoList = (props) => {
  let [itemValue, setItemValue] = useState(props.item);

  return (
    <li className="list-item">
      <input
        style={{ backgroundColor: "#333", color: "#FFFFFF" }}
        type="text"
        value={itemValue}
        onChange={(e) => {
          setItemValue(e.target.value);
        }}
      ></input>

      <span className="icons">
        <i
          className="fa-solid fa-trash-can icon-delete"
          onClick={(e) => {
            props.deleteItem(props.index);
          }}
        ></i>
        <i
          class="far fa-edit"
          onClick={(e) => {
            props.updateItem(props.index, itemValue);
          }}
        ></i>
      </span>
    </li>
  );
};

export default TodoList;
