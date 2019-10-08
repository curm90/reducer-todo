import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleCompleted }) => (
  <div>
    {todos.map(todo => (
      <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />
    ))}
  </div>
);

export default TodoList;
