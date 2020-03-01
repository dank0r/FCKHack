import React from 'react';
import styles from '../css/Schedule.module.css';
import { connect } from 'react-redux';
import {Calendar, momentLocalizer, View,Views} from 'react-big-calendar';
import style from 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

let events = [
  {
    id: 1,
    title: 'Long Event',
    start: new Date('2020-03-01'),
    end: new Date('2020-03-01'),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2020, 2, 13, 0, 0, 0),
    end: new Date(2020, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2020, 10, 6, 0, 0, 0),
    end: new Date(2020, 10, 13, 0, 0, 0),
  },
];

//const minTime = new Date();
//minTime.setHours(9,0,0);

let formats = {
  timeGutterFormat: 'HH:mm',
};

class Schedule extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.navTop}></div>
        <div className={styles.schedule}>
          <Calendar
            formats={formats}
            showMultiDayTimes={true}
            step={15}
            timeslots={8}
            style={style}
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            views={[Views.DAY, Views.WEEK, Views.MONTH]}
            defaultView={Views.DAY}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  screen: state.navigation.screen,
});

export default connect(mapStateToProps)(Schedule);