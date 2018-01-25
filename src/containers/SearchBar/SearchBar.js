import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './SearchBar.css';

class SearchBar extends Component {
  render(){
    return (
      <div className={styles.wrapper}>
        <FontAwesome className= {styles.search_icon} name='search'/>
        <input className={styles.search_bar} type='text' placeholder='Search coins...'/>
      </div>
    )
  }
}

export default SearchBar;
