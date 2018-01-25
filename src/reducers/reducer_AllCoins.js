import { GET_COINS } from "../actions/index";

export default function(state={}, action) {
  switch (action.type) {
    case GET_COINS:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
