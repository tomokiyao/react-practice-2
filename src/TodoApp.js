import React, { useState } from 'react';
import TodoElement from './components/todo/element'
import AddTodo from './components/todo/addTodo'

const TodoApp = () => {
  const [value, setValue] = useState("")
  const [todoList, setTodoList] = useState([])

  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
  }
  const addTodo = () => {
    const newTodo = { id: todoList.length, content: value };
    const newTodoList = [...todoList, newTodo]
    setTodoList(newTodoList);
    setValue("");
  }
  const handleDelete = id => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  }

  return (
    <div>
      <h1>ToDo App</h1>
      <AddTodo value={value} onChange={handleChange} addTodo={addTodo} />
      <ul>
        {todoList.map((todo) => (
          <TodoElement key={todo.id} content={todo.content} onDelete={() => handleDelete(todo.id) }/>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp
