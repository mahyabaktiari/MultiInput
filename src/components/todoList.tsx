import { FC } from "react";
import { TodoListInterface, TodoItemInterface } from "../interfaces";

const TodoList: FC<TodoListInterface> = ({
  handleTodoRemove,
  todos,
  handleTodoUpdate,
  handleTodoBlur,
}) => {
  return (
    <div className="todolist-container">
      {todos.map((todo: TodoItemInterface) => (
        <div>
          <input
            type="text"
            value={todo.text}
            onChange={(e) => handleTodoUpdate(e, todo.id)}
            onBlur={(e) => handleTodoBlur(e, todo.id)}
          />

          <button className="remove-btn" onClick={() => handleTodoRemove(todo.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
