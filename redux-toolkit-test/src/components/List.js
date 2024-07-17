import React from 'react';
import { useSelector } from 'react-redux';
import './List.css';

const List = () => {
  const items = useSelector((state) => state.list.items);

  return (
    <div className="list">
      {items.map((item) => (
        <div key={item.id} className="item" style={{ backgroundColor: item.color }} />
      ))}
    </div>
  );
};

export default List;
