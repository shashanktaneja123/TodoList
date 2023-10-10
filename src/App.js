import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  let [listData, setListData] = useState([]);

  const addTask = (task) => {
    if (task !== "") {
      const currentData = [...listData, task];
      setListData(currentData);
      localStorage.setItem("todoList", JSON.stringify(currentData));
    }
  };

  const deleteListItem = (key) => {
    const newList = [...listData];
    newList.splice(key, 1);
    setListData([...newList]);
    localStorage.setItem("todoList", JSON.stringify(newList));
  };

  const updateListItem = (key, content) => {
    if (content !== "") {
      const newList = [...listData];
      newList[key] = content;
      setListData([...newList]);
      localStorage.setItem("todoList", JSON.stringify(newList));
    }
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("todoList"));
    if (savedData) {
      setListData(savedData);
    }
  }, []);

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput item={addTask} />
        <h1 className="app-heading">TODO</h1>
        {listData.map((task, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              deleteItem={deleteListItem}
              updateItem={updateListItem}
              item={task}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
