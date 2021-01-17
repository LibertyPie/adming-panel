import { CATEGORY_LIST_REQUEST, CATEGORY_LIST_ERROR, CATEGORY_LIST_SUCCESS} from "../constants";

const initialState = {
  list: [],
  loading: false,
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
      case CATEGORY_LIST_REQUEST: 
      return {
          ...state,
          error: false,
          loading: true
      }
      break;
      case CATEGORY_LIST_SUCCESS:
        return {
          ...state,
          list: action.list,
          error: false,
          loading: false
        }
      break;
      case CATEGORY_LIST_ERROR:
        return {
          ...state,
          list: [],
          error:true
        }
      break;
      default:
          return state;
  }
}