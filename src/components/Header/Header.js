import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './Header.css'

import SearchBar from '../../containers/SearchBar/SearchBar'

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <FontAwesome name='bar-chart'/>
        <SearchBar />
      </div>
    </header>
  )
}

export default Header;
