let initialState = {
  isDrawerOpen: false
};

//drawer control
export function isDrawerOpen(state = initialState.isDrawerOpen, action) {
  switch (action.type) {
    case 'IS_DRAWER_OPEN':
      return !state;
    default:
      return state;
  }
}
