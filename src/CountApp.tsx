import React, { useState } from 'react';

const CountApp: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const plusOne = () => {
    setCount(count + 1);
  };
  const minusOne = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>カウンターApp</h1>
      <p>{count}</p>
      <div>
        <button onClick={plusOne}>+</button>
        <button onClick={minusOne}>-</button>
      </div>
    </div>
  );
};

export default CountApp;
