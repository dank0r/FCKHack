import React from 'react';
import styles from '../css/Button.module.css';
import {Icon} from 'react-icons-kit';
import { connect } from 'react-redux'
import { setScreen } from '../actions';

class Button extends React.Component {
  render() {
    let {name, active, dispatch} = this.props;
    return (
      <div className={name === active ? styles.buttonPressed : styles.button} onClick={()=>{dispatch(setScreen(name));}}>
        <div className={styles.iconWrapper}>
          <Icon className={styles.icon} icon={this.props.icon} size={32} />
        </div>
      </div>
    );
  }
}

export default connect()(Button);