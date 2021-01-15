import { WALLET_CONNECT_ERROR, WALLET_CONNECT_REQUEST, WALLET_CONNECT_SUCCESS } from "../constants";


const initialState = {
  web3: null,
  account: null,
  loading: false,
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case WALLET_CONNECT_REQUEST:
      return {
        ...state,
        loading: true
      }
      break;
    case WALLET_CONNECT_SUCCESS:
      return {
        ...state,
        web3: action.web3,
        account: action.account,
        loading: false
      }
      break;
    case WALLET_CONNECT_ERROR:
      return {
        ...state,
        web3: null,
        account: null,
        loading: false,
        error: true
      }
      break;
    default:
      return state;
  }
}
