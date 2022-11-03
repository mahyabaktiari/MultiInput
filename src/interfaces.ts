export interface TodoItemInterface{
    id:number,
    text:string
}

export interface TodoListInterface {
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
    handleTodoRemove: (id: number) => void;
    handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement> , id:number) => void;
    todos: TodoItemInterface[]
  } 

export interface TodoFormInterface {
    handleAddTodo : (item:string)=> void;
}  