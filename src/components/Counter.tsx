import React, { useCallback, useState } from 'react';

const Counter: React.FC = () => {
  const [number, setNumber] = useState(0);

  const onIncrease = useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  const onDecrease = useCallback(() => {
    setNumber(number - 1);
  }, [number]);

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
