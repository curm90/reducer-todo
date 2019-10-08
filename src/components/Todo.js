import React from 'react';

const Todo = ({ todo, toggleCompleted }) => (
  <div
    onClick={() => toggleCompleted(todo.id)}
    className={todo.completed ? 'complete' : 'incomplete'}
  >
    <p>{todo.item}</p>
  </div>
);

export default Todo;
