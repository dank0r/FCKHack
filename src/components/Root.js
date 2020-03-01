import React from 'react';
import styles from '../css/Root.module.css';
import { connect } from 'react-redux';
import Events from './Events';
import Schedule from './Schedule';
import Home from './Home';
import Personal from './Personal';

function Screen(screen) {
  switch(screen) {
    case 'events':
      return (<Events />);
    case 'schedule':
      return (<Schedule />);
    case 'home':
      return (<Home />);
    case 'personal':
      return (<Personal />);
    default:
      return null;
  }
}

class Root extends React.Component {
  render() {
    let { screen } = this.props;
    return (
      <div className={styles.root}>
        {Screen(screen)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  screen: state.navigation.screen,
});

export default connect(mapStateToProps)(Root);