import React, { useCallback } from 'react';

type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
  onToggle: Function;
  onRemove: Function;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onRemove }) => {
  const { id, text, done } = todo;
  const toggle = useCallback(() => onToggle(id), [id, onToggle]);
  const remove = useCallback(() => onRemove(id), [id, onRemove]);
  return (
    <li>
      <span style={{ textDecoration: done ? 'line-through' : 'none' }} onClick={toggle}>
        {text}
      </span>
      <button onClick={remove}>삭제</button>
    </li>
  );
};

export default React.memo(TodoItem);