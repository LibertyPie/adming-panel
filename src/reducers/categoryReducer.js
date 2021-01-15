import { CATEGORY_CONTRACT_INIT } from "../constants";

const initialState = {
  contract: null,
  loading: false,
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
      case CATEGORY_CONTRACT_INIT: 
      return {
          ...state,
          contract: action.contract
      }
      default:
          return state;
  }
}