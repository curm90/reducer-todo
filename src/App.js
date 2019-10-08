import React, { useReducer } from 'react';

import { reducer, initialState } from './reducers/reducer';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = todo => {
    dispatch({ type: 'ADD_TODO', payload: todo });
  };

  return (
    <div className='App'>
      <TodoList todos={state.todos} />
      <TodoForm newTodo={state.newTodo} addTodo={addTodo} />
    </div>
  );
}

export default App;
