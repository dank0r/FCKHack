import React from 'react';
import styles from '../css/Events.module.css';
import { connect } from 'react-redux';

class Personal extends React.Component {
  render() {
    return (
      <div className={styles.events}>
        Not Available yet :)
      </div>
    );
  }
}

const mapStateToProps = state => ({
  screen: state.navigation.screen,
});

export default connect(mapStateToProps)(Personal);