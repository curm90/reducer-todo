function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            item: action.payload.item,
            completed: false,
            dueDate: action.payload.dueDate
          }
        ]
      };
    case 'TOGGLE_COMPLETED':
      return {
        ...state,
        todos: [...state.todos].map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      };
    case 'FILTER_COMPLETED':
      return {
        ...state,
        todos: [...state.todos].filter(todo => !todo.completed)
      };
    default:
      return state;
  }
}

const initialState = {
  todos: [
    {
      id: 3892987589,
      item: 'Learn about reducers',
      completed: false,
      dueDate: '10-19-19'
    },
    {
      id: 234234234,
      item: 'Learn about redux',
      completed: false,
      dueDate: ''
    },
    {
      id: 123123311,
      item: 'Learn about actions',
      completed: false,
      dueDate: ''
    }
  ]
};

export { initialState, reducer };
