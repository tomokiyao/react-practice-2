import React from 'react';

interface TodoElementProps {
  content: string;
  onDelete: () => void;
}

const TodoElement: React.FC<TodoElementProps> = (props) => {
  return (
    <li>
      {props.content}
      <button onClick={props.onDelete}>削除</button>
    </li>
  );
};

export default TodoElement;
