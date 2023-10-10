import { useState } from "react";

const TodoInput = (props) => {
  const [inputText, setInputText] = useState("");

  const addData = (event) => {
    props.item(inputText);
    setInputText("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addData();
          }
        }}
      />
      <button className="add-btn" onClick={addData}>
        +
      </button>
    </div>
  );
};

export default TodoInput;
