import React, { useState, ChangeEvent, useRef, KeyboardEvent } from "react";
import { TodoFormInterface } from "../interfaces";

const TodoForm: React.FC<TodoFormInterface> = ({ handleAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewTodo(e.target.value);
  };
  const handleEmptyInput = (): void => {
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
  };
  const handleKeybordInput = (e: KeyboardEvent): void => {
    if (e.key == "Enter") {
        handleAddTodo(newTodo);
        handleEmptyInput()
    }
  };

  return (
    <div className="todo-form">
      <input
        ref={inputRef}
        type="text"
        onChange={handleChangeInput}
        placeholder="pleace write your todo"
        onKeyPress={handleKeybordInput}
      />
      <div className="buttons-container">
        <button onClick={handleEmptyInput}>CANCEL</button>
        <button
          className="save-btn"
          onClick={() => {
            handleAddTodo(newTodo);
            handleEmptyInput()
          }}
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
