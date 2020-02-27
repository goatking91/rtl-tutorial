import React from 'react';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: Array<TodoItemProps>;
  onToggle: Function;
  onRemove: Function;
};

type TodoItemProps = {
  id: number;
  text: string;
  done: boolean;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  return (
    <ul data-testid="TodoList">
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default TodoList;
