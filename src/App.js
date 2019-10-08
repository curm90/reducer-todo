import React, { useReducer } from 'react';
import { reducer, initialState } from './reducers/reducer';
import TodoList from './components/TodoList';

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='App'>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
