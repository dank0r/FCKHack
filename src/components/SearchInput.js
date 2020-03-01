import React from 'react';
import styles from '../css/SearchInput.module.css';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  render() {
    console.log(styles);
    return (
      <div {...this.props} className={`${this.props.className} ${styles.wrapper}`}>
        <div className={styles.search}>
          <div className={styles.icon} />
          <div className={styles.inputWrapper}>
            <input placeholder={this.props.placeholder} onChange={this.props.onChange} className={`${styles.input}`} type="text"
                   value={this.state.value}
                   onChange={e => {this.setState({value: e.target.value});
                   this.props.customChange(e.target.value);
                   }}/>
            <div className={styles.underline} />
          </div>
        </div>
      </div>
    );
  }
}


export default SearchInput;