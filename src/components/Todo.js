import React from 'react';
import moment from 'moment';

const Todo = ({ todo, toggleCompleted }) => (
  <div
    onClick={() => toggleCompleted(todo.id)}
    className={todo.completed ? 'complete' : 'incomplete'}
  >
    <p>{todo.item}</p>

    {todo.completed && <div>Done: {moment().format('MM-DD-YY')}</div>}

    {!todo.completed && todo.dueDate && (
      <div>
        Due: {moment(todo.dueDate, 'MM-DD-YY').fromNow()}
        {moment(todo.dueDate, 'MM-DD-YY').diff() < 0 && <span> Overdue</span>}
      </div>
    )}
  </div>
);

export default Todo;
