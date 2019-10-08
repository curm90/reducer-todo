import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState({ item: '' });

  const handleInputChange = e => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo({ item: '' });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleInputChange}
          type='text'
          name='item'
          placeholder='Add Todo'
          value={newTodo.item}
        />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
