const navigation = (state = {screen: 'events'}, action) => {
  switch (action.type) {
    case 'SET_SCREEN':
      return {screen: action.screen};
    default:
      return state
  }
};

export default navigation;