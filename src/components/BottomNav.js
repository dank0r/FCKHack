import React from 'react';
import styles from '../css/BottomNav.module.css';
import Button from './Button';
import {ic_all_inclusive} from 'react-icons-kit/md/ic_all_inclusive';
import {ic_event} from 'react-icons-kit/md/ic_event';
import {ic_home} from 'react-icons-kit/md/ic_home';
import {ic_person} from 'react-icons-kit/md/ic_person';
import { connect } from 'react-redux';

class BottomNav extends React.Component {
  render() {
    return (
      <div className={styles.bottomNav}>
        <Button name="events" icon={ic_all_inclusive} active={this.props.active} />
        <Button name="schedule" icon={ic_event} active={this.props.active} />
        <Button name="home" icon={ic_home} active={this.props.active} />
        <Button name="personal" icon={ic_person} active={this.props.active} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  active: state.navigation.screen,
});

export default connect(mapStateToProps)(BottomNav);