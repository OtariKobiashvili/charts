import _ from 'lodash';

const ROOT_URL = "https://api.coinmarketcap.com/v1/ticker/?";

export const GET_COINS = "GET_ALL_COINS";

export function fetchAllCoins() {
  return function(dispatch) {
    fetch(`${ROOT_URL}start=0&limit=100`)
    .then( coins => {
      return coins=coins.json();
    })
    .then( coins => {
      const action = {
        type: GET_COINS,
        payload: coins
      }

      dispatch(action);
    })
  }
}

// export function fetchAllCoins() {
//   return function(dispatch) {
//     fetch(`${ROOT_URL}data/all/coinlist`)
//     .then( coins => {
//       return coins = coins.json();
//     })
//     .then( coins => {
//       return coins = _.mapKeys(coins.Data, (value, key) => {
//         return value.SortOrder;
//       })
//     })
//     .then( coins => {
//       return coins = Object.values(coins).slice(0, 100);
//     })
//     .then( coins =>  {
//       const action = {
//         type: GET_COINS,
//         payload: coins
//       }
//       dispatch(action)
//     })
//   }
// }
