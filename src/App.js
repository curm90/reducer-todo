import React, { useReducer } from 'react';
import './App.css';

import { reducer, initialState } from './reducers/reducer';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = todo => {
    dispatch({ type: 'ADD_TODO', payload: todo });
  };

  const toggleCompleted = id => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: id });
  };

  const filterCompleted = id => {
    dispatch({ type: 'FILTER_COMPLETED', payload: id });
  };

  return (
    <div className='App'>
      <TodoList todos={state.todos} toggleCompleted={toggleCompleted} />
      <TodoForm addTodo={addTodo} filterCompleted={filterCompleted} />
    </div>
  );
}

export default App;
