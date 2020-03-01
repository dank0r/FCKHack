import axios from 'axios';

export const setScreen = screen => ({
  type: 'SET_SCREEN',
  screen,
});

export const setEvents = data => ({
  type: 'SET_EVENTS',
  events: data.events
});

export const openFilters = data => ({
  type: 'OPEN_FILTERS',
});

export const closeFilters = data => ({
  type: 'CLOSE_FILTERS',
});

export const addFilter = data => ({
  type: 'ADD_FILTER',
  filter: data.filter,
});

export function fetchEvents() {
  let type = 'FETCH_EVENTS';
  return {
    types: [`${type}_REQUEST`, `${type}_SUCCESS`, `${type}_FAILURE`],
    payload: {
      request:{
        url:'/all',
        method: 'GET'
      }
    }
  }
}