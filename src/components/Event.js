import React from 'react';
import styles from '../css/Event.module.css';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import {Icon} from 'react-icons-kit';
import Badge from '@material-ui/core/Badge';
import {ic_expand_more} from 'react-icons-kit/md/ic_expand_more';
import {ic_expand_less} from 'react-icons-kit/md/ic_expand_less';
import {ic_event} from 'react-icons-kit/md/ic_event';




class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extended: false,
    };
    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand() {
    this.setState({extended: !this.state.extended});
  }

  render() {
    let {title, location, time, description, tags} = this.props;
    return (
      <div className={styles.event}>
        <Card className={styles.card}>
          <div className={styles.header}>
          <CardMedia
            className={styles.image}
          />
          <CardContent className={styles.info}>
            <div className={styles.title}>{title}</div>
            <div>{location}</div>
            <div>{time}</div>

          </CardContent>
          </div>
          <div className={styles.tags}>
            {tags.map((tag) => <div key={tag} className={styles.tag}><Chip color="secondary" size="small" label={tag} onClick={()=>null}/></div>)}
          </div>
          <Collapse in={this.state.extended} timeout="auto" unmountOnExit>
          <div className={styles.description}>
            {description}
          </div>
          </Collapse>
          <div className={styles.bottomBar}>
            <div className={styles.bottomMenu}>
                {this.state.expanded ?
                  (<IconButton onClick={this.handleExpand} >
                    <Icon style={{fill: '#b700ff'}} icon={ic_expand_less} size={32} />
                  </IconButton>)
                : (<IconButton onClick={this.handleExpand} >
                    <Icon style={{fill: '#b700ff'}} icon={ic_expand_more} size={32} />
                  </IconButton>)}
              <IconButton >
                <Badge anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                       badgeContent={'+'}
                       color="secondary">
                  <Icon className={styles.icon} icon={ic_event} size={32} />
                </Badge>
              </IconButton>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  screen: state.navigation.screen,
});

export default connect(mapStateToProps)(Event);