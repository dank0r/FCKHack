import React from 'react';
import styles from '../css/Events.module.css';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import {Icon} from 'react-icons-kit';
import TextField from '@material-ui/core/TextField';
import {ic_add} from 'react-icons-kit/md/ic_add';
import Chip from '@material-ui/core/Chip';
import { addFilter } from '../actions';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fTags: [],
      value: '',
    };
  }

  render() {
    let {dispatch} = this.props;
    return (
      <div className={styles.filters}>
        {this.state.fTags.map((t) => <Chip color="secondary" size="small" label={t} onClick={()=>null} />)}
        <TextField label="Добавить тэг" value={this.state.value} onChange={(e) => {this.setState({value: e.target.value});

        }} />
        <IconButton onClick={()=>{this.setState({fTags: this.state.fTags.concat(this.state.value), value: ''});
          dispatch(addFilter(this.state.value));
        }}>
          <Icon icon={ic_add} size={32} />
        </IconButton>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  screen: state.navigation.screen,
  events: state.events.list,
  isLoading: state.events.isLoading,
  isFilters: state.filters.isOpened,
});

export default connect(mapStateToProps)(Filters);