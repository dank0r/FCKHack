const events = (state = {isOpened: false, filteredTags: [] }, action) => {
  switch (action.type) {
    case 'OPEN_FILTERS':
      return {...state, isOpened: true};
    case 'CLOSE_FILTERS':
      return {...state, isOpened: false};
    case 'ADD_FILTER':
      return {...state, filteredTags: state.filteredTags.concat(action.filter)};
    default:
      return state
  }
};

export default events;