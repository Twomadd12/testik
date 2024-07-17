import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../listSlice';

const Controls = () => {
  const dispatch = useDispatch();

  return (
    <div className="controls">
      <button onClick={() => dispatch(addItem())}>Добавить</button>
      <button onClick={() => dispatch(removeItem())}>Удалить</button>
    </div>
  );
};

export default Controls;
