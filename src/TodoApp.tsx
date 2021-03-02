import React, { useState } from 'react';
import TodoElement from './components/todo/element';
import AddTodo from './components/todo/addTodo';

interface TodoList {
  id: number;
  content: string;
}

const TodoApp: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [todoList, setTodoList] = useState<TodoList[]>([]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);
  };
  const addTodo = () => {
    const newTodo = { id: todoList.length, content: value };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setValue('');
  };
  const handleDelete = (id: number) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h1>ToDo App</h1>
      <AddTodo value={value} onChange={handleChange} addTodo={addTodo} />
      <ul>
        {todoList.map((todo) => (
          <TodoElement
            key={todo.id}
            content={todo.content}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
