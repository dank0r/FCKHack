import React from 'react';
import styles from '../css/Events.module.css';
import { connect } from 'react-redux';
import Event from './Event';
import SearchInput from './SearchInput';
import IconButton from '@material-ui/core/IconButton';
import {Icon} from 'react-icons-kit';
import {ic_tune} from 'react-icons-kit/md/ic_tune';

class Events extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.searchBar}>
        <SearchInput placeholder="Поиск" />
          <IconButton >
            <Icon icon={ic_tune} size={32} />
          </IconButton>
        </div>
      <div className={styles.events}>
        <Event
          title="Хакатон ФЦК"
          location="2-й этаж КСП"
          time="29 февраля, 10:00"
          description="С 29 февраля по 1 марта в Долгопрудном пройдёт хакатон «ФЦК» от Phystech.Genesis и Фонда целевого капитала (ФЦК) МФТИ."
          tags={['Machine Learning', 'Хакатон', 'ФЦК', 'МФТИ', 'Разработка']}
        />
        <Event
          title="Хакатон ФЦК"
          location="2-й этаж КСП"
          time="29 февраля, 10:00"
          description="С 29 февраля по 1 марта в Долгопрудном пройдёт хакатон «ФЦК» от Phystech.Genesis и Фонда целевого капитала (ФЦК) МФТИ."
          tags={['Machine Learning', 'Хакатон', 'ФЦК', 'МФТИ', 'Разработка']}
        />
        <Event
          title="Хакатон ФЦК"
          location="2-й этаж КСП"
          time="29 февраля, 10:00"
          description="С 29 февраля по 1 марта в Долгопрудном пройдёт хакатон «ФЦК» от Phystech.Genesis и Фонда целевого капитала (ФЦК) МФТИ."
          tags={['Machine Learning', 'Хакатон', 'ФЦК', 'МФТИ', 'Разработка']}
        />
        <Event
          title="Хакатон ФЦК"
          location="2-й этаж КСП"
          time="29 февраля, 10:00"
          description="С 29 февраля по 1 марта в Долгопрудном пройдёт хакатон «ФЦК» от Phystech.Genesis и Фонда целевого капитала (ФЦК) МФТИ."
          tags={['Machine Learning', 'Хакатон', 'ФЦК', 'МФТИ', 'Разработка']}
        />
        <Event
          title="Хакатон ФЦК"
          location="2-й этаж КСП"
          time="29 февраля, 10:00"
          description="С 29 февраля по 1 марта в Долгопрудном пройдёт хакатон «ФЦК» от Phystech.Genesis и Фонда целевого капитала (ФЦК) МФТИ."
          tags={['Machine Learning', 'Хакатон', 'ФЦК', 'МФТИ', 'Разработка']}
        />
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  screen: state.navigation.screen,
});

export default connect(mapStateToProps)(Events);