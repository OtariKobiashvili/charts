import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllCoins } from '../actions/index';
import styles from './App.css';

//Import Components
import Header from '../components/Header/Header'
import CoinCard from './coin_card/CoinCard';

class App extends Component {
  componentDidMount() {
    this.props.fetchAllCoins();
  }

  render() {
    return (
      <div>
        <Header />
        <div className={styles.app_container}>
          <CoinCard />
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { coins: state.coins };
}

export default connect(mapStateToProps, { fetchAllCoins })(App);
