function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Learn about redux',
    completed: false,
    id: 234234234
  },
  {
    item: 'Learn about actions',
    completed: false,
    id: 123123311
  }
];

export { initialState, reducer };
