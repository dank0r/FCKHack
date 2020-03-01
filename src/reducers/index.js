import { combineReducers } from 'redux';
import navigation from './navigation';
import events from './events';
import filters from './filters';

export default combineReducers({
  navigation,
  events,
  filters,
})