import React from 'react';
import styles from '../css/Events.module.css';
import { connect } from 'react-redux';
import Event from './Event';
import SearchInput from './SearchInput';
import IconButton from '@material-ui/core/IconButton';
import {Icon} from 'react-icons-kit';
import {ic_tune} from 'react-icons-kit/md/ic_tune';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import { fetchEvents, openFilters, closeFilters } from '../actions';
import Filters from './Filters';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilters: false,
      value: ''
    };
    this.handleFilters = this.handleFilters.bind(this);
  }

  handleFilters() {
    this.setState({isFilters: !this.state.isFilters});
  }

  componentDidMount() {
    let {dispatch} = this.props;
    dispatch(fetchEvents());
  }
  render() {
    let {events, isLoading, isFilters, fTags} = this.props;
    console.log(fTags);

    return (
      <div className={styles.wrapper}>
        {this.state.isFilters ?
          <div className={styles.filters}><Filters /></div> : null}
        <div className={styles.searchBar}>
        <SearchInput placeholder="Поиск" customChange={(val)=>{this.setState({value: val});}} />
          <IconButton onClick={this.handleFilters}>
            <Icon icon={ic_tune} size={32} />
          </IconButton>
        </div>
      <div className={styles.events}>
        {isLoading ? <LinearProgress color="secondary" /> : events.filter(e=>this.state.value.length === 0 || e.title.split(' ').some(s => s === this.state.value)).filter(e => e.tags.some(t => fTags.length === 0 || fTags.some(ft => t == ft))).map((e) => <Event
          title={e.title}
          location={e.location}
          time={e.time_str}
          description={e.description}
          tags={e.tags}
        />)}
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  screen: state.navigation.screen,
  events: state.events.list,
  isLoading: state.events.isLoading,
  isFilters: state.filters.isOpened,
  fTags: state.filters.filteredTags,
});

export default connect(mapStateToProps)(Events);