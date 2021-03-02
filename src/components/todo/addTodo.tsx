import React from 'react';

interface AddTodoProps {
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  addTodo: () => void;
}

const AddTodo: React.FC<AddTodoProps> = (props) => {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.onChange} />
      <button onClick={props.addTodo}>追加</button>
    </div>
  );
};

export default AddTodo;
