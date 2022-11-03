import { useState, ChangeEvent } from "react";
import "./todoListApp.css";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import { TodoItemInterface } from "./interfaces";

function TodoListApp() {
  const [todoListItems, setTodoListItems] = useState<TodoItemInterface[]>([]);

  const handleAddTodo = (item: string) => {
    setTodoListItems([...todoListItems, { id: Math.random(), text: item }]);
  };

  const handleTodoRemove = (id: number) => {
    let newTodoListItems: TodoItemInterface[] = todoListItems.filter(
      (item: TodoItemInterface) => item.id !== id
    );
    setTodoListItems(newTodoListItems);
  };

  const handleTodoUpdate = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const newTodosState: TodoItemInterface[] = [...todoListItems];
    newTodosState.find((todo: TodoItemInterface) => todo.id === id)!.text =
      e.target.value;
    setTodoListItems(newTodosState);
  };

  const handleTodoBlur = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    if (!e.target.value) {
      handleTodoRemove(id);
    }
  };

  return (
    <div className="todo-list-app-container">
      
      <TodoList
        todos={todoListItems}
        handleTodoRemove={handleTodoRemove}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoBlur={handleTodoBlur}
      />

      <TodoForm handleAddTodo={handleAddTodo} />
    </div>
  );
}

export default TodoListApp;
