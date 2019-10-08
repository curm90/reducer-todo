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
            completed: false
          }
        ]
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
      completed: false
    },
    {
      id: 234234234,
      item: 'Learn about redux',
      completed: false
    },
    {
      id: 123123311,
      item: 'Learn about actions',
      completed: false
    }
  ]
};

export { initialState, reducer };
