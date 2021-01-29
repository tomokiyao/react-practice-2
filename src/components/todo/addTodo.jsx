import React from 'react';

const AddTodo = props => {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.onChange} />
      <button onClick={props.addTodo}>追加</button>
    </div>
  )
}

export default AddTodo
