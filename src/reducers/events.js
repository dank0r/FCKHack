import Event from "../components/Event";
import React from "react";

let initialState = {
  list: [
    {
      title:"Хакатон ФЦК",
      location:"2-й этаж КСП",
      time:"29 февраля, 10:00",
      description:"С 29 февраля по 1 марта в Долгопрудном пройдёт хакатон «ФЦК» от Phystech.Genesis и Фонда целевого капитала (ФЦК) МФТИ.",
      tags:['Machine Learning', 'Хакатон', 'ФЦК', 'МФТИ', 'Разработка'],
    },
    {
      title:"Cпектакль Миллиард лет до конца света",
      location:"КЗ",
      time:"1 марта, 10:00",
      description:"Концерт",
      tags:['Концерт', 'Искусство', 'Физтех', 'МФТИ'],
    },
  ],
  isLoading: false,
  error: null,
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EVENTS_REQUEST':
      return {...state, isLoading: true};
    case 'FETCH_EVENTS_SUCCESS':
      console.log(action);
      return {list: action.payload.data.map(e => e.fields), isLoading: false, error: 'error'};
    case 'FETCH_EVENTS_FAILURE':
      return {...state, isLoading: false, error: 'err'};
    default:
      return state
  }
};

export default events;